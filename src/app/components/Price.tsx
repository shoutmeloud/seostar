"use client";
import Image from "next/image";
import {RightArrow} from '../../index';
const Price: React.FC = () => {     
    return (
<div className="mt-14 pt-8 md:flex md:flex-wrap lmd:flex-nowrap justify-center block">
       <div className="lmd:w-1/3 md:w-1/2 w-full">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Basic</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$400</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center lg:text-[20px] lmd:text-[18px] CircularStdBold py-5">Basic SEO Packages Include:</p>
                  <ul>
                     <li className="flex items-center px-5 py-3"> <svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Keyword Research </li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Google Analytics Setup & Configuration</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Monthly Strategy Development </li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Title Tag & Meta Tag Optimization</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Technical SEO / On-Site SEO</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Website Speed Optimization</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Internal Link Building / Crosslinking</li>
                  </ul>
                  <a href="#" className="rounded-[50px] flex w-fit mx-auto items-center justify-center text-[18px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
          Learn More <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
              </div>
            </div>
            <div className="lmd:w-1/3 md:w-1/2 w-full mt-14 md:mt-0">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Advanced</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$700</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center lg:text-[20px] lmd:text-[18px] CircularStdBold py-5">Advanced  SEO Packages Include:</p>
                  <ul>
                     <li className="flex items-center px-5 py-3"> <svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Keyword Research </li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Google Analytics Setup & Configuration</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Monthly Strategy Development </li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Title Tag & Meta Tag Optimization</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Technical SEO / On-Site SEO</li>
<li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Website Speed Optimization</li>
                      <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Internal Link Building / Crosslinking</li>
                  </ul>
                  <a href="#" className="rounded-[50px] flex w-fit mx-auto items-center justify-center text-[18px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
          Learn More <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
              </div>
            </div>
            <div className="lmd:w-1/3 md:w-1/2 lmd:mt-0 md:mt-14 mt-20">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Enterprise</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$900</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center lg:text-[20px] lmd:text-[18px] CircularStdBold py-5">Enterprise SEO Packages Include:</p>
                  <ul>
                     <li className="flex items-center px-5 py-3"> 
                     <svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Keyword Research </li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Google Analytics Setup & Configuration</li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Monthly Strategy Development </li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Title Tag & Meta Tag Optimization</li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Technical SEO / On-Site SEO</li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Website Speed Optimization</li>
                     <li className="flex items-center px-5 py-3 border-t-2 border-dotted border-[#D2D2D2]"><svg width="15" height="12" className="mr-2" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.625 11.25C5.15625 11.25 4.6875 11.0625 4.3125 10.6875L0.5625 6.9375C-0.1875 6.1875 -0.1875 5.0625 0.5625 4.3125C1.3125 3.5625 2.53125 3.5625 3.1875 4.3125L5.625 6.75L11.8125 0.5625C12.5625 -0.1875 13.6875 -0.1875 14.4375 0.5625C15.1875 1.3125 15.1875 2.4375 14.4375 3.1875L6.9375 10.6875C6.5625 11.0625 6.09375 11.25 5.625 11.25Z" fill="#52B95D"/>
</svg>Internal Link Building / Crosslinking</li>
                  </ul>
                  <a href="#" className="rounded-[50px] flex w-fit mx-auto items-center justify-center text-[18px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
          Learn More <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
              </div>
            </div>
            </div>
    );
}

export default Price;