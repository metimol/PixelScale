import svgPaths from "./svg-8ik6ppt551";
import imgPikachu from "figma:asset/a6368de73b64053a9ca02c9b339ef90445998d7a.png";

function Frame4() {
  return (
    <div className="relative shrink-0">
      <div className="box-border content-stretch flex flex-row items-center justify-center overflow-clip p-0 relative">
        <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f1d302] text-[20px] text-left text-nowrap">
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

function Footer() {
  return (
    <div
      className="absolute box-border content-stretch flex flex-row gap-[5px] items-center justify-end left-0 overflow-clip px-[50px] py-2.5 top-[788px] w-[1280px]"
      data-name="Footer"
    >
      <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f1d302] text-[20px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">{`Created by `}</p>
      </div>
      <Frame4 />
    </div>
  );
}

function UploadCloud() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="Upload cloud">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 120 120"
      >
        <g id="Upload cloud">
          <path
            d={svgPaths.p123f380}
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
    <div className="absolute left-[82px] top-[350px]" data-name="Upload">
      <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center overflow-clip px-[391px] py-[60px] relative">
        <UploadCloud />
        <div className="flex flex-col font-['Pixelify_Sans:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#f1d302] text-[30px] text-center text-nowrap">
          <p className="block leading-[normal] whitespace-pre">
            Upload your image here
          </p>
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
    <div className="relative shrink-0 size-[30px]" data-name="Dollar sign">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 30 30"
      >
        <g clipPath="url(#clip0_1_90)" id="Dollar sign">
          <path
            d={svgPaths.p2eb8b280}
            id="Icon"
            stroke="var(--stroke-0, #1E1E1E)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_90">
            <rect fill="white" height="30" width="30" />
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
      <div className="font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#020100] text-[25px] text-left text-nowrap">
        <p className="block leading-[normal] whitespace-pre">100% Free tool</p>
      </div>
    </div>
  );
}

function Component100Free() {
  return (
    <div className="absolute left-[510.5px] top-20" data-name="100% free">
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip p-[15px] relative">
        <Frame3 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[10px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

function Body() {
  return (
    <div
      className="absolute h-[661px] left-0 overflow-clip top-[101px] w-[1280px]"
      data-name="Body"
    >
      <Upload />
      <div className="absolute font-['Pixelify_Sans:SemiBold',_sans-serif] font-semibold leading-[0] left-[190px] text-[#f1d302] text-[25px] text-left top-[222px] w-[900px]">
        <p className="block leading-[normal]">
          Transform your low-resolution pixel art into crisp, high-quality
          images. No sign-up required. No watermarks. Just pure pixel
          perfection.
        </p>
      </div>
      <div className="absolute flex h-[388.895px] items-center justify-center left-[897px] top-[-78px] w-[388.895px]">
        <div className="flex-none rotate-[30.05deg]">
          <div
            className="bg-center bg-cover bg-no-repeat size-[284.636px]"
            data-name="Pikachu"
            style={{ backgroundImage: `url('${imgPikachu}')` }}
          />
        </div>
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

function Github() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Github">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 35 35"
      >
        <g clipPath="url(#clip0_1_93)" id="Github">
          <path
            d={svgPaths.p3cb8eee0}
            id="Icon"
            stroke="var(--stroke-0, #F1D302)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_93">
            <rect fill="white" height="35" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="box-border content-stretch flex flex-row gap-[30px] items-start justify-start overflow-clip p-[10px] relative shrink-0">
      <Github />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute left-0 top-0 w-[1280px]" data-name="Header">
      <div className="box-border content-stretch flex flex-row items-center justify-between overflow-clip px-[50px] py-[15px] relative w-[1280px]">
        <Frame1 />
        <Frame2 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#f1d302] border-[0px_0px_7px] border-solid inset-0 pointer-events-none"
      />
    </div>
  );
}

export default function MainPage() {
  return (
    <div className="bg-[#020100] relative size-full" data-name="Main page">
      <Footer />
      <Body />
      <Header />
    </div>
  );
}