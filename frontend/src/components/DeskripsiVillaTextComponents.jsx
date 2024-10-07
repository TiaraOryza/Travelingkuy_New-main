import React from 'react';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DeskripsiVillaTextComponents = ({
  title,
  about,
  price,
  roms,
  facilities,
  rules,
  contact,
  bookingLink
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4 -m-16 mb-10 mt-10">
      <Card className="w-[80vw] max-w-[1200px]">
        <CardBody>
          <Typography variant="h5" className="mb-2 text-gray-800 font-poppins">
            {title}
          </Typography>

          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            About Villa
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            {about}
          </Typography>

          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            Overnight Price
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            {price}
          </Typography>


          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            Rooms
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            {roms}
          </Typography>

          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            Facilities
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            <ul className="list-disc ml-6 text-justify font-poppins">
              {facilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>

          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            Rules
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            <ul className="list-disc ml-6 text-justify font-poppins">
              {rules.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>

          <Typography variant="h6" className="text-gray-800 font-poppins font-semibold">
            Contact
          </Typography>
          <Typography className='font-poppins text-justify mb-2'>
            <ul className="list-disc ml-6 text-justify font-poppins">
              {contact.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <a href={bookingLink} className="inline-block">
            <Button size="sm" variant="text" className="flex items-center gap-2 font-semibold font-poppins bg-customBrown text-white">
              Booking Now !!
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default DeskripsiVillaTextComponents;
