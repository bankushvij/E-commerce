import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { AiFillHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";

export default function Example() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/" className="flex items-center">
          Home
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/page/Men" className="flex items-center">
          MEN
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/page/Women" className="flex items-center">
          WOMEN
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/page/All" className="flex items-center">
          SHOP
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/Blog" className="flex items-center">
          BLOG
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400"
      >
        <a href="/ContactUs" className="flex items-center">
          CONTACT US
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="lg:hidden  p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400 "
      >
        <a href="#" className="flex items-center">
          Login
        </a>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="lg:hidden  p-1 text-lg font-medium hover:text-xl hover:font-semibold hover:underline hover:text-red-400 "
      >
        <a href="#" className="flex items-center">
          Register
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto bg-white text-black max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          variant="small"
          className="mr-4 cursor-pointer py-1.5  text-3xl font-black	"
        >
          <span>
            <img src="data:image/webp;base64,UklGRngDAABXRUJQVlA4TGsDAAAvYYAHEL8gEEhS2F93iImYCMVtI6mpxR/vYQJaIXAIevi42BgkDAgEgcBgCCTItlW10jHiJ6DIVbh7/mOVmFS/HkBE/ydA/+ys/+b8q2DFhv/DsJf8m1Chpf/D3jinX4wOkP8L6YL2/sUO7PiTxTz9jVABth+ECmd8tBj438hYg/yDBHgkP8j8lfVqqYD/wID8nf2FwbGX/yRUIG5sDxLY8hdSu1Y51PDVYnCt1t4PRvOkPzg4pluZv4pAmes5PfirqV3rd2t8v6QdqO/m+uuDY+pc64fkF81HZcAPNmmOay9kGx+8krlvYy9kH29rnL9K7Vp7xF4yuAzr1XNSKlz7IClUiL1xc28APt5ShSgN+0VJXwyOSVJ+sBicaTGX38hKBrS3FCqfRgeubTOwQUpGZ2/AOT1LraVvHFpSqFunlHk6uUcpA7bcRqddmJSgbZID7a10AZT50eDU8MVcwF9SUIc8ONcHB87plsEgS9MJ/poLcE7TyfXdu7HrU75FwHUfb+e0tbLaE5Ok9eKK4JIMytyx4cDTg7QruXvlyl0H/PVsyAB5Lpbm8iTdDGqEK0kZiBEgpXZO8VOoh5yvyyxpveBapcmb3w523a5V0wntLSlU8FDB9iUB3m7Rr6RbDZI2Nh2dVkpxdweyJEUAH9Np++24fNRiUGbNBcosKTVwJQOsAM0LsLOr45JCLbPGGAvne55nSflTpgFuNelmZZYicE6dc5IGB7KUvNFN8818lPKH1EySNjD1P82lJgM8qMOmnksRcEmpAS5peMe0Q5k716pelga/VkmhQnrkkjKbUoMa9Lr5+IPRrw/3A2roHHqyNZOkDc7pm8VqGA0gaS5AlqQdODR4b8MK2NJ5ORyKAPHmQNJ0XqukUMH0xehsQ8Ycci/dMpC1tc5cbHFg66TGtXZs+RSHg0PScADbpw04px0ft1bD9iA+SHbdRidrA2qQNDoc6pT5wd7KLCk1sOVTBMyaLaGyK9Heijxz4wCq46NCBTzF5FCDtH9xtLZJkgOuZ9B2zYUjVnz4Cjxyt0VSMj7WICl/AcfwwdKD0YFrHxQqgI/SdEJ731IBfBwdKEn3VDtnDpK0GZzTbb+g2aj7mPdFT8eU8ypJwdzSKElTzPtw07zlbZTGlPdZ/RBz3uOk/pLypu665zSoCwA=" />
          </span>
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:flex flex-wrap justify-around gap-3">
          <div className="black">
            <span className="text-lg">
              <a className="hover:text-red-400">Login</a>/
              <a className="hover:text-red-400">Register</a>
            </span>
          </div>
          <div className="black">
            <span className="text-3xl hover:text-red-400">
              <AiFillHeart />
            </span>
          </div>
          <div className="black">
            <span className="text-3xl hover:text-red-400">
              <FaShoppingCart />
            </span>
          </div>
        </div>
        <div className="lg:hidden ml-auto flex items-end justify-end gap-3">
          <div>
            <span className="text-2xl hover:text-red-400">
              <AiFillHeart />
            </span>
          </div>
          <div className="black">
            <span className="text-2xl hover:text-red-400">
              <FaShoppingCart />
            </span>
          </div>
        </div>
        <IconButton
          variant="text"
          className="ml-3 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>{navList}</MobileNav>
    </Navbar>
  );
}
