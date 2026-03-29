interface PhoneMockupProps {
  phoneImage: string;
  alt: string;
  widthClassName?: string;
}

const PhoneMockup = ({
  phoneImage,
  alt,
  widthClassName = "w-[220px] sm:w-[260px]",
}: PhoneMockupProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 rounded-[3rem] blur-2xl scale-90 bg-gradient-to-b from-copper/20 to-navy/10" />
      <img
        src={phoneImage}
        alt={alt}
        loading="lazy"
        className={`relative h-auto drop-shadow-2xl ${widthClassName}`}
      />
    </div>
  );
};

export default PhoneMockup;
