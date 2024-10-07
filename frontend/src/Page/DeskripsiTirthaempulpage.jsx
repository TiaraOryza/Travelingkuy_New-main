import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import jayin from '../assets/user/jayin.png';
import user from '../assets/user/profile.jpg'
import img1 from '../assets/img/culture/Tirthaempul.jpg';
import img2 from '../assets/img/culture/detailtirtha1.jpg';
 import img3 from '../assets/img/culture/detailtirtha2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "The Culture of Tirtha Empul",
    description:"A unique village that is clean and beautiful",
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
  title: "TIRTA EMPUL TEMPLE",
  about: "Tirta Empul is a sacred water temple located near the town of Tampaksiring in Bali, Indonesia. The temple is renowned for its holy spring water, which is used by Balinese Hindus for purification rituals. Built around a large natural spring, Tirta Empul is a significant cultural and spiritual site, where locals and visitors alike come to bathe in the blessed waters, seeking spiritual cleansing and blessings.",

  price: "$ 230.20",
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
    "Driver: 081356765432",
    "Guide: 087654443213",
    "Admin: 085788654367",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: jayin,
    text: 'Tirta Empul is a must-visit for anyone interested in Balinese culture and spirituality. The experience of participating in the purification ritual is both serene and powerful',
    name: 'jayin',
  },
  {
    id: 2,
    image: user,
    text: 'An incredible experience! The sacred springs and the temple’s peaceful surroundings make Tirta Empul a deeply moving place to visit',
    name: 'Jenifer',
  },
  {
    id: 3,
    image: user,
    text: 'The temple’s holy water purification is a unique and calming experience. The setting is beautiful, and you can feel the spiritual significance of the place',
    name: 'Mitay',
  },
  {
    id: 4,
    image: user,
    text: 'A beautiful temple with a strong spiritual atmosphere. The cleansing ritual is a highlight, offering a genuine connection to Balinese religious practices',
    name: 'Aurand',
  },
];

const DeskripsiTirthaempulpage = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Tirtha Empul Temple with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiTirthaempulpage;
