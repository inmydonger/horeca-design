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

function Button() {
  return (
    <div className="bg-[#dc2626] h-[31.998px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] relative size-full">
          <p className="font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-center whitespace-nowrap">Add</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start p-[8px] relative size-full">
        <Frame />
        <Frame1 />
        <Button />
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