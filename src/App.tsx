import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThankYou  from './pages/ThankYou';
import { JoinUs } from "./pages/JoinUs";
import { WindTunnel } from './pages/WindTunnel';
import {Drone} from "./pages/Drone";
import {SolidFuel} from "./pages/SolidFuel";
import {CanSat} from "./pages/CanSat";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/join" element={<JoinUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/windtunnel" element={<WindTunnel />} />
        <Route path="/drone" element={<Drone />} />
        <Route path="/rocket" element={<SolidFuel />} />
        <Route path="/cansat" element={<CanSat />} />
        
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
