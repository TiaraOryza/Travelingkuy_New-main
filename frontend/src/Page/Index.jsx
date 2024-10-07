import React from 'react';
import NavbarComponents from '../components/NavbarComponents';
import CourselComponents from '../components/CourselComponents';
import MenuComponents from '../components/MenuComponents';
import CardVillaComponents from '../components/CardVillaComponents';
import UlasanComponents from '../components/UlasanComponents';
import FooterComponents from '../components/FooterComponents';

// img import
import VillaIcon from "../assets/icon/villa.png";
import BeachIcon from "../assets/icon/beach.png";
import CultureIcon from "../assets/icon/culture.png";
import NatureIcon from "../assets/icon/nature.png";
import HikingIcon from "../assets/icon/hiking.png";
import BaliCorsel from '../assets/img/BaliCorsel.jpg';
import Dreamland from '../assets/img/Dreamland.jpg';
import Batur from '../assets/img/batur.jpg';
import gitgit from '../assets/img/gitgitwf.jpg';
import Rating from '../assets/img/Rating3.jpg';
import kimson from '../assets/user/kimson.jpg';
import olena from '../assets/user/olena.jpg';
import leio from '../assets/user/leio.jpg'

// Definisikan item navigasi untuk MenuComponents
const navListItems = [
  { label: "Villa", icon: VillaIcon, href: "/villa" },
  { label: "Beach", icon: BeachIcon, href: "/beach" },
  { label: "Culture", icon: CultureIcon, href: "/culture" },
  { label: "Nature", icon: NatureIcon, href: "/nature" },
  { label: "Hiking", icon: HikingIcon, href: "/hiking" },
];

const slidesIndex = [
  {
    image: BaliCorsel,
    title: "The Beauty of Culture",
    description: "Cultural tourism is truly amazing and unforgettable with us",
  },
  {
    image: Dreamland,
    title: "The Beauty of Beach",
    description: "Beach tourism with views of the sunset or sunset will make you not forget it",
  },
  {
    image: Batur,
    title: "The Beauty of Hiking Mount",
    description: "Have a tourist experience climbing Mount Bali which is a dream of many people, come make it happen with us",
  },
  {
    image: gitgit,
    title: "The Beauty of Nature",
    description: "Bali's cool, calm, green nature tourism will make you feel like you are in heaven",
  },
];

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

const Index = () => {
  return (
    <div>
      <NavbarComponents />
      <CourselComponents slides={slidesIndex} />
      <MenuComponents
        title="Explore Our Services"
        subtitle="Discover the best options we offer from Travelingkuy for those of you who want to explore Bali..."
        navItems={navListItems}
      />
      <CardVillaComponents />
      <UlasanComponents
        reviews={reviewsIndex}
        title="Explore Bali with Us"
        subtitle="Offering an unforgettable travel experience with Traveling Kuy"
        bannerImg={Rating}
      />
      <FooterComponents />
    </div>
  );
};

export default Index;
