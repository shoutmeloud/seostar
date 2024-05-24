"use client";
import Image from "next/image";
import {HeaderLogo, RightArrow, FaceBook,Twitter,Linkdin} from '../../index';
const Footer: React.FC = () => {
    return (
     <div>
           <div className="container mx-auto">
            <div className="md:flex block md:flex-wrap lg:flex-nowrap">
              <div className="lg:w-1/4 w-full">
                <Image src={HeaderLogo} alt="logo" className="lg:mx-0 mx-auto"/>
                <p className="text-[16px] leading-[21px] text-white CircularStdBook-normal pt-6">
                We&apos;ve been voted a Best Place To Work multiple times by the Business Journal, Best Companies, and more. We know our stuff, and nothing makes us happier than moving small businesses forward.
                </p>
                <a href="#" className="rounded-[50px] inline-flex items-center lg:text-[15px] lmd:text-[13px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 lg:px-5 lmd:px-3 px-3">
                Schedule a Free Consultation <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                    </a>
              </div>
              <div className="lg:w-1/4 w-full">
              <div className="mx-auto lg:w-fit w-full flex flex-col justify-center">
                  <h2 className="CircularStdBold text-white text-[25px] lg:pt-0 pt-5">Quick links</h2>
                  <ul className="pt-3 lg:block flex flex-wrap md:flex-nowrap justify-center">
                    <li>
                      <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block">sEO</a>
                    </li>
                    <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block">content </a>
                    </li>
                    <li> 
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block"> digital pR </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block">technical sEO</a>
                    </li>
                    <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block"> industries </a>
                    </li>
                    <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block">about </a> 
                    </li>
                    <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block">
                    contact
                    </a> 
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/4 w-full">
              <div className="mx-auto lg:w-fit w-full flex flex-col justify-center">
                  <h2 className="CircularStdBold text-white text-[25px] lg:pt-0 pt-5">Locations</h2>
                  <ul className="pt-3 lg:block flex flex-wrap md:flex-nowrap justify-center">
                    <li>
                      <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">Austin</a>
                    </li>
                    <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">Dallas </a>
                    </li>
                    <li> 
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block"> Houston </a>
                    </li>
                    <li>
                      <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">Albuquerque</a>
                    </li>
                    <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3 capitalize block"> Denver </a>
                    </li>
                    <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">Las Vegas </a> 
                    </li>
                    <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">
                    Miami
                    </a> 
                    </li>
                    <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 lg:px-0 px-3  capitalize block">
                    Tampa
                    </a> 
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:w-1/4 w-full">
              <div className="mx-auto w-fit">
                  <h2 className="CircularStdBold text-white text-[25px] lg:pt-0 pt-5">Give us a Follow</h2>
                  <ul className="pt-3 flex flex-wrap md:flex-nowrap lg:justify-start lmd:justify-center justify-center">
                    <li className="mr-2">
                      <a href="#" className="block">
                      <Image src={FaceBook} alt="Facebook"/>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="block">
                      <Image src={Twitter} alt="Twitter"/>
                      </a>
                    </li>
                    <li className="mr-2">
                      <a href="#" className="block">
                      <Image src={Linkdin} alt="Linkdin"/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom py-4 border-t mt-12 border-[#FFFFFF]">
            <div className="container mx-auto">
              <div className="md:flex block justify-between">
                  <div className="copyright">
                    <p className="text-white CircularStdBook-normal text-[18px]">© 2024 SEO STAR. All Rights Reserved.</p>
                  </div>
                  <div className="ftr-link">
                    <ul className="flex">
                      <li>
                        <a href="#" className="CircularStdBook-normal md:text-[18px] text-[16px] text-[#C6C6C6] block px-2">Terms & Conditions</a>
                      </li>
                      <li className="border-l border-[#C6C6C6]">
                        <a href="#" className="CircularStdBook-normal md:text-[18px] text-[16px] text-[#C6C6C6] block px-2">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
     </div>
    );
}
    
export default Footer;