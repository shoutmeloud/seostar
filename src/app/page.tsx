// pages/index.tsx
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Tabs from './components/Tabs';
import SeoMarket from './components/SeoMarket';
import BuisnessCompetitors from './components/BuisnessCompetitors';
import SmallMarket from './components/SmallMarket';
import SeoExpertsPrice from './components/SeoExpertsPrice';
import MeetTeam from './components/MeetTeam';

import Price from './components/Price';
import BlockSection from './components/BlockSection';
import Testimonials from './components/Testimonials';
import { RightArrow, BannerBG, BannerImage, UnderLineImg, BrandLogo } from '../index'; 
import Layout from './components/Layout';
const Homepage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>Next.js and Tailwind CSS</title>
        <meta name="description" content="Creating a responsive design with Next.js and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <div className="main">
        <div className="banner lmd:pt-[190px] md:pt-[130px] pt-[120px] pb-[80px] lmd:pb-[150px] md:pb-[100px] bg-center bg-no-repeat relative bg-cover" style={{ backgroundImage: `url(${BannerBG.src})` }}>
          <div className="container mx-auto text-white">
            <div className="md:flex block justify-between items-center">
              <div className="md:w-1/2 w-full pr-5 text-center md:text-left">
                <h1 className="text-white xl:text-[56px] xxl:text-[66px] 2xl:text-[75px] lmd:text-[40px] text-[32px] leading-[40px] xl:leading-[64px] xxl:leading-[72px] 2xl:leading-[78px] lmd:leading-[50px] CircularStdBold uppercase">
                  #1 SEO Marketing Agency for Small Businesses
                </h1>
                <p className="text-[16px] xxl:text-[22px] leading-[25px] xxl:leading-[30px] CircularStdBook-normal pt-3">
                  Markitors connects small businesses with customers…and has a great time doing it. Want to learn how you can improve your online presence, search rankings, and conversion rates?
                </p>
                <div className="lmd:flex md:block mt-6">
                  <a href="#" className="rounded-[50px] flex items-center text-[16px] leading-[50px] lmd:text-[12px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mr-3 px-5 justify-center">
                    Schedule a Free Consultation <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority />
                  </a>
                  <a href="#" className="rounded-[50px] flex items-center text-[16px] lmd:text-[12px] leading-[50px] text-white border border-[#fff] CircularStdBold px-5 justify-center lmd:mt-0 md:mt-2 mt-4">
                    Get a Free SEO Audit <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority />
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 w-full flex justify-center mt-4 md:mt-0">
                <Image src={BannerImage} alt="Banner" priority />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="pt-[70px]">
            <SeoMarket />
          </div>
          <div className="pt-[60px]">
            <Tabs />
          </div>
        </div>

        <div className="outrank relative mt-20">
          <div className="container mx-auto">
            <BuisnessCompetitors />
          </div>
        </div>
        
        <div className="container mx-auto">
          <SmallMarket />
        </div>

        <div className="meet-experts pt-24">
          <div className="container mx-auto">
            <SeoExpertsPrice />
            <Price />
          </div>
        </div>

        <div className="blog_info mt-14">
          <div className="container mx-auto">
            <BlockSection />
          </div>
        </div>

        <div className="experts-seo md:py-[118px] py-[80px]">
          <div className="container mx-auto">
            <MeetTeam />
          </div>
        </div>

        <div className="testimonial mt-12">
          <div className="container mx-auto">
            <h2 className="text-center md:text-[50px] md:leading-[65px] text-[35px] leading-[40px] CircularStdBold uppercase">
              OUR <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})` }}>Testimonials</span>
            </h2>
            <div className="pt-5">
              <Testimonials />
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <Image src={BrandLogo} className="mt-5" alt="Brand Logo" />
        </div>

       
      </div>
      </Layout>
    </div>
  );
};

export default Homepage;
