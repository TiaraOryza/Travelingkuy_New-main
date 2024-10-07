import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import Villaone from "../assets/img/DeskripsiVilaaSurya/villa1.jpg"
import Villatwo from "../assets/img/DeskripsiVilaaSurya/villa2.jpg"
import Villatree from "../assets/img/DeskripsiVilaaSurya/villa3.jpg"

import Romsone from "../assets/img/DeskripsiVilaaSurya/room.jpg"
import Romstwo from "../assets/img/DeskripsiVilaaSurya/room2.jpg"

import bathroom from "../assets/img/DeskripsiVilaaSurya/bathroom.jpg"

import swimingone from "../assets/img/DeskripsiVilaaSurya/swiming1.jpg"
import swimingtwo from "../assets/img/DeskripsiVilaaSurya/swiming2.jpg"
import swimingtree from "../assets/img/DeskripsiVilaaSurya/swiming3.jpg"

const DeskripsiVillaComponents = () => {
  const data = [
    {
      label: "Villa",
      value: "villa",
      images: [
        { imageLink: Villaone },
        { imageLink: Villatwo },
        { imageLink: Villatree },
      ],
    },
    {
      label: "Roms",
      value: "roms",
      images: [
        { imageLink: Romsone },
        { imageLink: Romstwo },
      ],
    },
    {
      label: "Bath Rooms",
      value: "bat rooms",
      images: [
        { imageLink: bathroom },
      ],
    },
    {
      label: "Swimming Pool",
      value: "swimming pool",
      images: [
        { imageLink: swimingone },
        { imageLink: swimingtwo },
        { imageLink: swimingtree },
      ],
    },
  ];

  return (
    <div className="w-[80%] mx-auto mt-20">
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4">
          {data.map(({ value, images }) => (
            <TabPanel
              className="grid grid-cols-2 gap-4 md:grid-cols-3"
              key={value}
              value={value}
            >
              {images?.map(({ imageLink }, index) => (
                <div key={index}>
                  <img
                    className="h-56 w-full max-w-full rounded-lg object-cover object-center"
                    src={imageLink}
                    alt="image-photo"
                  />
                </div>
              ))}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default DeskripsiVillaComponents
