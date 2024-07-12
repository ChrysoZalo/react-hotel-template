import React from 'react';

interface TestimonialProps {
  date: string;
  content: string;
  author: string;
  avatar: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ date, content, author, avatar, rating }) => {
  return (
    <div className="flex flex-col justify-center max-md:max-w-full">
      <div className="flex flex-col px-7 py-8 rounded-xl bg-neutral-50 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between">
        <div>{date}</div>
        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <img key={i} loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/fbb3ce659830a49302397d25c23c8aacf00eaec2702c21ce2d26ecce96e97a48?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&" alt="Star" className="shrink-0 my-auto aspect-[7.14] w-[18px]" />
          ))}
        </div>
      </div>
      <div className="mt-16 text-base max-md:mt-10">{content}</div>
      <div className="flex gap-4 self-start mt-16 max-md:mt-10">
        <img loading="lazy" src={avatar} alt={author} className="shrink-0 rounded-full aspect-square w-[42px]" />
        <div className="my-auto">{author}</div>
      </div>
    </div>
  </div>
);
}

export default Testimonial;