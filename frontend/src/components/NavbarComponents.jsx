import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from '../Api/contexts/AuthContext'; // Import useAuth untuk mengakses informasi pengguna
import AvatarComponents from './AvatarComponents'; // Import AvatarComponents

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

const NavbarComponents = () => {
  const { user, logout, fetchUserData } = useAuth(); // Ambil fungsi fetchUserData dari context
  const [openNav, setOpenNav] = React.useState(false);

  // Panggil fetchUserData ketika komponen dimuat
  useEffect(() => {
    if (localStorage.getItem('token')) {
        fetchUserData(); // Hanya panggil fetchUserData jika token tersedia
    }
}, []);

  // Log data user untuk debugging
  console.log('User data:', user);

  // Handle resizing untuk navbar mobile
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Daftar navigasi
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-customBrown">
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/Acountpage" className="flex items-center">
          About
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/FromBookingpage" className="flex items-center">
          Booking
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/destination" className="flex items-center">
          Destination
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/service" className="flex items-center">
          Service
        </Link>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-poppins font-medium text-sm">
        <Link to="/contact" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
    <div className="flex items-center justify-between">
      <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-semibold font-poppins text-xl text-customBrown">
        Traveling Kuy
      </Typography>
      <div className="flex-grow flex justify-center">
        <div className="hidden lg:block">{navList}</div>
      </div>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <AvatarComponents /> {/* Komponen Avatar di sebelah kanan */}
            <Typography variant="small" className="font-poppins font-semibold text-base text-customBrown">
              {user.username} {/* Menampilkan username di sebelah kiri */}
            </Typography>

          </>
        ) : (
          <>
            <Link to="/Singinpage">
              <Button variant="text" size="m" className="hidden lg:inline-block bg-customBrown">
                <span className="text-white">Sign In</span>
              </Button>
            </Link>
            <Link to="/Loginpage">
              <Button variant="text" size="m" className="hidden lg:inline-block bg-customBrown">
                <span className="text-white">Log In</span>
              </Button>
            </Link>
          </>
        )}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-customBrown hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </IconButton>
      </div>
    </div>
    <MobileNav open={openNav}>
      {navList}
      <div className="flex items-center gap-x-1">
        {user ? (
          <Button fullWidth onClick={logout} variant="text" size="sm" className="bg-customBrown">
            <span className="text-white">Logout</span>
          </Button>
        ) : (
          <>
            <Link to="/Loginpage">
              <Button fullWidth variant="text" size="sm" className="bg-customBrown">
                <span className="text-white">Log In</span>
              </Button>
            </Link>
            <Link to="/Singinpage">
              <Button fullWidth variant="text" size="sm" className="bg-customBrown">
                <span className="text-white">Sign Up</span>
              </Button>
            </Link>
          </>
        )}
      </div>
    </MobileNav>
  </Navbar>
  );
}

export default NavbarComponents;
