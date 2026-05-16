import arrow from "../assets/image/arrow.svg";

function CollapsedCard({ data }) {

  return (
    <div className="group relative h-[461px] w-[280px] rounded-[32px] bg-[#F9EBEC] pt-[80px] transition-all duration-500">

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <p className="absolute top-[-40px] left-[145px] text-[16px] font-normal text-[#2B2B2B]">
          Click Me!
        </p>

        <img
          src={arrow}
          alt="arrow"
          className="absolute top-[-28px] left-[156.8px] w-[36.26px] h-[50px] rotate-[13.56deg] z-[100]"
        />
      </div>

      <div className="absolute inset-0 flex top-[80px] justify-center">

        <div className="absolute rotate-[-90deg] w-[218px]">

          <div className="text-[32px] font-bold text-[#C33241] leading-tight font-[outfit]">
            {data.title}
          </div>

          <div className="mt-[12px] text-[18px] text-[#C33241] leading-snug font-[outfit]">
            {data.description}
          </div>

        </div>
      </div>

      <div className="absolute bottom-[35px] left-[40px] w-[200px] h-[180px] text-[#C33421] font-[nohemi]">
        <div className="absolute left-4 top-0 text-[150px] font-bold leading-[120%]">
          {data.count}
        </div>

        <div className="absolute left-[150px] top-0 text-[64px] font-bold leading-none">
          +
        </div>
      </div>
    </div>
  );
}

export default CollapsedCard;