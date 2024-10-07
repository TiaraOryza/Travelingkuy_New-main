import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import putri from '../assets/user/putri.png';
import mira from '../assets/user/mira.jpg';
import mason from '../assets/user/mason.jpg';
import taylor from '../assets/user/taylor.jpg'
import img1 from '../assets/img/culture/uluwatu.jpg';
import img2 from '../assets/img/culture/detailuluwatu1.jpg';
import img3 from '../assets/img/culture/detailuluwatu2.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "The Beauty of Uluwatu Temple",
    description: "The view of the temple on the cliff and the amazing Kecak dance culture",
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
  title: "ULUWATU TEMPLE",
  about: "Uluwatu is a stunning coastal area in Bali, Indonesia, known for its dramatic cliffs, pristine beaches, and the famous Uluwatu Temple. Perched on a steep cliff overlooking the Indian Ocean, Uluwatu Temple is one of Bali’s most important sea temples, offering breathtaking views, especially during sunset. The area is also a popular destination for surfers, with its world-class waves attracting enthusiasts from around the globe. Uluwatu is not only a spiritual site but also a place of natural beauty, where visitors can enjoy both the cultural heritage and the stunning landscapes of Bali.",

  price: "$120.20",
  facilities: [
    "1 vehicle provided",
    "1 driver provided",
    "1 tour guide provided",
  ],
  rules: [
    "Vehicle has a capacity of 5 - 7 people",
    "Passengers must not exceed vehicle capacity (except children under 5 years old)",
    "No smoking inside the vehicle",
    "Can ask the guide for hotel recommendations",
  ],
  contact: [
    "Driver: 08542576554",
    "Guide: 082344813624",
    "Admin: 082485415794",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: putri,
    text: 'The views from Uluwatu are absolutely breathtaking! The temple perched on the cliff with the waves crashing below is like something out of a dream. ',
    name: 'WanderlustDan',
  },
  {
    id: 2,
    image: mira,
    text: 'Uluwatu is a surfers paradise! The waves are amazing, and the temple offers such a peaceful vibe. It can get crowded, but the scenery is worth it. Don’t miss the sunset—it’s unforgettable.',
    name: 'SarahJ',
  },
  {
    id: 3,
    image: taylor,
    text: 'This place is pure magic. The combination of culture, nature, and stunning ocean views makes Uluwatu one of my favorite spots in Bali. The Kecak dance at sunset is the highlight of my trip!',
    name: 'MayaTraveler',
  },
  {
    id: 4,
    image: mason,
    text: 'Uluwatu offers some of the best views in Bali. The temple is impressive, and the waves are perfect for surfing. The crowds can be a bit much, but the experience is well worth it, especially at sunse.',
    name: 'AdventureAlex',
  },
];

const DeskripsiUluwatu = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <DeskripsiDestinasiComponents {...deskripsiData} />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience to Uluwatu with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
}

export default DeskripsiUluwatu;
