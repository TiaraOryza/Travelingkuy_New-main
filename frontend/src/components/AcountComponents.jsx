import React, { useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
  Bars3Icon, // Ikon untuk toggle sidebar
} from "@heroicons/react/24/solid";
import ProfileComponents from "./ProfileComponents"; // Halaman Profil

const AcountComponents = () => {
  const [activePage, setActivePage] = useState("profile");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const renderContent = () => {
    switch (activePage) {
      case "profile":
        return <ProfileComponents />;
      case "settings":
        return <div>Settings Page</div>;
      case "inbox":
        return <div>Inbox Page</div>;
      default:
        return <ProfileComponents />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row">
      {/* Tombol untuk toggle sidebar pada perangkat mobile */}
      <div className="p-4 md:hidden">
        <IconButton onClick={handleSidebarToggle} className="w-full">
          <Bars3Icon className="h-6 w-6" />
        </IconButton>
      </div>

      {/* Sidebar dengan kondisi buka/tutup */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block md:w-1/4 lg:w-1/5 h-screen sticky top-0 p-4 bg-white shadow-xl`}
      >
        <Card className="h-full shadow-none">
          <List>
            <ListItem
              onClick={() => setActivePage("profile")}
              className={activePage === "profile" ? "bg-gray-200" : ""}
            >
              <ListItemPrefix>
                <UserCircleIcon className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem
              onClick={() => setActivePage("settings")}
              className={activePage === "settings" ? "bg-blue-100" : ""}
            >
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </div>

      {/* Konten Halaman Berdasarkan Menu yang Dipilih */}
      <div className="flex-grow p-4 md:w-3/4 lg:w-4/5">
        {renderContent()}
      </div>
    </div>
  );
};

export default AcountComponents;
