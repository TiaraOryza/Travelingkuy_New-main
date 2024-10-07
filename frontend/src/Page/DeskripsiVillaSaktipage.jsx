import React from 'react'
import DeskripsiVillaComponents from '../components/DeskripsiVillaComponents'
import NavbarComponents from '../components/NavbarComponents'
import DeskripsiVillaTextComponents from '../components/DeskripsiVillaTextComponents'

const deskripsiData = {
  title: "SAKTI KUTA RETREAT",
  about: "Villa Surya Bali Heven is the perfect retreat for those seeking tranquility and comfort. Nestled amidst the natural beauty of Bali, this villa has been recently updated to provide a fresh and modern atmosphere while maintaining its traditional warmth and charm.As you step into the villa, you will be greeted by elegant interior design and spacious living areas. Every detail of the villa has been thoughtfully crafted to create a peaceful ambiance, with modern touches that harmonize with its natural surroundings.",

  price: "$129",

  roms: "Master Bedroom Bedroom with a king-size bed, air conditioning, flat-screen TV, and en-suite bathroom.",

  facilities: [
    "Private Pool Pool with a sunbathing area.",
    "Fully Equipped Kitchen Kitchen with cooking utensils, refrigerator, and dishwasher",
    "Living Room Living room with comfortable sofas, satellite TV, and audio system",
    "Free Wi-Fi Unlimited internet connection throughout the villa.",
    "Bathroom: Bathroom with shower and free toiletries.",
  ],

  rules: [
    "Check-in after 3:00 PM, and check-out before 11:00 AM.",
    "No smoking inside the villa; please use the designated smoking areas outside.",
    "Pets are not allowed on the property",
    "No parties or events are permitted without prior approval. Quiet hours are from 10:00 PM to 8:00 AM.",
    "Only registered guests are allowed on the premises",
    "Please respect the tranquility of the villa and avoid loud noises that may disturb the neighbors",
    "Dispose of garbage in the bins provided and follow recycling guidelines for sorting waste",
    "Ensure all doors and windows are locked when leaving the villa. Do not leave valuables unattended"

  ],
  contact: [
    "Admin: 085332567432",
  ],
  bookingLink: "#",
};
const DeskripsiVillaSaktipage = () => {
  return (
  <div>
   <NavbarComponents/>
   <DeskripsiVillaComponents/>
   <DeskripsiVillaTextComponents {...deskripsiData}/>
  </div>
  )
}

export default DeskripsiVillaSaktipage
