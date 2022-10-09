import Image from "next/image";
import landing from "../assets/landing.png";

export const LandingImage = () => (
  <div className="w-full">
    <Image
      src={landing}
      alt="landing page image"
      layout="responsive"
    />
  </div>
);
