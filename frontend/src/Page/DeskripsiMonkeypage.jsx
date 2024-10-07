import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Nature/Monkey.jpg';
import img2 from '../assets/img/Nature/Monkey2.jpg';
import img3 from '../assets/img/Nature/Monkey3.jpg';
import bree from '../assets/user/bree.jpg';
import Wander from '../assets/user/putri.png'
// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Monkey Forest",
    description: "Exploring the forest with cool views and monkeys",
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
  title: "MONKEY FOREST",
  about: "The Monkey Forest, officially known as the Sacred Monkey Forest Sanctuary, is located in Ubud, Bali. This lush, green forest is home to over 600 long-tailed macaques and is an important site for both nature and culture. The forest features ancient Hindu temples, including the Pura Dalem Agung Padangtegal, which are intertwined with the natural surroundings.",

  price: "$250",
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
    "Driver: 082566787543",
    "Guide: 085322456754",
    "Admin: 082344565432",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: Wander,
    text: 'Monkey Forest is a fantastic experience! The forest is lush and vibrant, and the monkeys are playful and fascinating to watch. The ancient temples within the forest add a mystical touch.',
    name: 'WanderlustDan',
  },
  {
    id: 2,
    image: user,
    text: 'A unique and enjoyable visit. Monkey Forest is home to a large number of playful monkeys and beautiful old temples.',
    name: 'BreezeAmy',
  },
  {
    id: 3,
    image: user,
    text: 'Monkey Forest is a beautiful natural setting with cute monkeys and makes me want to come back again',
    name: 'SurfingElla',
  },
  {
    id: 4,
    image: bree,
    text: 'Monkey Forest is a must-see attraction in Ubud. The monkeys are adorable and the ancient temples add a cultural depth to the visit. The paths through the forest are serene and the whole experience feels magical.',
    name: 'Brey',
  },
];

const DeskripsiMonkey = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Gitgit Waterfall with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiMonkey;
