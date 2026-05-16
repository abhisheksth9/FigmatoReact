import { useState } from "react";

import ExpandedCard from "../components/ExpandedCard"
import CollapsedCard from "../components/CollapsedCard";
import cardData from "../components/cardData"

function MainPage() {

  const [activeCard, setActiveCard] = useState("all");

  const layouts = {
    all: ["expanded-all", "upcoming", "ongoing"],
    upcoming: ["all", "expanded-upcoming", "ongoing"],
    ongoing: ["all", "upcoming", "expanded-ongoing"],
  };

  return (
    <div className="w-[1216px] h-[597px] gap-[48px] mx-auto">
      <div className="w-[528px] h-[88px] mt-[40px] gap-[20px]">

        <p className="font-[Outfit] font-normal text-[24px] text-[#414141] leading-[30px] py-3">
          Explore our classes and master trending skills!
        </p>

        <p className="font-[Outfit] font-bold text-[32px] leading-[120%] text-[#2B2B2B]">
          Dive Into <span className="text-[#1da077]">What's Hot Right Now!</span>🔥</p>
      </div>
      <div className="flex gap-[32px] mt-[40px] py-1">
        {layouts[activeCard].map((card, index) => {

          const isExpanded = card.includes("expanded");

          const key = card.replace("expanded-", "");

          return (
            <div
              key={index}
              className="cursor-pointer transition-all duration-500"
              onClick={() => setActiveCard(key)}
            >

              {isExpanded ? (
                <ExpandedCard data={cardData[key]} />
              ) : (
                <CollapsedCard data={cardData[key]} />
              )}
            </div>
          );
        })}
      </div>
    </div>
    
  );
}

export default MainPage;