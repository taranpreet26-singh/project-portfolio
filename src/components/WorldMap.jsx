import { motion } from "framer-motion";
import { WorldMap } from "./UI/world-map";

export function WorldMapDemo() {
  const flagUrls = {
    Canada: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    USA: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
    Australia: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    UK: "https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png",
    India: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg", // India flag
  };

  return (
    <div className="py-40 dark:bg-[#202327] relative -top-30 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center ">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Your Gateway to Global Opportunities: Expert{" "}
          <span className="text-neutral-400">
            {"Visa".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Embark on your international journey with confidence! Our team of
          experienced professionals offers tailored visa and immigration services
          for Canada, the USA, the UK, and Australia, designed to simplify the
          complex procedures and ensure your success. Whether you're seeking to
          study, work, or settle abroad, we provide reliable, efficient, and
          personalized guidance every step of the way. Trust us to open doors to
          your future, wherever in the world it may be.
        </p>
      </div>
      <WorldMap
        dots={[
          // New connections from India only
          {
            start: { lat: 20.5937, lng: 78.9629 },  // India
            end: { lat: 56.1304, lng: -106.3468 }, // Canada
          },
          {
            start: { lat: 20.5937, lng: 78.9629 },  // India
            end: { lat: 51.5074, lng: -0.1278 },   // UK
          },
          {
            start: { lat: 20.5937, lng: 78.9629 },  // India
            end: { lat: -25.2744, lng: 133.7751 }, // Australia
          },
          {
            start: { lat: 20.5937, lng: 78.9629 },  // India
            end: { lat: 37.0902, lng: -95.7129 },  // USA
          },
        ]}
        labels={[
          { lat: 56.1304, lng: -106.3468, name: "Canada", flag: flagUrls.Canada },
          { lat: 37.0902, lng: -95.7129, name: "USA", flag: flagUrls.USA },
          { lat: -25.2744, lng: 133.7751, name: "Australia", flag: flagUrls.Australia },
          { lat: 51.5074, lng: -0.1278, name: "UK", flag: flagUrls.UK },
          { lat: 20.5937, lng: 78.9629, name: "India", flag: flagUrls.India },
        ]}
      />
    </div>
  );
}
