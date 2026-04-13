import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import People from "./pages/People.tsx";
import Transactions from "./pages/Transactions.tsx";
import Contact from "./pages/Contact.tsx";
import ContactSuccess from "./pages/ContactSuccess.tsx";
import CapitalRaising from "./pages/services/CapitalRaising.tsx";
import MergersAcquisitions from "./pages/services/MergersAcquisitions.tsx";
import Valuations from "./pages/services/Valuations.tsx";
import BeeTransactions from "./pages/services/BeeTransactions.tsx";
import StrategicConsulting from "./pages/services/StrategicConsulting.tsx";
import ManagementBuyOuts from "./pages/services/ManagementBuyOuts.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/people" element={<People />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact/success" element={<ContactSuccess />} />
            <Route path="/services/capital-raising" element={<CapitalRaising />} />
            <Route path="/services/mergers-and-acquisitions" element={<MergersAcquisitions />} />
            <Route path="/services/valuations" element={<Valuations />} />
            <Route path="/services/bee-transactions" element={<BeeTransactions />} />
            <Route path="/services/strategic-consulting" element={<StrategicConsulting />} />
            <Route path="/services/management-buy-outs" element={<ManagementBuyOuts />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
