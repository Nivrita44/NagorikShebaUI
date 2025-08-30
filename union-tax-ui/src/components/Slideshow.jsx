import { useEffect, useState } from "react";

const Slideshow = ({
  images,
  width = "w-full",
  height = "h-72",
  interval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  // Auto change slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`${width} ${height} relative overflow-hidden rounded`}>
      {/* Current Image */}
      <img
        src={images[current]}
        alt={`slide-${current}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
};

export default Slideshow;
