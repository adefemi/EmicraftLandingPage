import { exampleCards } from "@/lib/constant/about-cards";
import React from "react";
import AdvancedCardStack from "./CardStack";
import LocalBadge from "../ui/local-badge";
import Mission from "../sections/Mission";
import { Card } from "@/lib/constant/about-cards";

const WhoWeAre = () => {
  const handleCardClick = (card: Card) => {
    console.log("Card clicked:", card);
    // Handle card click logic here
  };
  return (
    <div className="space-y-5 container mx-auto">
      <LocalBadge variant="gradient" className="self-center m-3 mx-auto justify-center flex w-fit">Who We Are</LocalBadge>
      <AdvancedCardStack
        cards={exampleCards}
        inView={false}
        hoverEnabled={true}
        onCardClick={handleCardClick}
      />
      <Mission />
    </div>
  );
};

export default WhoWeAre;
