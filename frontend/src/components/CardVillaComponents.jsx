import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tooltip,
  CardFooter,
  Button,
} from "@material-tailwind/react";

// Import local images and icons
import img1 from '../assets/img/PurnamaBS.jpg';
import img2 from '../assets/img/SaktiUR.jpg';
import img3 from '../assets/img/TirthaSV.jpg';
import img4 from '../assets/img/SuryaBH.jpg';
import img5 from '../assets/img/BanyuBV.jpg';
import img6 from '../assets/img/Sangria.jpg';
import img7 from '../assets/img/BaliMH.jpg';
import img8 from '../assets/img/CandiDV.jpg';
import img9 from '../assets/img/AnggraS.jpg';

import bedIcon from '../assets/icon/bed.png';
import bathIcon from '../assets/icon/bath.png';
import user from '../assets/icon/user.png';
import coin from '../assets/icon/coin.png'
import view from '../assets/icon/view.png'
const cardData = [
  {
    imageUrl: img1,
    title: "Surya Bali Heven",
    rating: "5.0",
    description: "Enter a peaceful, newly updated and fully equipped home surrounded by green trees",
    location:"Place Ubud Bali",
    price: "$129",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ],

    detailPage: "/DeskripsiVillaSuryapage",
  },
  {
    imageUrl: img2,
    title: "Sakti Kuta Retreat",
    rating: "4.8",
    description: "Relax in this beautiful beach house with stunning ocean views .",
    location:"Place Kuta Bali",
    price: "$200",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ],
    detailPage: "/DeskripsiVillaSaktipage",
  },
  {
    imageUrl: img3,
    title: "Tirtha Sari Villas",
    rating: "4.9",
    description: "On holiday in Bali, don't have a place to stay yet? don't worry, we're here, come on, book.",
    location:"Place Ubud Bali",
    price: "$159",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img4,
    title: "Surya Bali Haven",
    rating: "4.7",
    description: "Are you confused about where to stay? You can make us a place to stay, let's goo",
    location:"Place Ubud Bali",
    price: "$350",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img5,
    title: "Banyu Bali Villas",
    rating: "4.6",
    description: "Enjoy a peaceful retreat in our villa in the beautiful charming countryside",
    location:"Place Ubud Bali",
    price: "$110",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img6,
    title: "Sangria Bali Retreat",
    rating: "5.0",
    description: "Stay in a luxurious rice field area with beautiful hills and delicious nature tastings.",
    location:"Canggu Denpasar Bali",
    price: "$420",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img7,
    title: "Bali Maha Resort",
    rating: "5.0",
    description: "Stay in a luxurious countryside setting with beautiful rolling hills and delicious wine tasting.",
    location:"Place Ubud Bali",
    price: "$420",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img8,
    title: "Candi Dasa Villas",
    rating: "5.0",
    description: "Do you want to stay in a luxurious rural area next to rice fields? Candi Dasa Villas is the solution",
    location:"Place Ubud Bali",
    price: "$420",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
  {
    imageUrl: img9,
    title: "Anggara Villas",
    rating: "5.0",
    description: "live in a luxurious rural area next to rice fields at affordable prices, safe, comfortable, clean for you",
    location:"Place Ubud Bali",
    price: "$420",
    tooltips: [
      "1 Bedroom",
      "1 Bathroom",
      "Maximum 2 people in one room",
      "View Details"
    ]
  },
];

const CardComponent = ({ imageUrl, title, rating,location, description, price,tooltips, detailPage }) => {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg mt-20">
      <CardHeader floated={false} color="blue-gray">
        <img src={imageUrl} alt={title} />
        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody>
        <div className="mb-3 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray" className="font-semibold font-poppins">
            {title}
          </Typography>
          <div className="flex items-center gap-1.5">
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-medium font-poppins"
            >
              <img src={coin} alt="" />
              {price}
            </Typography>
            <Typography
              color="blue-gray"
              className="flex items-center gap-1.5 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-0.5 h-5 w-5 text-yellow-700"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              {rating}
            </Typography>
          </div>
        </div>
        <Typography className='text-customBrown font-poppins font-medium'>
          {location}
        </Typography>
        <Typography color="gray" className='font-poppins'>
          {description}
        </Typography>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          {tooltips.map((tooltipContent, index) => (
            index === 3 ? (
              <Tooltip key={index} content={tooltipContent}>
                <a href={detailPage} className="cursor-pointer border rounded-full border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <img src={view} alt={`Icon ${index + 1}`} className="h-5 w-5" />
                </a>
              </Tooltip>
            ) : (
              <Tooltip key={index} content={tooltipContent}>
                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  <img
                    src={
                      index === 0 ? bedIcon :
                      index === 1 ? bathIcon :
                      index === 2 ? user :
                      null
                    }
                    alt={`Icon ${index + 1}`}
                    className="h-5 w-5"
                  />
                </span>
              </Tooltip>
            )
          ))}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button className='bg-customBrown font-poppins text-base' fullWidth={true}>
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

const CardGrid = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {cardData.map((data, index) => (
          <CardComponent key={index} {...data} />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;
