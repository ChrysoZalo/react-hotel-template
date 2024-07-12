import React from 'react';

interface RoomProps {
  image: string;
  availableRooms: number;
  features: string;
}

const Room: React.FC<RoomProps> = ({ image, availableRooms, features }) => {
  return (
    <div className="flex flex-col grow px-7 py-9 w-full bg-white rounded-xl max-md:px-5 max-md:mt-10">
      <div className="flex overflow-hidden relative flex-col items-end px-16 pt-4 pb-20 text-xs font-bold text-white aspect-[1.16] max-md:pl-5">
        <img loading="lazy" src={image} alt="Room" className="object-cover absolute inset-0 size-full" />
        <div className="relative justify-center px-1.5 py-3.5 mb-28 rounded-sm bg-brown-100 max-md:mb-10">
          <span>{availableRooms}</span> Rooms available
        </div>
      </div>
      <div className="mt-5 text-lg text-black">{features}</div>
    </div>
  );
};

const LuxuriousRooms: React.FC = () => {
  const rooms = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/87dc9a4620a29a62c86d87874c24703caff06a3eda845bbcc77512f281c28ecd?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
      availableRooms: 2,
      features: "Television set, Extra sheets and Breakfast"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/873ee9e65bca88c167b09fd8daeb075f346229b350248c5a40800d9e522875ca?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
      availableRooms: 4,
      features: "Television set, Extra sheets, Breakfast, and fireplace"
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/da24ed2127e82472c7b8f9f27d55b401f86a1d3f17aa0ea998100c773d6a30b4?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
      availableRooms: 8,
      features: "Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest"
    }
  ];

  return (
    <section className="flex overflow-hidden relative flex-col justify-center mt-20 w-full min-h-[650px] max-md:mt-10 max-md:max-w-full">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f79f165945b1c94ff8597de12e23b364f927bd14b6f619fa7b1e83295ee3c17?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="Background" className="object-cover absolute inset-0 size-full" />
      <div className="flex relative justify-center items-center px-16 py-12 w-full bg-brown-100 bg-opacity-80 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-center w-full max-w-[1271px] max-md:max-w-full">
          <h2 className="text-5xl font-medium text-white max-md:text-4xl">Luxurious Rooms</h2>
          <div className="shrink-0 mt-6 h-1.5 bg-white w-[138px]" />
          <p className="mt-4 text-base font-medium text-white">All rooms are designed for your comfort</p>
          <div className="self-stretch mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {rooms.map((room, index) => (
                <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <Room {...room} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxuriousRooms;