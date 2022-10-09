import aquarium from "../assets/aquarium.svg";
import manmac from "../assets/man-mac.svg";
import Image from "next/image";

export const LandingImage = () => (
  <div className="relative h-fit w-fit">
    <Image src={aquarium} alt="aquarium" />
    <div className="absolute top-12 right-52">
      <Image src={manmac} alt="aquarium" />
    </div>
  </div>
);
