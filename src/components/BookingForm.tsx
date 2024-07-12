import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <form className="flex gap-5 justify-between px-10 py-7 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between items-start my-auto max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col whitespace-nowrap">
          <div className="flex gap-5 justify-between text-base text-zinc-900">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/79782749d3aa0a202cd3961b6210f56b4aae7ca1d596b0f31cef8acdb115f793?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 w-4 aspect-[0.8] fill-zinc-900" />
            <label htmlFor="location">Location</label>
          </div>
          <div className="flex gap-2 self-end mt-2.5 text-xs text-zinc-900 text-opacity-60 max-md:mr-2.5">
            <select id="location" name="location" className="bg-transparent">
              <option>Abuja</option>
              <option>Athens</option>
              <option>Thessaloniki</option>
              <option>Paris</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-5 justify-between text-base text-zinc-900">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/84b81fe03df3cd53da158230f1269981c495f8e71c24a5d31e77519e11e2ceaa?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 aspect-[1.1] fill-zinc-900 w-[22px]" />
            <label htmlFor="roomType">Room type</label>
          </div>
          <div className="flex gap-2.5 self-end mt-3.5 text-xs whitespace-nowrap text-zinc-900 text-opacity-60">
            <select id="roomType" name="roomType" className="bg-transparent">
              <option>Standard</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col whitespace-nowrap">
          <div className="flex gap-5 justify-between text-base text-zinc-900">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5717ec43c977d9fe57791b446f50f19ca7d7edd30cf049bf1c5ea31bbcad146f?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 w-5 aspect-square fill-zinc-900" />
            <label htmlFor="persons">Person</label>
          </div>
          <div className="flex gap-2.5 self-center mt-3.5 text-xs text-zinc-900 text-opacity-60">
            <select id="persons" name="persons" className="bg-transparent">
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start self-start mt-2">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef360d5fd737722ac2067a0d8304c7e7136e803751b75e0c213fb701596a99a?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 w-5 aspect-square fill-zinc-900" />
        <div className="flex flex-col mt-1">
          <label htmlFor="checkIn" className="text-base text-zinc-900">Check in</label>
          <input type="date" id="checkIn" name="checkIn" className="mt-4 text-xs text-zinc-900 text-opacity-60 bg-transparent" />
        </div>
      </div>
      <div className="flex gap-5 justify-between items-start self-start mt-1.5">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ef360d5fd737722ac2067a0d8304c7e7136e803751b75e0c213fb701596a99a?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="" className="shrink-0 w-5 aspect-square fill-zinc-900" />
        <div className="flex flex-col mt-1.5">
          <label htmlFor="checkOut" className="text-base text-zinc-900">Check out</label>
          <input type="date" id="checkOut" name="checkOut" className="mt-5 text-xs text-zinc-900 text-opacity-60 bg-transparent" />
        </div>
      </div>
      <button type="submit" className="justify-center px-14 py-7 text-base text-white rounded-md bg-brown-100 max-md:px-5">
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;