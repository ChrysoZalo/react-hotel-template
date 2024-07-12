import React from 'react';
import BookingForm from './BookingForm';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  heroImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, description, ctaText, heroImage }) => {
  return (
    <section className="flex overflow-hidden relative flex-col justify-center mt-20 w-full min-h-[650px] max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f79f165945b1c94ff8597de12e23b364f927bd14b6f619fa7b1e83295ee3c17?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="Background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative justify-center items-center h-full w-full bg-brown-100 bg-opacity-90 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col pb-10 w-full max-w-[1272px] max-md:max-w-full">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start mt-16 max-md:mt-10">
              <h1 className="text-5xl font-semibold font-dancing text-white max-md:text-4xl">
                {title}
              </h1>
              <h2 className="mt-12 text-6xl font-bold text-white max-md:mt-10 max-md:text-4xl">
                {subtitle}
              </h2>
              <p className="mt-10 text-lg text-white">
                {description}
              </p>
              {/* <div className="flex gap-5 justify-between mt-9 text-xl"> */}
              <div className="mt-6 flex max-w-md gap-x-4">
                <button className="justify-center px-9 py-5 text-white bg-brown-300 rounded-[50px] max-md:px-5">
                  {ctaText}
                </button>
                <div className="flex gap-5 text-zinc-900">
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/34559f28fec2deba7f8acf828bc9a1f617ee1fd773ddaf74a9c37b5ea63355fb?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 bg-teal-600 rounded-full aspect-square h-[55px] w-[55px]" />
                  <span className="flex-auto my-auto pb-1 text-white text-lg">Take a tour</span>
                </div>
              </div>
            </div>
            <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg sm:col-span-4 lg:col-span-5">
              <img alt="Hero Image" src={heroImage} className="object-cover object-center" />
            </div>
            {/* <img loading="lazy" src={heroImage} alt="Hero Image" className="w-full aspect-[0.89] max-md:max-w-full" /> */}
          </div>
          <BookingForm></BookingForm>
        </div>
      </div>
    </section>
  );
};

export default Hero;