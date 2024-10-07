import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Hiking/terunyan.jpg';
import img2 from '../assets/img/Hiking/batur2.jpg';
import bree from '../assets/user/bree.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Mount Terunyan",
    description: "Mount Terunyan with its beautiful sunrise",
  },
  {
    image: img2,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "MOUNT TERUNYAN HIKING",
  about: "Hiking Trunyan Hill is an adventurous trek located in the northeastern part of Bali, near the traditional village of Trunyan. This hike offers a scenic journey through lush landscapes and rugged terrain, leading to a summit with stunning panoramic views of Lake Batur and the surrounding valleys. The trail is less frequented than other hiking routes in Bali, providing a more tranquil and serene experience.",

  price: "$200",
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
    "Driver: 081233456765",
    "Guide: 081344567464",
    "Admin: 085112345654",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Hiking Trunyan Hill is an unforgettable experience! The trail offers a mix of rugged terrain and stunning views over the surrounding valleys and Lake Batur.',
    name: 'ExplorerEmma',
  },
  {
    id: 2,
    image: user,
    text: 'The hike up Trunyan Hill is fantastic! The path is scenic, and the views from the top are breathtaking, with expansive vistas of the lush valleys and Lake Batur. It’s less crowded than other hiking spots. ',
    name: 'LoverLily',
  },
  {
    id: 3,
    image: user,
    text: 'Trunyan Hill offers a rewarding hike with beautiful views of the surrounding landscape. The trail can be steep and challenging, but the panoramic vistas from the top are impressive. ',
    name: 'SayhJ',
  },
  {
    id: 4,
    image: bree,
    text: 'Trunyan Hill is a great hiking destination with incredible views of Bali’s natural beauty. The climb is a bit strenuous but offers a rewarding view of Lake Batur and the surrounding landscape..',
    name: 'Brey',
  },
];

const DeskripsiAbangpage = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Hikking Mount Terunyan with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiAbangpage;
