import React from 'react';
import Facility from './Facility';

const facilitiesData = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6cbb8e879c05599ee4dc9227e7e0e340c51aa81245c2d178ab8e70ae171b3bf1?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Swimming Pool" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9a2f6708945aa4563a28d3a198b24c224a49d4c1813e0692bfeb69566b7a4d09?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Wifi" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2330dfa38748d915f2fc4801bd75e931c1bb8b93d196113ffb60616f63b1595b?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Breakfast" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3fce604b0d28e2fb61939e633496abcc7825a4e4bf5969a898a6539186d322a?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Gym" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5e6cd7d979a232673325ac705dd25100f3336232e0cd94079cfa504d3b30ef66?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Game center" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2021a5fb4747c8fe8d2f275e35fc37e5c0e037cc09ce7951eddc01d15228ae22?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "24/7 Light" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/548841eb2d0eaca9c492ff255735f6358fb1673cf4c7cb9abc7fa4235bfa299e?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Laundry" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/87f3e12265da7d4a9ef21ac96c94e148897476d9d78edfd2e0343897bf21be22?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&", name: "Parking space" },
];

const Facilities: React.FC = () => {
  return (
    <div className="flex flex-col items-center mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-center text-4xl font-medium text-black">Our Facilities</h2>
      <p className="text-center mt-8 text-base font-medium text-black max-md:max-w-full">
        We offer modern (5 star) hotel facilities for your comfort.
      </p>
      <div className="text-center px-5 mt-12 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
        <div className="flex justify-center flex-wrap gap-5">
          {facilitiesData.map((facility, index) => (
            <div key={index} className="w-3/12 max-md:w-full">
              <Facility icon={facility.icon} name={facility.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  
};

export default Facilities;