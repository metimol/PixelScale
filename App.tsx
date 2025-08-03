import svgPaths from "./imports/svg-8ik6ppt551";
import svgPathsMobile from "./imports/svg-e7aom333d7";
import svgPathsUploaded from "./imports/svg-3bujfkkrs7";
import svgPathsUploadedMobile from "./imports/svg-2ij2klx2ty";
// Placeholder for Pikachu image - replace with actual asset
const imgPikachu = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgZmlsbD0iI0ZGRkYwMCIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjIiLz48Y2lyY2xlIGN4PSI0MCIgY3k9IjQwIiByPSI1IiBmaWxsPSIjMDAwIi8+PGNpcmNsZSBjeD0iNjAiIGN5PSI0MCIgcj0iNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik00MCA2MFFNNTAgNjVRNjAgNjAiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIyIiBmaWxsPSJub25lIi8+PHRleHQgeD0iNTAiIHk9IjkwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwIiBmaWxsPSIjMDAwIj5QaWthY2h1PC90ZXh0Pjwvc3ZnPg==";
import { useState, useEffect } from "react";
import { upscalePixelArt, downloadCanvas } from "./src/utils/pixelArtScaler";

function UploadCloud({ isMobile = false }: { isMobile?: boolean }) {
  const size = isMobile ? "size-20" : "size-[120px]";
  const paths = isMobile ? svgPathsMobile : svgPaths;
  const pathKey = isMobile ? "p16900d80" : "p123f380";
  const viewBox = isMobile ? "0 0 80 80" : "0 0 120 120";

  return (
    <div className={`relative shrink-0 ${size}`} data-name="Upload cloud">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={viewBox}
      >
        <g id="Upload cloud">
          <path
            d={paths[pathKey as keyof typeof paths]}
            id="Icon"
            stroke="#F1D302"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
      </svg>
    </div>
  );
}

function DollarSign({ isMobile = false }: { isMobile?: boolean }) {
  const size = isMobile ? "size-6" : "size-[30px]";
  const paths = isMobile ? svgPathsUploadedMobile : svgPathsUploaded;
  const pathKey = isMobile ? "p288ce020" : "p2eb8b280";
  const viewBox = isMobile ? "0 0 24 24" : "0 0 30 30";

  return (
    <div className={`relative shrink-0 ${size}`} data-name="Dollar sign">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={viewBox}
      >
        <g clipPath="url(#clip0_dollar)" id="Dollar sign">
          <path
            d={paths[pathKey as keyof typeof paths]}
            id="Icon"
            stroke="#1E1E1E"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_dollar">
            <rect fill="white" height={isMobile ? "24" : "30"} width={isMobile ? "24" : "30"} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Github({ isMobile = false }: { isMobile?: boolean }) {
  const size = isMobile ? "size-5" : "size-[35px]";
  const paths = isMobile ? svgPathsUploadedMobile : svgPathsUploaded;
  const pathKey = isMobile ? "p48b43e0" : "p3cb8eee0";
  const viewBox = isMobile ? "0 0 20 20" : "0 0 35 35";

  return (
    <div className={`relative shrink-0 ${size}`} data-name="Github">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={viewBox}
      >
        <g clipPath="url(#clip0_github)" id="Github">
          <path
            d={paths[pathKey as keyof typeof paths]}
            id="Icon"
            stroke="#F1D302"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={isMobile ? "2" : "4"}
          />
        </g>
        <defs>
          <clipPath id="clip0_github">
            <rect fill="white" height={isMobile ? "20" : "35"} width={isMobile ? "20" : "35"} />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function FreeToolBadge({ isMobile = false }: { isMobile?: boolean }) {
  const textSize = isMobile ? "text-[20px]" : "text-[25px]";
  const padding = isMobile ? "p-[7px]" : "p-[7px]";

  return (
    <div className={`bg-[#f1d302] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip ${padding} relative shrink-0`}>
      <DollarSign isMobile={isMobile} />
      <div className={`font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#020100] ${textSize} text-left text-nowrap`}>
        <p className="block leading-[normal] whitespace-pre">100% Free tool</p>
      </div>
    </div>
  );
}

function Component100Free({ isMobile = false }: { isMobile?: boolean }) {
  const borderWidth = isMobile ? "border-[7px]" : "border-[10px]";
  const padding = isMobile ? "p-[12px]" : "p-[15px]";

  return (
    <div className="relative" data-name="100% free">
      <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip ${padding} relative`}>
        <FreeToolBadge isMobile={isMobile} />
      </div>
      <div
        aria-hidden="true"
        className={`absolute border-[#f1d302] ${borderWidth} border-solid inset-0 pointer-events-none`}
      />
    </div>
  );
}

function Upload({ isMobile = false, onFileSelect }: { isMobile?: boolean; onFileSelect: (file: File) => void }) {
  const [isDragOver, setIsDragOver] = useState(false);
  const textSize = isMobile ? "text-[20px]" : "text-[30px]";
  const padding = isMobile ? "py-[40px]" : "py-[60px]";

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" data-name="Upload">
      <div 
        className={`box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-4 ${padding} relative cursor-pointer transition-all duration-200 ${isDragOver ? 'bg-[#f1d302]/10' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => document.getElementById('file-input')?.click()}
      >
        <UploadCloud isMobile={isMobile} />
        <div className={`flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f1d302] ${textSize} text-center text-nowrap`}>
          <p className="block leading-[normal] whitespace-pre">
            Upload your image here
          </p>
        </div>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          onChange={handleFileInput}
          className="hidden"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[5px] border-dashed inset-[-2.5px] pointer-events-none"
      />
    </div>
  );
}

function UploadedState({ isMobile = false, onDownload, onClear, isProcessing = false, error = null }: { 
  isMobile?: boolean; 
  onDownload: () => void; 
  onClear: () => void;
  isProcessing?: boolean;
  error?: string | null;
}) {
  const textSize = isMobile ? "text-[25px]" : "text-[30px]";
  const buttonTextSize = isMobile ? "text-[20px]" : "text-[30px]";
  const padding = isMobile ? "py-[50px]" : "py-[60px]";
  const buttonWidth = isMobile ? "w-[101px]" : "w-[146px]";

  return (
    <div className="relative w-full max-w-4xl mx-auto" data-name="Upload">
      <div className={`box-border content-stretch flex flex-col gap-5 items-center justify-center overflow-clip px-4 ${padding} relative`}>
        <div className={`flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f1d302] ${textSize} text-center text-nowrap`}>
          <p className="block leading-[normal] whitespace-pre">
            {isProcessing ? "Processing your image..." : error ? "Error processing image" : "Your image is ready (4000x4000)"}
          </p>
        </div>
        
        {error && (
          <div className={`flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-red-400 text-[16px] text-center max-w-md`}>
            <p className="block leading-[normal] whitespace-pre-wrap">
              {error}
            </p>
          </div>
        )}
        
        {/* Processing indicator */}
        {isProcessing && (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#f1d302]"></div>
          </div>
        )}
        
        {/* Buttons */}
        {!isProcessing && !error && (
        <div className="box-border content-stretch flex flex-row gap-[30px] items-start justify-start overflow-clip p-[10px] relative shrink-0">
          {/* Download Button */}
          <button 
            onClick={onDownload}
            className="bg-[#f1d302] box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-[5px] py-2 relative rounded-lg shrink-0 hover:bg-[#f1d302]/90 transition-colors"
          >
            <div className={`flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#000000] ${buttonTextSize} text-center text-nowrap`}>
              <p className="block leading-[normal] whitespace-pre">Download</p>
            </div>
          </button>
        </div>
        )}
        
        {/* Clear button - always visible when there's a file */}
        <div className="box-border content-stretch flex flex-row gap-[30px] items-start justify-start overflow-clip p-[10px] relative shrink-0">
          <button 
            onClick={onClear}
            className={`relative rounded-lg shrink-0 ${buttonWidth} hover:bg-[#f1d302]/10 transition-colors`}
          >
            <div className={`box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-[5px] py-2 relative ${buttonWidth}`}>
              <div className={`flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f1d302] ${buttonTextSize} text-center text-nowrap`}>
                <p className="block leading-[normal] whitespace-pre">Clear</p>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute border border-[#f1d302] border-solid inset-0 pointer-events-none rounded-lg"
            />
          </button>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[5px] border-dashed inset-[-2.5px] pointer-events-none"
      />
    </div>
  );
}

export default function App() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [scaledCanvas, setScaledCanvas] = useState<HTMLCanvasElement | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    setError(null);
    setIsProcessing(true);
    
    try {
      console.log("Processing file:", file.name);
      
      // Process the image using our pixel art scaling
      const result = await upscalePixelArt(file);
      
      // Use the target result (4000x4000) for download
      setScaledCanvas(result.target);
      
      console.log("Image processed successfully:", {
        original: `${file.name}`,
        scaled: `${result.target.width}x${result.target.height}`
      });
    } catch (err) {
      console.error("Error processing image:", err);
      setError(err instanceof Error ? err.message : 'Failed to process image');
      setSelectedFile(null);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (scaledCanvas && selectedFile) {
      // Download the scaled 4000x4000 image
      const filename = `upscaled_4k_${selectedFile.name.replace(/\.[^/.]+$/, "")}.png`;
      downloadCanvas(scaledCanvas, filename);
    }
  };

  const handleClear = () => {
    setSelectedFile(null);
    setScaledCanvas(null);
    setError(null);
    setIsProcessing(false);
  };

  return (
    <div className="bg-[#020100] min-h-screen relative text-[#f1d302]" data-name="Main page">
      {/* Header */}
      <header className="relative w-full">
        <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-[15px] md:px-[50px] py-[15px] relative w-full">
          {/* Logo */}
          <div className="box-border content-stretch flex flex-col font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold gap-[5px] items-start justify-start leading-[0] overflow-clip px-2.5 py-0 relative shrink-0 text-left text-nowrap">
            <div className="relative shrink-0 text-[#f1d302] text-[35px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                PixelScale
              </p>
            </div>
            <div className="relative shrink-0 text-[#ffffff] text-[20px]">
              <p className="block leading-[normal] text-nowrap whitespace-pre">
                Free PixelArt Upscaler
              </p>
            </div>
          </div>
          
          {/* GitHub Link - Hidden on mobile */}
          <div className="hidden md:block">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block p-[10px]">
              <Github />
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#f1d302] border-[0px_0px_5px] md:border-[0px_0px_7px] border-solid inset-0 pointer-events-none"
        />
      </header>

      {/* Body */}
      <main className="relative px-4 md:px-[50px] py-8 md:py-16">
        {/* Free Tool Badge */}
        <div className="flex justify-center mb-8 md:mb-12">
          <Component100Free isMobile={isMobile} />
        </div>

        {/* Description */}
        <div className="max-w-4xl mx-auto mb-8 md:mb-16">
          <p className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[normal] text-[#f1d302] text-[20px] md:text-[25px] text-center">
            Transform your low-resolution pixel art into crisp, high-quality
            images. No sign-up required. No watermarks. Just pure pixel
            perfection.
          </p>
        </div>

        {/* Upload Area or Uploaded State */}
        <div className="relative mb-8 md:mb-16">
          {selectedFile ? (
            <UploadedState 
              isMobile={isMobile}
              onDownload={handleDownload}
              onClear={handleClear}
              isProcessing={isProcessing}
              error={error}
            />
          ) : (
            <Upload 
              isMobile={isMobile} 
              onFileSelect={handleFileSelect}
            />
          )}
        </div>

        {/* Pikachu Character - Desktop */}
        <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 h-[300px] w-[300px] items-center justify-center pointer-events-none">
          <div className="flex-none rotate-[30.05deg]">
            <div
              className="bg-center bg-cover bg-no-repeat size-[220px]"
              data-name="Pikachu"
              style={{ backgroundImage: `url('${imgPikachu}')` }}
            />
          </div>
        </div>

        {/* Mobile Pikachu */}
        <div className="flex md:hidden justify-center mb-8">
          <div className="flex items-center justify-center h-[200px] w-[200px]">
            <div className="flex-none rotate-[30.05deg]">
              <div
                className="bg-center bg-cover bg-no-repeat size-[150px]"
                data-name="Pikachu"
                style={{ backgroundImage: `url('${imgPikachu}')` }}
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative w-full mt-auto">
        <div className="box-border content-stretch flex flex-row items-center justify-between md:justify-end px-[15px] md:px-[50px] py-2.5 relative w-full">
          {/* GitHub Link - Visible on mobile */}
          <div className="block md:hidden">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="block">
              <Github isMobile={true} />
            </a>
          </div>
          
          {/* Credits */}
          <div className="flex items-center gap-1">
            <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] text-[#f1d302] text-[15px] text-left text-nowrap">
              <p className="block leading-[normal] whitespace-pre">{`Created by `}</p>
            </div>
            <div className="relative">
              <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative">
                <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f1d302] text-[15px] text-left text-nowrap">
                  <p className="block leading-[normal] whitespace-pre">Metimol</p>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute border-[#f1d302] border-[0px_0px_1px] border-solid inset-0 pointer-events-none"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}