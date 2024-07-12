import React from 'react';
import Testimonial from './Testimonial';

const testimonialData = [
  {
    date: "2 Mar. 2023",
    content: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    author: "Anthony Bruff",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/f6b77eb6eb906b791a9c2319566e6e863d491c144e5ba474a80d4950d69dcd3e?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
    rating: 5
  },
  {
    date: "25 Mar. 2023",
    content: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    author: "Regina Gella",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/26d7b9e5da068d115ccc36329befcc80ddc8c3add62fb9467d7e782edc318e94?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
    rating: 5
  },
  {
    date: "5 Apr. 2023",
    content: "The service at the Hotel Monteleone was exceptional. There was absolutely no issue that was not addressed timely and with satisfactory results. We were particulary impressed with how the hotel staff anticipated our needs (periodically coming by the Board Room to check with us). Numerous conference attendees commented on the quality of the food, the quality of the service and overall positive attitude toward the conference site. Particular noteworthy is the longevity of the staff and that sense of investment in the success of every event. I usually offer suggestions for improvements (part of being a marketing professor), but there is absolutely nothing that could be improved – you have set the bar very high.",
    author: "Jamiyu Aliyu",
    avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e528ea9597ec2c00191fde680066a306c58aa2fb669396c93a2eed9bbbee029a?apiKey=300a58f30e8c4e329b3be2db9d8e93b9&",
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="mt-20 max-md:mt-10">
      <h2 className="text-center text-5xl font-medium text-black max-md:text-4xl">Testimonies</h2>
      <div className="flex overflow-x-auto gap-10 p-11 justify-between self-end mt-20 mr-12 text-sm font-medium text-justify text-zinc-700 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5">
        {testimonialData.map((testimonial, index) => (
          <Testimonial key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;