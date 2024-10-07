import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";

const UlasanComponents = ({ reviews, title, subtitle, bannerImg }) => {
  return (
    <div className="p-4">
      {/* Container for the image and text above all cards */}
      <div className="text-center mb-20 mt-10 ">
        <img
          src={bannerImg}
          alt="Top Banner"
          className="mx-auto mb-4 rounded-lg"
        />
        <h2 className="text-2xl font-medium font-poppins text-customBrowntwo mb-2">{title}</h2>
        <h2 className="text-base font-medium font-poppins text-gray-600">{subtitle}</h2>
      </div>

      <div className="p-4 md:ml-20 md:p-4 font-poppins text-lg text-center md:text-left mb-2">
        <Typography
          as="h1"
          variant="h4"
          className="font-medium text-customBrowntwo"
        >
          TESTIMONIAL FROM US AT TRAVELING KUY
        </Typography>
        <Typography
          as="h2"
          variant="h6"
          className="mt-2 text-gray-700 font-poppins font-normal"
        >
          Still unsure about our traveling services?
        </Typography>
        <Typography
          as="h2"
          variant="h6"
          className="text-gray-700 font-poppins font-normal text-justify"
        >
          The following testimonials from the participants speaking will help you be more confident in our traveling services, TarvelingKuy
        </Typography>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {reviews.map((review) => (
          <div key={review.id} className="relative flex flex-col rounded-xl bg-[#E7E7E7] text-gray-700 shadow-none p-4 max-w-[35rem] w-full">
            <div className="flex items-start">
              <img
                src={review.image}
                alt={review.name}
                className="inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
              />
              <div className="ml-4 flex-1">
                <p className="block font-poppins text-base font-light leading-relaxed text-inherit">
                  {review.text}
                </p>
                <div className="mt-3 text-right">
                  <h5 className="text-sm font-medium font-poppins tracking-normal text-customBrown">
                    - {review.name}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UlasanComponents;
