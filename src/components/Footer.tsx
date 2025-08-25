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

export default function Footer({ isMobile = false }: { isMobile?: boolean }) {
  return (
    <footer className="relative w-full mt-auto">
      <div className="box-border content-stretch flex flex-row items-center justify-between md:justify-end px-[15px] md:px-[50px] py-2.5 relative w-full">
        {/* GitHub Link - Visible on mobile */}
        <div className="block md:hidden">
          <a href="https://github.com/metimol/PixelScale" target="_blank" rel="noopener noreferrer" className="block">
            <Github isMobile={true} />
          </a>
        </div>
        
        {/* Credits */}
        <div className="flex items-center gap-1">
          <div className={`font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] text-[#f1d302] ${isMobile ? 'text-[13px]' : 'text-[15px]'} text-left text-nowrap`}>
            <p className="block leading-[normal] whitespace-pre">{`Created by `}</p>
          </div>
          <div className="relative">
            <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative">
              <a
                href="https://github.com/metimol"
                target="_blank"
                rel="noopener noreferrer"
                className={`font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f1d302] ${isMobile ? 'text-[13px]' : 'text-[15px]'} text-left text-nowrap hover:underline`}
              >
                <p className="block leading-[normal] whitespace-pre">Metimol</p>
              </a>
            </div>
            <div
              aria-hidden="true"
              className="absolute border-[#f1d302] border-b border-solid inset-0 pointer-events-none"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}