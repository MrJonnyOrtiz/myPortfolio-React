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
      <h1 className="text-3xl">Welcome to my online portfolio!</h1>
      <Bio />
      {/* <Carousel slides={projects} /> */}
    </div>
  );
}

export default Home;
