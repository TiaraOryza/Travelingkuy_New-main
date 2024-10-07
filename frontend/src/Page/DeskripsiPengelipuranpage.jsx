import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import leio from '../assets/user/leio.jpg';
import bryen from '../assets/user/bryen.png';
import anem from '../assets/user/anem.jpg'
import josy from '../assets/user/josy.jpg';
import img1 from '../assets/img/culture/Detailpengelipuran.jpg';
// import img2 from '../assets/img/culture/detailtanahlot1.jpg';
// import img3 from '../assets/img/culture/detailtanahlot2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "The Beauty of Pengelipuran",
    description:"A unique village that is clean and beautiful",
  },
  // {
  //   image: img2,
  // },
  // {
  //   image: img3,
  // },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "PENGELIPURAN VILLAGE",
  about: "Penglipuran Village is a traditional Balinese village located in the Bangli Regency of Bali, Indonesia. Renowned for its well-preserved culture and architecture, Penglipuran offers visitors a glimpse into the island's rich heritage. The village is famous for its neatly arranged houses, stone-paved streets, and lush green surroundings, all reflecting the harmonious relationship between the community and nature..",

  price: "$ 140.10 ",
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
    "Driver: 081332546765",
    "Guide: 082344567654",
    "Admin: 083456787564",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: leio,
    text: 'Penglipuran Village is a perfect example of Bali’s cultural richness and beauty. The traditional houses and clean environment make it a must-see for anyone visiting the island',
    name: 'Byon',
  },
  {
    id: 2,
    image: bryen,
    text: 'One of the cleanest and most peaceful places I’ve visited in Bali. Penglipuran offers a true glimpse into Balinese village life, far from the busy tourist spots',
    name: 'Bryen',
  },
  {
    id: 3,
    image: anem,
    text: 'Walking through Penglipuran feels like stepping back in time. The village is incredibly well-maintained, and the sense of tradition is palpable.',
    name: 'anem',
  },
  {
    id: 4,
    image: josy,
    text: 'Penglipuran is a beautiful village that showcases the best of Balinese culture. The serene atmosphere and friendly locals make it a memorable experience.',
    name: 'josy',
  },
];

const DeskripsiPengelipuran = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Pengelipuran Village with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiPengelipuran;
