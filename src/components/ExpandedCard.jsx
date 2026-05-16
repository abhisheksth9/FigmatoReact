import rightarrow from "../assets/image/right-arrow.svg";

function ExpandedCard({ data }) {
  return (
    <div className="w-[592px] h-[461px] rounded-[32px] bg-[#C33241] transition-all duration-500 relative ">

      <div className="absolute top-[40px] left-[393px] flex items-center gap-[8px]">

        <span className="font-[outfit] text-[18px] font-[600] text-[#F9EBEC] leading-none">
          View All Courses
        </span>

        <img
          src={rightarrow}
          alt="right arrow"
          className="w-[20px] h-[20px] object-contain"
        />

      </div>

      <div className="absolute top-[126px] left-[66px] w-[460px] h-[93px] flex items-center justify-between z-10">
        {data.icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`icon-${index}`}
            className="w-[93px] h-[93px] object-contain"
          />
        ))}
      </div>

      <div className="absolute top-[240px] left-[75px] w-[442px] h-[138px]">

        <div className="absolute left-0 top-0 w-[200px] h-[180px] text-white font-[nohemi]">

          <div className="absolute text-[#F9EBEC] left-4 top-0 text-[150px] tex font-bold leading-[120%]">
            {data.count}
          </div>

          <div className="absolute left-[150px] top-0 w-[34px] h-[77px] text-[50px] font-bold leading-none">
            +
          </div>
        </div>

        <div className="absolute left-[224px] top-[50px] w-[218px] h-[98px]">
          <div className="text-[32px] font-[outfit] font-bold text-[#F9EBEC] whitespace-nowrap leading-none">
            {data.title}
          </div>

          <div className="mt-[12px] font-[outfit] text-[18px] text-[#F9EBEC] leading-[140%]">
            {data.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpandedCard;