import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import amy from '../assets/user/amy.jpg';
import bree from '../assets/user/bree.jpg';
import tom from '../assets/user/tom.jpg';
import jen from '../assets/user/jen.png'
import img1 from '../assets/img/culture/uluwatu.jpg';
import img2 from '../assets/img/culture/detailtanahlot1.jpg';
import img3 from '../assets/img/culture/detailtanahlot2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "The Beauty of Tanah Lot Temple",
    description:"View of the temple on a cliff over the beautiful sea with cliff rocks",
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "TANAH LOT",
  about: "Tanah Lot is one of Bali's most famous landmarks, known for its stunning offshore setting and sunset backdrops. This ancient Hindu temple is perched on a large rock formation in the sea, surrounded by water during high tide. Tanah Lot is a significant cultural and religious site, often visited by both tourists and worshippers. The temple complex is also home to several smaller shrines, and the area is bustling with shops and restaurants. The breathtaking views, particularly at sunset, make Tanah Lot a must-visit destination for anyone exploring Bali.",

  price: "$ 250.10",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
  ],
  rules: [
    "Vehicle has a capacity of 5 - 7 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 08542765432",
    "Guide: 081234567654",
    "Admin: 083456787564",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: amy,
    text: 'Tanah Lot is iconic for a reason! The temple’s setting on a rocky outcrop surrounded by the ocean is simply stunning, especially at sunset. The view is unforgettable, and it’s a great spot for photos. ',
    name: 'Amy',
  },
  {
    id: 2,
    image: bree,
    text: 'Beautiful temple with an amazing location! Watching the waves crash around the temple at high tide is mesmerizing. It’s a bit touristy, but still worth the visit, especially for the sunset',
    name: 'BreezeAmy',
  },
  {
    id: 3,
    image: tom,
    text: 'Tanah Lot is one of Bali is most beautiful spots. The temple is not only culturally significant but also offers some of the best sunset views on the island. A must-visit for sure!',
    name: 'Tom',
  },
  {
    id: 4,
    image: jen,
    text: 'The setting of Tanah Lot is breathtaking, especially when the tide is high and the temple appears to float on the water. It can get crowded, but the stunning views and the cultural experience make it worth it.',
    name: 'Jen',
  },
];

const DeskripsiTanahlot = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Tanah Lot Temple with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiTanahlot;
