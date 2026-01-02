import React from 'react'
import Title from './Title';
import Button from './Button';


const Navbar = () => {
  return (
    <nav className="w-full bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <h1 className="text-lg font-semibold">
          Health Care
        </h1>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          <li className="cursor-pointer hover:text-blue-200">Home</li>
          <li className="cursor-pointer hover:text-blue-200">About</li>
          <li className="cursor-pointer hover:text-blue-200">How</li>
          <li className="cursor-pointer hover:text-blue-200">Blog</li>
          <li className="cursor-pointer hover:text-blue-200">Subscription</li>
        </ul>

        <div className="flex items-center gap-6">
           <Button
            text="Get Started"
            className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-md text-sm font-medium"
          />
          <span className="cursor-pointer text-sm hover:text-blue-200">
            Sign in
          </span>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;


