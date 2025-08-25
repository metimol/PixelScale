import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function NotFound() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-[#020100] min-h-screen relative text-[#f1d302] flex flex-col" data-name="404 page">
      <Header isMobile={isMobile} />

      {/* Main Content */}
      <main className="flex-1 relative px-4 md:px-[50px] py-8 md:py-16 overflow-hidden flex flex-col items-center justify-center">
        {/* 404 Title */}
        <section className="text-center mb-8 md:mb-12">
          <h1 className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold text-[#f1d302] text-[60px] md:text-[80px] lg:text-[100px] leading-[1] mb-4">
            404
          </h1>
          <h2 className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold text-[#f1d302] text-[24px] md:text-[32px] lg:text-[40px] leading-[1.2] mb-6">
            Page Not Found
          </h2>
          <p className="font-['Pixelify_Sans:Regular',_sans-serif] font-normal text-[#ffffff] text-[16px] md:text-[20px] lg:text-[24px] leading-[1.4] max-w-2xl mx-auto">
            Oops! The page you're looking for has vanished into the digital void. 
            Even our witch couldn't find it!
          </p>
        </section>

        {/* Witch Image */}
        <section className="relative mb-8 md:mb-12" aria-label="Witch illustration">
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src="/PixelScale/Witch.svg"
                alt="Pixel art witch illustration"
                className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] max-w-full max-h-full object-contain filter drop-shadow-lg"
                draggable={false}
              />
              {/* Magical glow effect */}
              <div 
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                  background: 'radial-gradient(circle, rgba(241, 211, 2, 0.1) 0%, transparent 70%)',
                  filter: 'blur(20px)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* Back to Home Button */}
            <Link 
              to="/"
              className="bg-[#f1d302] text-[#020100] font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold px-8 py-4 text-[18px] md:text-[20px] lg:text-[24px] rounded-lg hover:bg-[#f1d302]/90 transition-colors duration-200 border-2 border-[#f1d302] hover:scale-105 transform transition-transform"
            >
              Return Home
            </Link>
            
            {/* Go Back Button */}
            <button 
              onClick={() => window.history.back()}
              className="bg-transparent text-[#f1d302] font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold px-8 py-4 text-[18px] md:text-[20px] lg:text-[24px] rounded-lg border-2 border-[#f1d302] hover:bg-[#f1d302]/10 transition-colors duration-200 hover:scale-105 transform transition-transform"
            >
              Go Back
            </button>
          </div>
        </section>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 left-4 md:left-8 opacity-20" aria-hidden="true">
          <div className="text-[#f1d302] text-[40px] md:text-[60px] lg:text-[80px] font-['Pixelify_Sans:SemiBold',_sans-serif] animate-pulse">
            ?
          </div>
        </div>
        <div className="absolute top-1/3 right-4 md:right-8 opacity-20" aria-hidden="true">
          <div className="text-[#f1d302] text-[30px] md:text-[50px] lg:text-[70px] font-['Pixelify_Sans:SemiBold',_sans-serif] animate-pulse">
            !
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 opacity-20" aria-hidden="true">
          <div className="text-[#f1d302] text-[35px] md:text-[55px] lg:text-[75px] font-['Pixelify_Sans:SemiBold',_sans-serif] animate-pulse">
            ?
          </div>
        </div>
      </main>

      <Footer isMobile={isMobile} />
    </div>
  );
}