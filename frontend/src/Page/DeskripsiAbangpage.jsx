import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import sun from '../assets/user/sun.jpg'
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Hiking/abang.jpg';
import img2 from '../assets/img/Hiking/batur2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Mount Abang",
    description: "Mount Abang with its beautiful sunrise",
  },
  {
    image: img2,
  },
];

// Data untuk DeskripsiDestinasiComponents
const deskripsiData = {
  title: "MOUNT ABANG HIKING",
  about: "Hiking Gunung Abang offers an adventurous trek on one of Bali's lesser-known volcanoes, situated in the Kintamani region. Gunung Abang, often overshadowed by its neighbor Mount Batur, provides a rewarding hike with stunning panoramic views of the surrounding volcanic landscape, including Mount Batur and Lake Batur. The trail to the summit is challenging, with a steep ascent and rugged terrain, but the serene environment and beautiful vistas make it worthwhile.",

  price: "$300",
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
    "Guide: 081233456786",
    "Admin: 085332567432",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Hiking Gunung Abang is a fantastic experience! The trek is challenging but rewarding, with stunning views of the surrounding landscape and Mount Batur. nture.',
    name: 'MavenMike',
  },
  {
    id: 2,
    image: user,
    text: 'The hike up Gunung Abang is one of Bali’s hidden gems. The path is steep but manageable, and reaching the summit gives you a panoramic view of the volcanic landscape, including Mount Batur. ',
    name: 'Paul',
  },
  {
    id: 3,
    image: user,
    text: 'Gunung Abang offers a beautiful and serene hiking experience. The trail is well-maintained, and the summit provides spectacular views of Mount Batur and the surrounding area. ',
    name: 'TrekkerTina',
  },
  {
    id: 4,
    image: sun,
    text: 'Gunung Abang provides a challenging but enjoyable hike with incredible vistas from the top. The trail is well-marked and the views of Mount Batur and the caldera are breathtaking.',
    name: 'SunseekerTom',
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
        subtitle="Offering an unforgettable travel experience to Hikking Mount Abang with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiAbangpage;
