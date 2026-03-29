import lightLogo from "@/assets/logo-light.png";
import darkLogo from "@/assets/logo-dark.png";

interface PhoneMockupProps {
  phoneImage: string;
  logoVariant?: "light" | "dark";
  alt: string;
  widthClassName?: string;
}

const PhoneMockup = ({
  phoneImage,
  logoVariant = "light",
  alt,
  widthClassName = "w-[220px] sm:w-[260px]",
}: PhoneMockupProps) => {
  const logoSrc = logoVariant === "light" ? lightLogo : darkLogo;

  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[3rem] blur-2xl scale-90 bg-gradient-to-b from-copper/20 to-navy/10" />
      <img
        src={phoneImage}
        alt={alt}
        loading="lazy"
        className={`relative h-auto drop-shadow-2xl ${widthClassName}`}
      />
      <img
        src={logoSrc}
        alt="Logo TaPlaceGo sur l'écran de l'application"
        loading="lazy"
        className="absolute left-1/2 top-[10.8%] w-[34%] -translate-x-1/2 pointer-events-none select-none"
      />
    </div>
  );
};

export default PhoneMockup;
