import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";

const WebsiteLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // <div className="min-h-screen bg-white">
    //   <Header 
    //     isMobileMenuOpen={isMobileMenuOpen}
    //     setIsMobileMenuOpen={setIsMobileMenuOpen}
    //   />
      
    //   <main className="pt-16">
    //     <Outlet />
    //   </main>
      
    //   <Footer />
    // </div>
      <div>
      <Header />
      <main>
        <Outlet /> {/* This will render the child routes, like AboutPage */}
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLayout;