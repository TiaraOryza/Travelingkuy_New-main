import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import kony from '../assets/user/kony.png';
import ditmay from '../assets/user/ditmay.png';
import Zeno from '../assets/user/Zeno.png';
import Budi from '../assets/user/Budi.png'
import img1 from '../assets/img/culture/trunyan.jpeg';

// import img1 from '../assets/img/culture/uluwatu.jpg';
// import img2 from '../assets/img/culture/detailtanahlot1.jpg';
// import img3 from '../assets/img/culture/detailtanahlot2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "The beauty of Terunyan Village",
    description:"View of the Terunyan village area across the lake with beautiful traditional cultural areas",
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
  title: "TRUNYAN VILLAGE",
  about: "Trunyan or Terunyan is a Balinese village (banjar) located on the eastern shore of Lake Batur, a caldera lake in Bangli Regency, central Bali, Indonesia. The village is one of the most famous homes for the Bali Aga people, besides the villages of Tenganan and Sambiran",

  price: "$ 150.10",
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
    "Driver: 085678654321",
    "Guide: 087876567566",
    "Admin: 083456787564",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: kony,
    text: 'Trunyan offers a truly unique cultural experience that you won’t find anywhere else in Bali. The ancient burial practices and serene setting make it a must-visit for those interested in history and tradition. ',
    name: 'Kony',
  },
  {
    id: 2,
    image: Budi,
    text: 'Visiting Trunyan was both fascinating and eerie. The boat ride across Lake Batur adds to the experience, and learning about the village’s unique customs was eye-opening."',
    name: 'Budiys',
  },
  {
    id: 3,
    image: ditmay,
    text: 'Amazing insight into a different side of Balinese culture. The sacred tree and the way the villagers honor their dead are deeply spiritual and humbling to witness.',
    name: 'ditmay',
  },
  {
    id: 4,
    image: Zeno,
    text: 'I was very impressed with Terunyan village which is very rich in culture',
    name: 'Zeno',
  },
];

const DeskripsiTrunyan = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Terunyan Village with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiTrunyan;
