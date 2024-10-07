import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import Scen from '../assets/user/Scen.jpg'
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Hiking/batur.jpg';
import img2 from '../assets/img/Hiking/batur2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Mount Batur",
    description: "Mount Batur with its beautiful caldera lake",
  },
  {
    image: img2,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "MOUNT BATUR HIKING ",
  about: "Hiking Mount Batur is a popular adventure activity located in Bali, Indonesia. Mount Batur is an active volcano situated in the Kintamani region, known for its stunning sunrise views from the summit. The trek typically begins early in the morning, around 2 to 3 AM, to reach the top in time for sunrise. The hike involves a moderately challenging ascent through rocky and uneven terrain, but the reward is a spectacular panoramic view of the caldera, surrounding mountains, and Lake Batur.",

  price: "$329",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "2 tour guide provided",

  ],
  rules: [
    "Vehicle has a capacity of 4 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 082344564376",
    "Guide: 081233564321",
    "Admin: 085453234324",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Hiking Mount Batur was an unforgettable adventure! The sunrise view from the summit is absolutely breathtaking, with panoramic vistas of the surrounding volcanic landscape.  ',
    name: 'Seeker',
  },
  {
    id: 2,
    image: user,
    text: 'The hike up Mount Batur is one of the best experiences in Bali. The sunrise at the summit is magical, and the views are incredible.  ',
    name: 'turousAmy',
  },
  {
    id: 3,
    image: user,
    text: 'The hike up Mount Batur is a fantastic experience. The early morning trek is worth it for the stunning sunrise and views from the top. ',
    name: 'PerformancePaul',
  },
  {
    id: 4,
    image: Scen,
    text: 'Hiking Mount Batur was a memorable adventure. The early morning start can be tough, but reaching the summit and witnessing the sunrise is worth every step. ',
    name: 'ScenicSarah',
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
        subtitle="Offering an unforgettable travel experience to Hikking Mount Batur with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiKelingking;
