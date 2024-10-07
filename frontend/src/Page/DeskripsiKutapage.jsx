import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/beach/kuta.jpg'
import img2 from '../assets/img/beach/kuta2.jpg';

import mira from '../assets/user/mira.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Kuta Beach",
    description: "Beach views suitable for sunbathing",
  },
  {
    image: img2,
  },

];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "KUTA BEACH",
  about: "Kuta Beach is one of Bali's most famous and bustling beach destinations, located in the southern part of the island. Renowned for its long stretch of golden sand and lively atmosphere, Kuta Beach is a hotspot for tourists looking to enjoy surfing, sunbathing, and vibrant nightlife. The beach is well-known for its stunning sunsets, which attract many visitors each evening.",

  price: "$129",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
  ],
  rules: [
    "Vehicle has a capacity of 4 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 0813445673432",
    "Guide: 081233456765",
    "Admin: 083211455674",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Kuta Beach is lively and vibrant with plenty of activities and restaurants nearby. The sunsets here are fantastic, and the waves are perfect for beginner surfers. ',
    name: 'WanderlustDan',
  },
  {
    id: 2,
    image: mira,
    text: 'Kuta Beach is always buzzing with energy. There’s no shortage of things to do, from surfing to shopping and dining. The sunset views are beautiful, and it s a great place to experience Bali’s lively beach culture',
    name: 'SarahJ',
  },
  {
    id: 3,
    image: user,
    text: 'Kuta Beach offers a classic Bali beach experience. The long stretch of golden sand and the vibrant atmosphere make it a must-visit. ',
    name: 'Make',
  },
  {
    id: 4,
    image: user,
    text: 'Kuta Beach is iconic for a reason. The wide sandy beach and consistent waves make it ideal for surfing. The area around the beach is filled with shops, bars, and restaurants, offering a complete Bali experience.',
    name: 'AdventureAlex',
  },
];

const DeskripsiKutapage = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Kuta Beach with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiKutapage;
