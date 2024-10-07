import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Beratan from '../assets/img/Bratan.jpg';
import Beratantwo from '../assets/img/culture/beratantwo.jpg';
import Rating from '../assets/img/Rating3.jpg';
import kimson from '../assets/user/kimson.jpg';
import olena from '../assets/user/olena.jpg';
import leio from '../assets/user/leio.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: Beratan,
    title: "The Beauty of Beratan Hill",
    description: "View of the temple above the lake and the beauty of the hills",
  },
  {
    image: Beratantwo,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "BERATAN HILL",
  about: "Lake Beratan is a picturesque lake located in the Bedugul area of Bali, Indonesia. It is known for its stunning natural beauty and the iconic Ulun Danu Beratan Temple, which sits on its shores. The lake is surrounded by lush green mountains, creating a serene and peaceful atmosphere. Visitors often come to enjoy the cool climate, explore the temple, and take boat rides on the calm waters of the lake. Lake Beratan is not only a popular tourist destination but also holds cultural and spiritual significance for the local Balinese people.",
  price: "$240.20",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
    "1 boat vehicle provided",
  ],
  rules: [
    "Vehicle has a capacity of 5 - 7 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Boat facilities for one-time hire",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 085425618754",
    "Guide: 087548136248",
    "Admin: 082485415794",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    text: 'I loved the peaceful atmosphere of Lake Beratan. The temple on the water is stunning, and the cool climate was a nice break from the Bali heat. A beautiful and tranquil spot to relax.',
    name: 'Tania Andrew',
  },
  {
    id: 2,
    image: kimson,
    text: 'The sunset at Tanah Lot is simply magical. The temple is perched on a rock, and the view is breathtaking. Definitely a must-visit when in Bali.',
    name: 'John Doe',
  },
  {
    id: 3,
    image: olena,
    text: 'Ubud’s rice terraces are a sight to behold. The lush green fields stretch as far as the eye can see. A wonderful place to connect with nature.',
    name: 'Jane Smith',
  },
  {
    id: 4,
    image: leio,
    text: 'Ubud’s rice terraces are a sight to behold. The lush green fields stretch as far as the eye can see. A wonderful place to connect with nature.',
    name: 'Jane Smith',
  },
];

const DeskripsiBeratan = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiBeratan;
