"use client";
import Image from "next/image";
import { useState } from "react";
import {SeoIcon, Digital, SeoContent, RightArrow, TechnicalSeo, LocalSeo, TabImage} from '../../index';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="w-full mx-auto mt-10">
      {/* Tab Headers */}
      <div className="md:flex block justify-between  text-center">
        <button
          className={`md:py-2 xl:px-16 lmd:px-8 xxl:px-8 CircularStdMedium rounded-md xxl:w-[18%] xl:w-auto md:w-[18%] xxl:text-[21px] w-full shadow-lg py-4 ${activeTab === "tab1" ? "border-t-8 border-[#52B95D] text-black bg-[#E9F8EB] shadow-none" : "text-gray-500"}`}
          onClick={() => setActiveTab("tab1")}
        >
           <Image src={SeoIcon} alt="Seo-icon" className="mx-auto text-center mb-2" priority />
           Search Engine <br></br> Optimization (SEO)
        </button>
        <button
          className={`md:py-2 xl:px-16 lmd:px-8 xxl:px-8 CircularStdMedium rounded-md xxl:w-[18%] xl:w-auto md:w-[18%]  xxl:text-[21px] shadow-lg w-full py-4 ${activeTab === "tab2" ? "border-t-8 border-[#52B95D] text-black bg-[#E9F8EB]" : "text-gray-500"}`}
          onClick={() => setActiveTab("tab2")}
        >
         <Image src={Digital} alt="Seo-icon" className="mx-auto text-center mb-2" priority />
           Digital PR
        </button>
        <button
          className={`md:py-2 xl:px-16 lmd:px-8 xxl:px-8 CircularStdMedium rounded-md xxl:w-[18%] xl:w-auto md:w-[18%]  xxl:text-[21px] w-full shadow-lg py-4 ${activeTab === "tab3" ? "border-t-8 border-[#52B95D] text-black bg-[#E9F8EB]" : "text-gray-500"}`}
          onClick={() => setActiveTab("tab3")}
        >
         <Image src={SeoContent} alt="Seo-icon" className="mx-auto text-center mb-2" priority />
           SEO Content
        </button>
        <button
          className={`md:py-2 xl:px-16 lmd:px-8 xxl:px-8 CircularStdMedium rounded-md xxl:w-[18%] xl:w-auto md:w-[18%]  xxl:text-[21px] w-full shadow-lg py-4 ${activeTab === "tab4" ? "border-t-8 border-[#52B95D] text-black bg-[#E9F8EB]" : "text-gray-500"}`}
          onClick={() => setActiveTab("tab4")}
        >
         <Image src={TechnicalSeo} alt="Seo-icon" className="mx-auto text-center mb-2" priority />
         Technical SEO
        </button>
        <button
          className={`md:py-2 xl:px-16 lmd:px-8 xxl:px-8 CircularStdMedium rounded-md xxl:w-[18%] xl:w-auto md:w-[18%]  xxl:text-[21px] shadow-lg w-full py-4 ${activeTab === "tab5" ? "border-b-2 border-blue-500 text-black bg-[#E9F8EB]" : "text-gray-500"}`}
          onClick={() => setActiveTab("tab5")}
        >
         <Image src={LocalSeo} alt="Seo-icon" className="mx-auto text-center mb-2" priority />
         Local SEO
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-[#E9F8EB] lmd:py-[70px] py-[30px] lmd:px-[70px] px-[30px] mt-5 rounded-[10px] shadow-xl mb-4 relative tab-con">
        {activeTab === "tab1" && <div className="lmd:flex block justify-between">
         <div className="lmd:w-1/2 w-full"><Image src={TabImage} alt="Seo-icon" className="mx-auto text-center mb-2" priority /></div>
         <div className="lmd:w-1/2 w-full md:ps-5 ps-0">
           <h2 className="CircularStdMedium text-[#52B95D] text-[41px] leading-[45px]">Digital PR</h2>
           <p className="text-[17px] leading-[25px] CircularStdBook-normal pt-3 text-[#515151]">
           Our Digital PR services help optimize your brand&apos;s digital footprint.</p>

          <p className="text-[17px] leading-[25px] CircularStdBook-normal pt-3 text-[#515151]"> We drive brand awareness, secure strategic online placements, forge relationships with media influencers, increase brand mentions, and achieve monthly backlink goals.Our experienced SEO agency understands the value of high-quality backlinks to search engine algorithms.</p>

          <p className="text-[17px] leading-[25px] CircularStdBook-normal pt-3 text-[#515151]">  All to give small businesses and small teams more visibility online.</p>
          <a href="#" className="rounded-[50px] inline-flex items-center text-[18px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
          Learn More <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
           </div>
         </div>}
        {activeTab === "tab2" && <div>Content for Tab 2</div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
        {activeTab === "tab4" && <div>Content for Tab 4</div>}
        {activeTab === "tab5" && <div>Content for Tab 5</div>}
      </div>
    </div>
  );
};

export default Tabs;
