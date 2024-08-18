import rider from "../../assets/rider.png"; // Importing the rider image

const About = () => {
  return (
    <div className="md:flex gap-2 md:gap-10 justify-center p-10">
      {/* Main container for the About section */}

      <div className="md:w-6/12 flex flex-col gap-2">
        {/* Left section with text content */}

        <h1 className="font-extrabold word-tight text-3xl">Wok Eats</h1>
        {/* Main heading */}

        <h4 className="w-full font-bold text-lg text-[#676a6d]">
          Explore food from the famous food brands.
        </h4>
        {/* Subheading */}

        <p className="w-full text-[#676a6d]">
          Exploring the culinary treasures from renowned food brands near you is
          like embarking on a delightful gastronomic adventure. Discover the top
          brands offering a wide array of delicious options that cater to
          various tastes and preferences. From classic comfort foods to gourmet
          indulgences, you can savour the flavours that have captured the hearts
          of countless food enthusiasts. <br />
        </p>
        {/* Paragraph with additional information */}
      </div>

      <div>
        {/* Right section with the image */}
        <img src={rider} alt="rider" />
        {/* Rider image */}
      </div>
    </div>
  );
};

export default About;
