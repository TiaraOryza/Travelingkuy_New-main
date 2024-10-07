import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/beach/dreamlan.jpg'
import img2 from '../assets/img/beach/dreamland2.jpg';
import anem from '../assets/user/anem.jpg'
import bree from '../assets/user/bree.jpg'
// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Dreamland Beach",
    description: "View of sunset and calm waves",
  },
  {
    image: img2,
  },

];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "DREAMLAND BEACH",
  about: "Dreamland Beach is a stunning beach located in the southern part of Bali, near the Bukit Peninsula. Known for its expansive golden sands and clear turquoise waters, Dreamland Beach is a favorite among surfers and sunbathers.",

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
    image: user,
    text: 'Dreamland Beach is an absolute paradise! The expansive golden sand and crystal-clear water create a breathtaking setting. The waves are perfect for surfing',
    name: 'SeekerSam',
  },
  {
    id: 2,
    image: anem,
    text: 'Dreamland Beach lives up to its name with its stunning scenery and clear waters. The beach is clean, the waves are ideal for surfing, and the surrounding cliffs offer breathtaking views.',
    name: 'SurfingElla',
  },
  {
    id: 3,
    image: bree,
    text: 'A beautiful and relatively untouched beach with fantastic views and great surf. The beach is a bit secluded, which adds to its charm, but be prepared for a bit of a walk to get there. ',
    name: 'BreezeAmy',
  },
  {
    id: 4,
    image: user,
    text: 'Dreamland Beach is a hidden gem with its wide sandy shore and excellent surfing conditions. It’s less crowded than other beaches, making it a great place for a more peaceful beach day. ',
    name: 'Ayana',
  },
];

const DeskripsiDreamlandpage = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Dreamland Beach with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiDreamlandpage;
