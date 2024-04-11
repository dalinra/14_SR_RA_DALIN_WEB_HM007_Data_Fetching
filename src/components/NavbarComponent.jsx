import React from "react";
import Link from 'next/link';

const NavbarComponent = () => {
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 bg-transparent">
    <div className="flex-1 flex justify-between items-center">
      <Link href={'/'}>
        <div class="text-xl h-8">
          <img src="https://www.legend.com.kh/_ipx/s_117x44/legend-cinema-logo.png" alt="" />
        </div>
      </Link>
    </div>

    <label for="menu-toggle" class="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0 gap-2">
                <li><a className="md:py-1 md:px-3 rounded-lg py-2 px-0 block hover:text-black hover:bg-white" href="#">Home</a></li>
                <li><a className="md:py-1 md:px-3 rounded-lg py-2 px-0 block  hover:text-black hover:bg-white" href="#">Popular</a></li>
                <li><a className="md:py-1 md:px-3 rounded-lg py-2 px-0 block  hover:text-black hover:bg-white" href="#">Romance</a></li>
                <li><a className="md:py-1 md:px-3 rounded-lg py-2 px-0 block  hover:text-black hover:bg-white" href="#">Amini</a></li>
                <input type="text" placeholder=" Type to serch" className="ml-4 h-10 border border-gray-200 rounded-md py-1 px-2"/>
            </ul>
        </nav>
    </div>
</header>
  );
};

export default NavbarComponent;
