import Section from "./Section";
import { japan, smallSphere, stars } from "../assets";
import Heading from "./Heading";


const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="Travel">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>
        <div className="flex-col justify-center mb-[6.5rem] lg:flex">

          <Heading
            tag="Dream of Visiting Japan
          "
          />
          <p className="relative items-center text-justify">Japan has always been at the top of my travel bucket list. The allure of its rich culture, advanced technology, and beautiful landscapes captivates me. As a huge fan of anime and manga, I dream of exploring Akihabara, the heart of otaku culture, where I can immerse myself in countless shops dedicated to my favorite series and characters.

            Food is another major draw for me. From sushi and ramen to street food like takoyaki, I can't wait to indulge in authentic Japanese cuisine. Visiting Tsukiji Fish Market for fresh seafood and experiencing a traditional tea ceremony are high on my to-do list.

            Additionally, I look forward to discovering Japan's historical and natural beauty. Visiting ancient temples and shrines, wandering through serene gardens, and taking in the breathtaking views of Mount Fuji would make my trip unforgettable.

            In essence, my dream of visiting Japan combines my passion for anime, manga, and food with a deep appreciation for the country's cultural and natural wonders</p>
          <img
            src={japan}
            className="flex justify-center w-auto lg:m-16 m-8"
            width={255}
            height={255}
            alt="japan"
          />
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
