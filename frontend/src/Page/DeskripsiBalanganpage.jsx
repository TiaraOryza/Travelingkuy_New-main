import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/beach/balangan.jpg';
import img2 from '../assets/img/beach/balangan1.jpg';
import img3 from '../assets/img/beach/balangan2.jpg';

import amy from '../assets/user/amy.jpg';
import bree from '../assets/user/bree.jpg'
// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Balangan Beach",
    description: "View of the cliffs above the beach and the beauty of the waves crashing",
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
  title: "BALANGAN BEACH",
  about: "Balangan Beach is a picturesque and relatively secluded beach located in the southern part of Bali, Indonesia. Known for its stunning golden sand and clear turquoise waters, Balangan Beach is a popular destination for surfers and sunbathers alike. The beach is framed by dramatic cliffs and offers a more tranquil alternative to the busier beaches on the island. With great surf conditions for both beginners and experienced surfers, as well as beautiful views, Balangan Beach provides a perfect spot for relaxation and water sports",

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
    "Driver: 081344567823",
    "Guide: 081333567432",
    "Admin: 083211455674",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: amy,
    text: 'Balangan Beach is a hidden gem with stunning golden sand and crystal-clear water. The surf here is great for both beginners and experienced surfers. ',
    name: 'Amy',
  },
  {
    id: 2,
    image: user,
    text: 'Balangan Beach is one of the best spots for surfing in Bali. The waves are fantastic, and the beach itself is gorgeous with its white sand and clear blue water. It’s a more peaceful alternative to the more crowded beaches',
    name: 'SurfingElla',
  },
  {
    id: 3,
    image: bree,
    text: 'A beautiful and tranquil beach with a laid-back vibe. The views of the cliffs and the calm, clear water are amazing. Great for a day of sunbathing and surfing. ',
    name: 'BreezeAmy',
  },
  {
    id: 4,
    image: user,
    text: 'This beach offers a great escape from the more touristy areas. The scenery is beautiful, and the surf conditions are ideal. It’s a bit secluded, which adds to its charm, but also means you’ll need to bring everything you need for the day',
    name: 'SunseekerTom',
  },
];

const DeskripsiBalangan = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Balangan Beach with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiBalangan;
