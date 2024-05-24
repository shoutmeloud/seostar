"use client";
import React from 'react'
import Layout from '../components/Layout';
import Image from 'next/image';
import Price from '../components/Price';
import {BannerBG} from '../../index';
const page = () =>{
  return (
    <div>
    <Layout>
    <div className="banner lmd:pt-[190px] md:pt-[130px] pt-[120px] pb-[80px] lmd:pb-[150px] md:pb-[100px] bg-center bg-no-repeat relative bg-cover" style={{ backgroundImage: `url(${BannerBG.src})` }}>
          <div className="container mx-auto text-white">
          <h1 className="text-white xl:text-[56px] xxl:text-[66px] 2xl:text-[75px] lmd:text-[40px] text-[32px] leading-[40px] xl:leading-[64px] xxl:leading-[72px] 2xl:leading-[78px] lmd:leading-[50px] CircularStdBold uppercase text-center">
                  Price
                </h1>
          </div>
      </div>
     <div className='container mx-auto'> <Price/> </div>
    </Layout>
    </div>
  )
}

export default page
