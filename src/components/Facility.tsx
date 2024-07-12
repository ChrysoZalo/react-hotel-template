import React from 'react';

interface FacilityProps {
  icon: string;
  name: string;
}

const Facility: React.FC<FacilityProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col grow px-16 py-20 w-full text-xl font-medium rounded-md bg-neutral-100 text-brown-100 max-md:px-5 max-md:mt-10">
      <img loading="lazy" src={icon} alt={`${name} icon`} className="self-center aspect-[1.37] fill-brown-100 w-[55px]" />
      <div className="mt-7">{name}</div>
    </div>
  );
};

export default Facility;