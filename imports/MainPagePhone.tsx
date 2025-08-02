import svgPaths from "./svg-e7aom333d7";
import imgPikachu from "figma:asset/a6368de73b64053a9ca02c9b339ef90445998d7a.png";

function Github() {
  return (
    <div className="relative shrink-0 size-5" data-name="Github">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g clipPath="url(#clip0_1_142)" id="Github">
          <path
            d={svgPaths.p48b43e0}
            id="Icon"
            stroke="var(--stroke-0, #F1D302)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_142">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative shrink-0">
      <Github />
    </div>
  );
}

function Frame4() {
  return (
    <div className="[grid-area:1_/_1] ml-[87px] mt-0 relative">
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
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold ml-0 mt-0 relative text-[#f1d302] text-[15px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`Created by `}</p>
      </div>
      <Frame4 />
    </div>
  );
}

function Footer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row items-center justify-between left-0 overflow-clip px-[15px] py-2.5 top-[830px] w-[402px]"
      data-name="Footer"
    >
      <Frame2 />
      <Group1 />
    </div>
  );
}

function UploadCloud() {
  return (
    <div className="relative shrink-0 size-20" data-name="Upload cloud">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 80 80"
      >
        <g id="Upload cloud">
          <path
            d={svgPaths.p16900d80}
            id="Icon"
            stroke="var(--stroke-0, #F1D302)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
      </svg>
    </div>
  );
}

function Upload() {
  return (
    <div
      className="absolute left-[34px] top-[408px] w-[334px]"
      data-name="Upload"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-[391px] py-[60px] relative w-[334px]">
          <UploadCloud />
          <div className="flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f1d302] text-[20px] text-center text-nowrap">
            <p className="block leading-[normal] whitespace-pre">
              Upload your image here
            </p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[5px] border-dashed inset-[-2.5px] pointer-events-none"
      />
    </div>
  );
}

function DollarSign() {
  return (
    <div className="relative shrink-0 size-6" data-name="Dollar sign">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 24 24"
      >
        <g clipPath="url(#clip0_1_136)" id="Dollar sign">
          <path
            d={svgPaths.p288ce020}
            id="Icon"
            stroke="var(--stroke-0, #1E1E1E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_136">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f1d302] box-border content-stretch flex flex-row gap-1 items-center justify-center overflow-clip p-[7px] relative shrink-0">
      <DollarSign />
      <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#020100] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">100% Free tool</p>
      </div>
    </div>
  );
}

function Component100Free() {
  return (
    <div className="absolute left-[95.5px] top-[50px]" data-name="100% free">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[12px] relative">
        <Frame3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[7px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Body() {
  return (
    <div
      className="absolute h-[729px] left-0 top-[101px] w-[402px]"
      data-name="Body"
    >
      <Upload />
      <div className="absolute flex h-[267.504px] items-center justify-center left-[154px] top-[196px] w-[267.504px]">
        <div className="flex-none rotate-[30.05deg]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[195.792px]"
            data-name="Pikachu"
            style={{ backgroundImage: `url('${imgPikachu}')` }}
          />
        </div>
      </div>
      <div className="absolute font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[34px] text-[#f1d302] text-[20px] text-left top-[162px] w-[334px]">
        <p className="block leading-[normal]">
          Transform your low-resolution pixel art into crisp, high-quality
          images. No sign-up required. No watermarks. Just pure pixel
          perfection.
        </p>
      </div>
      <Component100Free />
    </div>
  );
}

function Frame1() {
  return (
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
  );
}

function Header() {
  return (
    <div className="absolute left-0 top-0 w-[402px]" data-name="Header">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start overflow-clip p-[15px] relative w-[402px]">
        <Frame1 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[0px_0px_5px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

export default function MainPagePhone() {
  return (
    <div
      className="bg-[#020100] relative size-full"
      data-name="Main page (phone)"
    >
      <Footer />
      <Body />
      <Header />
    </div>
  );
}