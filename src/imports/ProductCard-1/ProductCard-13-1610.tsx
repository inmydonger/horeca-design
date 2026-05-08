import svgPaths from "./svg-0l06namnwv";
import imgProductThumbnail from "./3f24caa86d163166e3e50b974b18892c9e04c7ff.png";

function ProductThumbnail() {
  return (
    <div className="aspect-[170.01705932617188/170.01705932617188] relative shrink-0 w-full" data-name="Product Thumbnail">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgProductThumbnail} />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[17.5px] not-italic overflow-hidden relative shrink-0 text-[#13110f] text-[12px] text-ellipsis w-full">Wagyu Sirloin MS4+</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#13110f] text-[14px] w-full">Rp 1.250.000</p>
    </div>
  );
}

function HugeiconsIcon() {
  return (
    <div className="relative shrink-0 size-[13.334px]" data-name="HugeiconsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3339 13.3339">
        <g id="HugeiconsIcon">
          <path d="M11.1116 6.66698H2.22234" id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center opacity-50 px-[9.882px] py-px relative rounded-[9.335px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[9.335px]" />
      <HugeiconsIcon />
    </div>
  );
}

function HugeiconsIcon1() {
  return (
    <div className="relative shrink-0 size-[13.334px]" data-name="HugeiconsIcon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3339 13.3339">
        <g id="HugeiconsIcon">
          <path d={svgPaths.p765b680} id="Vector" stroke="var(--stroke-0, #DC2626)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[9.882px] py-px relative rounded-[9.335px] shrink-0 size-[32px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#dc2626] border-solid inset-0 pointer-events-none rounded-[9.335px]" />
      <HugeiconsIcon1 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame />
        <Frame1 />
        <div className="content-stretch flex items-center justify-between px-[8px] relative shrink-0 w-[145px]" data-name="Counter">
          <Button />
          <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#13110f] text-[14px] text-center whitespace-nowrap">2</p>
          <Button1 />
        </div>
      </div>
    </div>
  );
}

export default function ProductCard() {
  return (
    <div className="bg-white relative rounded-[14px] size-full" data-name="ProductCard">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[0.676px] relative rounded-[inherit] size-full">
        <ProductThumbnail />
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[#e0ddda] border-[0.676px] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}