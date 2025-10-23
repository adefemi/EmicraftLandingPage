import { exampleCards } from "@/lib/constant/about-cards";
import AdvancedCardStack from "./CardStack";
import LocalBadge from "../ui/local-badge";
import Mission from "../sections/Mission";
import { Card } from "@/lib/constant/about-cards";

const WhoWeAre = () => {
  const handleCardClick = (card: Card) => {
    // Handle card click logic here
  };

  return (
    <div className="container mx-auto space-y-12 py-24 px-4 lg:px-16">
      <div className="flex justify-center">
        <LocalBadge variant="gradient">
          Who We Are
        </LocalBadge>
      </div>

      <Mission />
    </div>
  );
};

export default WhoWeAre;
