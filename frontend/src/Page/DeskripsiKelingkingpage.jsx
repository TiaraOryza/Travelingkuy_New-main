import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import Wander from '../assets/user/Wander.jpg'
import user from '../assets/user/profile.jpg';

import img1 from '../assets/img/beach/kelingking.jpg';
import img2 from '../assets/img/beach/kelingking2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Beauty Of Kelingking Beach",
    description: "View of the cliffs above the beach and the beauty of the waves crashing",
  },
  {
    image: img2,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "KELINGKING BEACH",
  about: "Kelingking Beach is one of the most iconic and stunning beaches located on Nusa Penida, an island off the southeast coast of Bali, Indonesia. The beach is famous for its dramatic cliffs, which resemble the shape of a T-Rex, offering breathtaking views from the top.",

  price: "$129",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
    "1 boat vehicle provided",
  ],
  rules: [
    "Vehicle has a capacity of 4 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Boat facilities for one-time hire",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 082344564376",
    "Guide: 081334565432",
    "Admin: 083211455674",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Kelingking Beach is absolutely jaw-dropping! The view from the top is one of the most beautiful I’ve ever seen, with the cliffs forming a T-Rex shape. ',
    name: 'IslandHopperMike',
  },
  {
    id: 2,
    image: user,
    text: 'The view from Kelingking Beach is like something out of a postcard. The hike down is steep and can be tough, but the reward is a secluded, stunning beach. ',
    name: 'SoloTravellerAnna',
  },
  {
    id: 3,
    image: user,
    text: 'Kelingking Beach is a slice of paradise. The iconic cliff formation is breathtaking, and the beach below is one of the most beautiful and untouched places I’ve ever been. A must-visit when in Nusa Penida',
    name: 'NatureLoverJ',
  },
  {
    id: 4,
    image: Wander,
    text: 'Kelingking Beach is a slice of paradise. The iconic cliff formation is breathtaking, and the beach below is one of the most beautiful and untouched places I’ve ever been. A must-visit when in Nusa Penida.',
    name: 'WanderWithElla',
  },
];

const DeskripsiKelingking = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Kelingking Beach with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiKelingking;
