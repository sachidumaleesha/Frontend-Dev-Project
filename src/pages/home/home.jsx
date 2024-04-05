import React, { useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import bannerImage from "../../assets/bannerImage.png";
import section01 from "../../assets/section01.png";
import section02 from "../../assets/section02.png";
import { Plus, Minus } from "lucide-react";

const Home = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const faqToggle = (index) => {
    // Toggle the open/close state of the clicked FAQ item
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <Header />
      <div className="lg:relative">
        <img
          src={bannerImage}
          alt="bannerImage"
          className="w-full lg:h-[700px] md:h-[448px] h-[218px] object-fill"
        />
        <div className="bg-gradient-to-r from-[#4dca79] to-[#1cbddd] flex flex-col lg:max-w-[500px] py-5 px-7 lg:absolute bottom-10 left-14">
          <p className="text-4xl relative top-0 text-white font-semibold">
            We Crush Your <br />
            Competitors, Goals, And Sales Records - Without The B.S.
          </p>
          <button className="bg-[#F28D35] text-white p-2 max-w-[220px] cursor-pointer rounded-md font-semibold tracking-widest mt-5 text-sm">
            GET FREE CONSULTATION
          </button>
        </div>
      </div>

      {/* section 01 */}
      <div className="grid grid-cols-12 lg:gap-20 lg:mt-5 max-w-4xl mx-auto">
        <div className="col-span-12 md:col-span-5 mx-auto">
          <img
            src={section01}
            alt="section 01 image"
            className="md:w-[500px] md:h-[380px]"
          />
        </div>
        <div className="col-span-12 md:col-span-7">
          <div className="flex flex-col gap-4 justify-center md:pt-24 md:pr-20 lg:pr-0 mx-auto items-center md:items-start px-5 md:px-0">
            <h2 className="text-2xl text-[#6B3CC9] font-semibold text-center md:text-left">
              Web & Mobile App Development
            </h2>
            <p className="text-center md:text-left">
              Your web and mobile Apps are pieces of the puzzle to grow your
              business. We use frameworks which tailor content and engagement
              methods to respond to different intents shown by your potential
              customers who interact with your business online.
            </p>
            <button className="bg-[#F28D35] text-white px-5 py-2 cursor-pointer rounded-md font-semibold tracking-widest max-w-[200px]">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* section 02 */}
      <div className="grid grid-cols-12 lg:gap-20 lg:mt-10 max-w-4xl mx-auto">
        <div className="col-span-12 md:col-span-7 order-2 md:order-1">
          <div className="flex flex-col gap-4 justify-center md:pt-24 md:pl-20 lg:pl-0 mx-auto items-center md:items-start px-5 md:px-0">
            <h2 className="text-2xl text-[#6B3CC9] font-semibold text-center md:text-left">
              Digital Strategy Consulting
            </h2>
            <p className="text-center md:text-left">
              Your digital strategy should complement the overall marketing
              strategy of the company. In online marketing, each component will
              never work in isolation and every business needs a different mix.
              We provide a clear concept and strategic overview to find the most
              efficient model for your business.
            </p>
            <button className="bg-[#F28D35] text-white px-5 py-2 cursor-pointer rounded-md font-semibold tracking-widest max-w-[200px]">
              LEARN MORE
            </button>
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 order-1 md:order-2 mx-auto">
          <img src={section02} alt="section 01 image" className="" />
        </div>
      </div>

      {/* FAQ */}
      {/* <div className="mt-20 mb-20 max-w-2xl mx-auto">
        <h2 className="text-3xl text-[#6B3CC9] font-semibold text-center tracking-wide px-5 md:px-5">
          Frequently asked questions
        </h2>

        <div className="mt-9 space-y-4 mx-5 md:mx-0">
          <div className="bg-[#faf8ff] rounded-md p-5 faq" onClick={faqToggle}>
            <div className="flex items-center justify-between cursor-pointer">
              <p className="text-xl text-[#6B3CC9]">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </p>
              {!isFAQOpen ? <Minus /> : <Plus />}
            </div>
            <p className="mt-2 text-slate-500 faq-answer">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
          <div className="bg-[#faf8ff] rounded-md p-5 faq" onClick={faqToggle}>
            <div className="flex items-center justify-between cursor-pointer">
              <p className="text-xl text-[#6B3CC9]">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </p>
              {!isFAQOpen ? <Minus /> : <Plus />}
            </div>
            <p className="mt-2 text-slate-500 hidden faq-answer">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
          <div className="bg-[#faf8ff] rounded-md p-5 faq" onClick={faqToggle}>
            <div className="flex items-center justify-between cursor-pointer">
              <p className="text-xl text-[#6B3CC9]">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
              </p>
              {!isFAQOpen ? <Minus /> : <Plus />}
            </div>
            <p className="mt-2 text-slate-500 hidden faq-answer">
              Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit
              id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam.
              Sapien massa morbi risus sagittis tortor integer.
            </p>
          </div>
        </div>
      </div> */}

      {/* FAQ */}
      <div className="mt-20 mb-20 max-w-2xl mx-auto">
        <h2 className="text-3xl text-[#6B3CC9] font-semibold text-center tracking-wide px-5 md:px-5">
          Frequently asked questions
        </h2>

        <div className="mt-9 space-y-4 mx-5 md:mx-0">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-[#faf8ff] rounded-md p-5 faq cursor-pointer"
              onClick={() => faqToggle(index)}
            >
              <div className="flex items-center justify-between">
                <p className="text-xl text-[#6B3CC9]">
                Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                </p>
                {openIndex === index ? <Minus /> : <Plus />}
              </div>
              <p
                className={`mt-2 text-slate-500 faq-answer ${
                  openIndex === index ? "" : "hidden"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur. Faucibus commodo
                suscipit id ipsum. Elementum ultrices nulla faucibus odio est
                sed aliquam. Sapien massa morbi risus sagittis tortor integer.
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
