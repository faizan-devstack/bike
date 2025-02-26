import React from "react";
import { Button } from "./ui/button";

const Explore: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-64 bg-gradient-to-r from-indigo-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-white text-2xl md:text-3xl font-semibold pb-4">
          Explore our collection and find the perfect bike for you.
        </h1>
        <Button variant='custom'>
            Get Started
        </Button>
      </div>
    </div>
  );
};

export default Explore;
