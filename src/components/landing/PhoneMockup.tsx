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
      <img
        src={phoneImage}
        alt={alt}
        loading="lazy"
        className={`relative h-auto ${widthClassName}`}
      />
    </div>
  );
};

export default PhoneMockup;
