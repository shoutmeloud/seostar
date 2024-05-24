"use client";
import Image from "next/image";
import {BlogImageOne, BlogImageTwo, BlogImageThree} from '../../index';
const BlockSection: React.FC = () => { 
    return (
<div className="lg:flex lmd:block">
              <div className="lg:w-1/2 lmd:w-full">
                <div className="blog-box rounded-[12px] relative overflow-hidden md:mx-5 mx-0">
                  <Image src={BlogImageOne} alt="Seo-guide" className="rounded-tl-xl rounded-tr-xl w-full"  priority/>
                  <div className="px-[40px] py-[20px] bg-white rounded-bl-xl rounded-br-xl">
                    <h3 className="CircularStdMedium text-[27px] leading-[30px]">Small Business SEO Guide</h3>
                    <p className="CircularStdBook-normal text-[16px] leading-[24px] pt-4 text-[#515151]">How do smaller companies win market share online? Small businesses with the support of a professional SEO company can compete for a place on Google’s most coveted first page against anyone.</p>
                    <a href="#" className="absolute right-[16px] bottom-[16px] z-10">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="white"/>
                    </svg>

                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 lmd:w-full">
                <div className="blog-box rounded-[12px] relative overflow-hidden md:mx-5 mx-0 md:mt-5 lg:mt-0 mt-3">
                <div className="md:flex block items-center justify-between bg-white ">
                        <div className="img-sec md:w-[45%] w-full">
                          <Image src={BlogImageTwo}  alt="Seo-wins" className="w-full" priority/>
                        </div>
                        <div className="text-sec md:w-[55%] w-full md:py-0 py-8 px-8">
                          <h3 className="CircularStdMedium text-[27px] leading-[30px]">Small Business SEO Wins</h3>
                          <p className="CircularStdBook-normal text-[16px] leading-[24px] pt-4 text-[#515151]">Keywords that our clients rank in the top 10 organic search results. This is a small sampling of our SEO “wins” and the successes that are in progress.</p>
                          <a href="#" className="absolute right-[16px] bottom-[16px] z-10">
                              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="white"/>
                            </svg>
                            </a>
                        </div>
                     </div>
                </div>
                <div className="blog-box rounded-[12px] relative overflow-hidden mt-[40px] md:mx-5 mx-0">
                  <div className="md:flex block items-center justify-between bg-white">
                        <div className="img-sec md:w-[45%] w-full">
                          <Image src={BlogImageThree}  alt="Seo-wins" className="w-full" priority/>
                        </div>
                        <div className="text-sec md:w-[55%] w-full px-8 md:py-0 py-8">
                          <h3 className="CircularStdMedium text-[27px] leading-[30px]">Business Industries & Verticals</h3>
                          <p className="CircularStdBook-normal text-[16px] leading-[24px] pt-4 text-[#515151]">Some agencies focus on one or two industries. Markitors? We are more diverse. These are some of the industries that we have had success in with SEO.</p>
                          <a href="#" className="absolute right-[16px] bottom-[16px] z-10">
                              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="white"/>
                            </svg>
                            </a>
                        </div>
                     </div>
                </div>
              </div>
            
 </div>
    );
}

export default BlockSection;