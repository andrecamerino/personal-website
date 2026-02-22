import { glass } from "@/styles/glass";
import Image from "next/image";
import { FaStar, FaRegStar } from "react-icons/fa";
import { truncateText } from "@/utils/truncateText";
import { useFullscreen } from "@/context/FullscreenContext";

interface TestimonialProps {
  name: string;
  role: string;
  rating: number; // 0-5
  text: string;
  imgSrc?: string;
  canExpand?: boolean;
}

const Testimonial = ({
  name,
  role,
  rating,
  text,
  imgSrc = "/testimonials/default-profile.png",
  canExpand = false,
}: TestimonialProps) => {
  const { setContent } = useFullscreen();

  const stars = Array.from({ length: 5 }, (_, i) =>
    i < rating ? (
      <FaStar key={i} className="text-(--color-primary)" />
    ) : (
      <FaRegStar key={i} className="text-(--color-primary)" />
    ),
  );

  const handleClick = () => {
    if (canExpand) {
      setContent(
        <div className="flex flex-col lg:flex-row p-2 lg:px-20 gap-4">
          {/* Profile */}
          <div className="flex items-center gap-4 mb-4 lg:mb-0 lg:flex-1">
            <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0">
              <Image src={imgSrc} alt={name} fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-bold text-lg">{name}</h1>
              <h2 className="text-sm text-gray-500">{role}</h2>
              <div className="flex mt-1">{stars}</div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:flex-2">
            <p className="text-sm">{text}</p>
          </div>
        </div>,
      );
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${glass} p-6 w-80 flex flex-col rounded-3xl mr-10 mb-3 cursor-pointer`}
    >
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex-1 relative w-16 h-16 rounded-full overflow-hidden">
          <Image src={imgSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="flex flex-col flex-3">
          <h1 className="font-bold">{name}</h1>
          <h2 className="text-sm text-gray-500">{role}</h2>
          <div className="flex mt-1">{stars}</div>
        </div>
      </div>

      {/* Text content */}
      <p className="text-sm">{truncateText(text, 300)}</p>
    </div>
  );
};

export default Testimonial;
