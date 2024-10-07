import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Nature/jatiluwih.jpg';
import img2 from '../assets/img/Nature/Jatiluwih2.jpeg';
import img3 from '../assets/img/Nature/Jatiluwih3.jpg';
import Scen from '../assets/user/Scen.jpg'
import nature from '../assets/user/nature.png'
// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Jati Luwih",
    description: "Beautiful rice field views",
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
  title: "JATI LUWIH",
  about: "Jatiluwih is renowned for its spectacular rice terraces located in the Tabanan Regency of Bali, Indonesia. This UNESCO World Heritage site is celebrated for its traditional Subak irrigation system, which has been used for centuries to cultivate rice. The expansive terraces stretch across rolling hills, creating a stunning, panoramic view of lush greenery and intricate patterns.",

  price: "$129",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
  ],
  rules: [
    "Vehicle has a capacity of 5 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 0823445653421",
    "Guide: 085778946345",
    "Admin: 083455678563",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Jatiluwih is a breathtaking destination with its expansive rice terraces stretching as far as the eye can see. The lush green landscape is stunning, and it s a peaceful retreat from the more touristy areas of Bali. ',
    name: 'IslandHopperMike',
  },
  {
    id: 2,
    image: user,
    text: 'The rice terraces at Jatiluwih are absolutely magnificent. The area offers a tranquil and scenic experience, with beautiful walking trails and a serene atmosphere. ',
    name: 'SoloTravellerAnna',
  },
  {
    id: 3,
    image: nature,
    text: 'Jatiluwih is truly a gem in Bali. The terraced rice fields are incredibly picturesque, and the view is nothing short of spectacular. The area is well-preserved and offers a peaceful escape with stunning photo opportunities',
    name: 'NatureLoverJ',
  },
  {
    id: 4,
    image: Scen,
    text: 'A must-visit for anyone interested in Bali’s natural beauty. The rice terraces of Jatiluwih are expansive and lush, offering a serene environment and great walking paths. Its less crowded than other spots.',
    name: 'ScenicSarah',
  },
];

const DeskripsiJatiluwih = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Jati Luwih with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiJatiluwih;
