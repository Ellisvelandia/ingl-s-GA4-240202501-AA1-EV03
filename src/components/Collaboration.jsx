import { brainwaveSymbol, check, diagrama } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h4 mb-4 md:mb-8">
            I developed my English through evidence at SENA</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 text-n-4 md:mb-4 mb-2 lg:mb-8 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>
          <div className="relative items-center m-auto left-1/2 flex border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <img
              src={diagrama}
              width={100}
              height={100}
              className="flex m-0 items-center w-max"
              alt="diagrama"
            />
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
