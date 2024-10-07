import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import FooterComponents from '../components/FooterComponents';
import CourselComponents from '../components/CourselComponents';
import UlasanComponents from '../components/UlasanComponents';
import DeskripsiDestinasiComponents from '../components/DeskripsiDestinasiComponents';

// Import img
import Rating from '../assets/img/Rating3.jpg';
import user from '../assets/user/profile.jpg';
import img1 from '../assets/img/Nature/gitgit.jpg';
import img2 from '../assets/img/Nature/Gitgit2.jpg';
import img3 from '../assets/img/Nature/Gitgit3.jpeg';
import bree from '../assets/user/bree.jpg';

// Data untuk CourselComponents
const slidesIndex = [
  {
    image: img1,
    title: "Gitgit Waterfall",
    description: "View of a waterfall in the middle of nature",
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
  title: "GITGIT WATERFALL",
  about: "Gitgit Waterfall is a stunning natural attraction located in the northern part of Bali, near the village of Gitgit. This impressive waterfall cascades from a height of approximately 35 meters into a serene pool surrounded by lush tropical forest. The journey to Gitgit Waterfall involves a pleasant walk through a well-maintained path,",

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
    "Guide: 085345675432",
    "Admin: 081233454321",
  ],
  bookingLink: "#",
};

// Data untuk UlasanComponents
const reviewsIndex = [
  {
    id: 1,
    image: user,
    text: 'Gitgit Waterfall is a hidden gem in Bali. The waterfall is majestic, surrounded by lush jungle, and the sound of the cascading water is incredibly soothing. ! ',
    name: 'NatureJack',
  },
  {
    id: 2,
    image: bree,
    text: 'A stunning and serene spot. Gitgit Waterfall is beautiful with its clear water and lush surroundings.',
    name: 'BreezeAmy',
  },
  {
    id: 3,
    image: user,
    text: 'Gitgit Waterfall is one of the most picturesque spots in Bali. The waterfall is powerful and surrounded by vibrant greenery.',
    name: 'SurfingElla',
  },
  {
    id: 4,
    image: user,
    text: 'The waterfall is beautiful and the area around it is very peaceful. The path is well-maintained, making the trek enjoyable. Gitgit Waterfall is definitely worth a visit if youre exploring Bali’s natural beauty',
    name: 'SunseekerTom',
  },
];

const DeskripsiGitgit = () => {
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

export default DeskripsiGitgit;
