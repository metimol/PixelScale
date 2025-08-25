import svgPathsUploaded from "../../imports/svg-3bujfkkrs7";
import svgPathsUploadedMobile from "../../imports/svg-2ij2klx2ty";

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

export default function Header({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <header className="relative w-full">
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-[15px] md:px-[50px] py-[15px] relative w-full">
        {/* Logo */}
        <div className="box-border content-stretch flex flex-col font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold gap-[5px] items-start justify-start leading-[0] overflow-clip px-2.5 py-0 relative shrink-0 text-left text-nowrap">
          <div className={`relative shrink-0 text-[#f1d302] ${isMobile ? 'text-[28px]' : 'text-[35px]'}`}>
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              PixelScale
            </p>
          </div>
          <div className={`relative shrink-0 text-[#ffffff] ${isMobile ? 'text-[16px]' : 'text-[20px]'}`}>
            <p className="block leading-[normal] text-nowrap whitespace-pre">
              Free PixelArt Upscaler
            </p>
          </div>
        </div>
        
        {/* GitHub Link - Hidden on mobile */}
        <div className="hidden md:block">
          <a href="https://github.com/metimol/PixelScale" target="_blank" rel="noopener noreferrer" className="block p-[10px]">
            <Github />
          </a>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-b-[5px] md:border-b-[7px] border-solid inset-0 pointer-events-none"
      />
    </header>
  );
}