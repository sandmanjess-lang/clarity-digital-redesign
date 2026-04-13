<?php
header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Rate limiting by IP (simple file-based)
$ip = $_SERVER['REMOTE_ADDR'];
$rateLimitFile = sys_get_temp_dir() . '/contact_rate_' . md5($ip);
if (file_exists($rateLimitFile)) {
    $lastSubmit = (int)file_get_contents($rateLimitFile);
    if (time() - $lastSubmit < 60) {
        http_response_code(429);
        echo json_encode(['error' => 'Too many requests. Please wait a minute.']);
        exit;
    }
}
file_put_contents($rateLimitFile, time());

// Parse input
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request']);
    exit;
}

// Sanitize
$firstName = htmlspecialchars(trim($input['firstName'] ?? ''), ENT_QUOTES, 'UTF-8');
$lastName  = htmlspecialchars(trim($input['lastName'] ?? ''), ENT_QUOTES, 'UTF-8');
$email     = filter_var(trim($input['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone     = htmlspecialchars(trim($input['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$company   = htmlspecialchars(trim($input['company'] ?? ''), ENT_QUOTES, 'UTF-8');
$service   = htmlspecialchars(trim($input['service'] ?? ''), ENT_QUOTES, 'UTF-8');
$message   = htmlspecialchars(trim($input['message'] ?? ''), ENT_QUOTES, 'UTF-8');

// Validate required fields
if (!$firstName || !$lastName || !$email || !$service || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing required fields']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address']);
    exit;
}

// Validate field lengths
if (strlen($firstName) > 100 || strlen($lastName) > 100 || strlen($email) > 255 || strlen($message) > 2000) {
    http_response_code(400);
    echo json_encode(['error' => 'Field exceeds maximum length']);
    exit;
}

// Build email body
$body = "
<html>
<body style='font-family: Arial, sans-serif; color: #333;'>
<h2 style='color: #4a7c3f;'>New Contact Form Submission</h2>
<table style='border-collapse: collapse; width: 100%; max-width: 600px;'>
<tr><td style='padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;'>Name:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>{$firstName} {$lastName}</td></tr>
<tr><td style='padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;'>Email:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'><a href='mailto:{$email}'>{$email}</a></td></tr>
<tr><td style='padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;'>Phone:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>" . ($phone ?: 'Not provided') . "</td></tr>
<tr><td style='padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;'>Company:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>" . ($company ?: 'Not provided') . "</td></tr>
<tr><td style='padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;'>Service Area:</td><td style='padding: 8px; border-bottom: 1px solid #eee;'>{$service}</td></tr>
</table>
<h3 style='color: #4a7c3f; margin-top: 20px;'>Message:</h3>
<p style='background: #f9f9f9; padding: 15px; border-radius: 5px; line-height: 1.6;'>" . nl2br($message) . "</p>
<hr style='border: none; border-top: 1px solid #eee; margin-top: 30px;'>
<p style='font-size: 12px; color: #999;'>This message was sent from the Clarity Group website contact form.</p>
</body>
</html>
";

// SMTP Configuration
$smtpHost = 'mail.claritygroup.co.za';
$smtpPort = 465;
$smtpUser = 'website@claritygroup.co.za';
$smtpPass = 'tgSIzQ3p4n!3FDDK';
$fromEmail = 'website@claritygroup.co.za';
$fromName = 'Clarity Group Website';
$toEmail = 'info@claritygroup.co.za';
$bccEmail = 'gerald@in-detail.com';
$subject = "Website Enquiry: {$service} - {$firstName} {$lastName}";

// Try PHPMailer first, fall back to native mail()
$phpmailerPath = __DIR__ . '/vendor/autoload.php';

if (file_exists($phpmailerPath)) {
    require $phpmailerPath;
    
    $mail = new PHPMailer\PHPMailer\PHPMailer(true);
    
    try {
        $mail->isSMTP();
        $mail->Host       = $smtpHost;
        $mail->SMTPAuth   = true;
        $mail->Username   = $smtpUser;
        $mail->Password   = $smtpPass;
        $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = $smtpPort;
        
        $mail->setFrom($fromEmail, $fromName);
        $mail->addReplyTo($email, "{$firstName} {$lastName}");
        $mail->addAddress($toEmail);
        $mail->addBCC($bccEmail);
        
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body    = $body;
        $mail->AltBody = strip_tags(str_replace(['<br>', '<br/>', '<br />'], "\n", $body));
        
        $mail->send();
        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
} else {
    // Fallback: native mail() function
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: {$fromName} <{$fromEmail}>\r\n";
    $headers .= "Reply-To: {$firstName} {$lastName} <{$email}>\r\n";
    $headers .= "Bcc: {$bccEmail}\r\n";
    
    if (mail($toEmail, $subject, $body, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to send email']);
    }
}
?>
