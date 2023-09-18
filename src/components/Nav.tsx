import { navLinks } from "../constants";
import icon from "../assets/icons/icon-nav.png";
import hamburger from "../assets/icons/hamburger.png";

import { useEffect, useState } from "react";

const Nav = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth > 1024) {
        setToggleOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  

  return (
    <header className="padding-x pt-8 pb-3 absolute z-10 w-full bg-white">
      <nav className="flex justify-between">
        <a href='/'>
          <img src={icon} alt='logo' width={50} height={50} className='m-0 w-[50px] h-[50px]' />
        </a>
        <ul className="flex justify-evenly items-center flex-grow max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block pt-3'>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} onClick={() => setToggleOpen(!toggleOpen)}/>
        </div>
      </nav>
      <nav className={toggleOpen ? "block" : "hidden"}>
        <ul className="flex flex-col text-center">
          {navLinks.map((item) => (
            <li key={item.label} className="py-4">
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav;