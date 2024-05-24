"use client";
import Image from "next/image";
import {UnderLineImg, TestimonialImage, TestimonialImageTwo, TestimonialImageThree, RightArrow} from '../../index';
const MeetTeam: React.FC = () => {
    return (
     <div>
            <h2 className="text-center md:text-[50px] md:leading-[65px] text-[30px] leading-[35px] CircularStdBold">MEET OUR 
         <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> SEO EXPERTS </span></h2>
          <p className="lg:text-[20px] lmd:text-[18px] leading-[32px] CircularStdBook-normal text-[#434343] text-center pt-4">
          Markitors is an award-winning SEO company located in the heart of Old Town Scottsdale. We connect small businesses <br></br> with customers…and have a great time doing it. If you Google “small business seo,” you&apos;ll find Markitors on the 1st page of <br></br> search results. We know our stuff, and nothing makes us happier than moving small businesses forward.
          </p>
          <div className="md:flex block md:flex-wrap lmd:flex-nowrap md:justify-center mt-11">
            <div className="lmd:w-1/3 md:w-1/2 w-full mt-3 md:mt-0">
              <div className="bg-white shadow-lg rounded-[12px] lg:p-[50px] md:p-[30px] text-center mx-3 p-[25px]">
                <div className="picture relative w-[226px] h-[226px] rounded-full mx-auto z-10 mb-7">
                  <Image src={TestimonialImage} className="rounded-full w-full h-full object-cover" alt=""/>
                </div>
                <h3 className="CircularStdMedium text-[27px] leading-[30px]">Jenn Christie</h3>
                <p className="CircularStdBook-normal text-[20px] text-[#434343]">VP of Operations</p>
              </div>
              </div>
              <div className="lmd:w-1/3 md:w-1/2 w-full mt-3 md:mt-0">
              <div className="bg-white shadow-lg rounded-[12px] lg:p-[50px] md:p-[30px] text-center mx-3 p-[25px]">
                <div className="picture relative w-[226px] h-[226px] rounded-full mx-auto z-10 mb-7">
                  <Image src={TestimonialImageTwo} className="rounded-full w-full h-full object-cover" alt=""/>
                </div>
                <h3 className="CircularStdMedium text-[27px] leading-[30px]">Savannah Sletten</h3>
                <p className="CircularStdBook-normal text-[20px] text-[#434343]">SEO Account Manager</p>
              </div></div>
              
              <div className="lmd:w-1/3 md:w-1/2 md:mt-8 lmd:mt-0 w-full mt-3">
              <div className="bg-white shadow-lg rounded-[12px] lg:p-[50px] md:p-[30px] text-center mx-3 p-[25px]">
                <div className="picture relative w-[226px] h-[226px] rounded-full mx-auto z-10 mb-7">
                  <Image src={TestimonialImageThree} className="rounded-full w-full h-full object-cover" alt=""/>
                </div>
                <h3 className="CircularStdMedium text-[27px] leading-[30px]">Sophia Enlow</h3>
                <p className="CircularStdBook-normal text-[20px] text-[#434343]">Sr. SEO Content Strategist</p>
              </div></div>
            
          </div>
          <div className="mt-14 text-center">
          <a href="#" className="rounded-[50px] flex w-fit mx-auto items-center justify-center text-[18px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
          Meet The Team <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
          </div>
    </div>
    );
}
    
export default MeetTeam;