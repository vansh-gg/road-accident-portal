import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import FindScheme from "./pages/FindScheme";
import Schemes from "./pages/Schemes";
import SchemeDetail from "./pages/SchemeDetail";
import Documents from "./pages/Documents";
import LegalAid from "./pages/LegalAid";
import RoadSafety from "./pages/RoadSafety";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-my-scheme" element={<FindScheme />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/schemes/:id" element={<SchemeDetail />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/legal-aid" element={<LegalAid />} />
          <Route path="/road-safety" element={<RoadSafety />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}
