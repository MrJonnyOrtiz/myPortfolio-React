/* eslint-disable react/prop-types */
import { useEffect } from 'react';

import Bio from '../components/Bio';
// import Carousel from '../components/Carousel';

function Home() {
  useEffect(() => {
    window.gtag('event', 'homePage');
  }, []);

  return (
    <div className="grid gap-8 text-center">
      <h1 className="text-3xl md:text-5xl lg:text-7xl">
        Welcome to my portfolio!
      </h1>
      <Bio />
      {/* <Carousel slides={projects} /> */}
      <img
        src="/fullStackVisual.png"
        className="mx-auto hidden h-auto w-full rounded-xl sm:block sm:w-full md:w-3/4 lg:w-1/2"
      />
    </div>
  );
}

export default Home;
