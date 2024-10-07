import React from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan import ini
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from '../Api/contexts/AuthContext'; // Import useAuth untuk mengakses fungsi logout
import userDefaultImg from '../assets/user/profile.jpg'; // Import gambar default

// Komponen menu profil
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    isSignOut: true, // Indikator untuk item Sign Out
  },
];

const AvatarComponents = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, logout } = useAuth(); // Gunakan fungsi logout dan data user dari AuthContext
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const closeMenu = () => setIsMenuOpen(false);

  const handleMenuItemClick = (item) => {
    if (item.isSignOut) {
      logout(); // Panggil fungsi logout saat "Sign Out" diklik
    } else {
      // Mengarahkan pengguna ke halaman yang sesuai
      switch (item.label) {
        case 'My Profile':
          navigate('/Acountpage'); // Ubah ke halaman profile
          break;
        case 'Edit Profile':
          navigate('/Acountpage'); // Ubah ke halaman edit profile
          break;
      }
    }
    closeMenu(); // Menutup menu setelah klik
  };

  // Tentukan gambar profil yang akan digunakan
  const profileImage = user && user.profileImage ? user.profileImage : userDefaultImg;

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="md"
            alt={user ? user.username : 'User Avatar'}
            withBorder={true}
            color="blue-gray"
            className="p-0.5"
            src={profileImage} // Gunakan gambar profil pengguna atau gambar default
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, isSignOut }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleMenuItemClick({ label, icon, isSignOut })}
              className={`flex items-center gap-2 rounded ${
                isSignOut
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isSignOut ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isSignOut ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};

export default AvatarComponents;
