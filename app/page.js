import React from 'react';
import { Product, FooterBanner, HeroBanner } from './components';
import { client } from '@/sanity/lib/client';

const Home = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const { smallText, midText, largeText1, image, product, buttonText, desc } =
    bannerData[0];
  const realBanner = {
    smallText,
    midText,
    largeText1,
    product,
    buttonText,
    desc,
  };

  console.log(realBanner);

  return (
    <>
      <HeroBanner heroBanner={realBanner} />
      <div className='products-heading'>
        <h2>Best selling products</h2>
        <p>Groceries of any type</p>
      </div>
      <div className='products-container'>
        {products?.map((product) => product.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export default Home;
