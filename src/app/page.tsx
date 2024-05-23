import Image from "next/image";
import Tabs from "../app/components/Tabs";
import Testimonials from "../app/components/Testimonials";
import {HeaderLogo, RightArrow, BannerBG, BannerImage, UnderLineImg, Strategy, Build, Deliver, BlogImageOne, BlogImageTwo,BlogImageThree,TestimonialImage, TestimonialImageTwo,TestimonialImageThree,BrandLogo,FaceBook,Twitter,Linkdin} from '../index';

export default function Home() {
  return (
    <div className="main">
      <header className="flex text-white justify-between items-center py-[25px] absolute left-0 right-0 top-0 w-full z-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="logo">
            <Image src={HeaderLogo} alt="Gradient-Tick" />
            </div> 
            <nav>
              <ul className="flex">
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">SEO</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">Content</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">Digital PR</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">Technical SEO</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">Industries</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">About</a>
                </li>
                <li>
                  <a href="#" className="px-3 text-[18px] CircularStdBook-normal">Contact</a>
                </li>
              </ul>
            </nav>
            <a href="#" className="rounded-[50px] px-[30px] flex items-center border leading-[58px]">Free Consultation <Image src={RightArrow} className="ms-2" alt="Right Arrow"/> </a>
          </div>
        </div>
      </header>
      <div className="banner pt-[190px] pb-[150px] bg-center bg-no-repeat relative" style={{ backgroundImage: `url(${BannerBG.src})`, }}>

        <div className="container mx-auto text-white">
            <div className="flex justify-between items-center">
              <div className="w-1/2 pr-5">
                <h1 className="text-white text-[60px] leading-[65px] CircularStdBold uppercase">
                  #1 seo marketing agency for small businesses
                </h1>
                 <p className="text-[17px] leading-[25px] CircularStdBook-normal pt-3">
                  Markitors connects small businesses with customers…and has a great time doing it. Want to learn how you can improve your online presence, search rankings, and conversion rates?
                </p>
                <div className="flex mt-6">
                  <a href="#" className="rounded-[50px] flex items-center text-[16px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mr-3 px-5">
                    Schedule a Free Consultation <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority/>
                  </a>
                  <a href="#" className="rounded-[50px] flex items-center text-[16px] leading-[50px] text-white border border-[#fff] CircularStdBold px-5">
                  Get a free SEO Audit <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority/>
                  </a>
                </div>
              </div>
              <div className="w-1/2 flex justify-center">
                <Image src={BannerImage}  alt="Banner" priority/>
              </div>
            </div>
        </div>
      </div>
      <div className="container mx-auto">
         <div className="pt-[70px]">
           <h1 className="text-[50px] leading-[65px] CircularStdBold text-center">
             OUR SEO MARKETING AGENCY <br></br> <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> SERVICES</span>
           </h1>
           <p className="CircularStdBook-normal text-[18px] leading-[28px] text-[#434343] text-center pt-9">
           Markitors is an SEO marketing agency generating consistent, tangible results for small businesses. We create data-driven <br></br> SEO strategies that are laser-focused on your unique business goals. Here are a few areas we specialize in.
           </p>
         </div>
            
          <div className="pt-[60px]">
            <Tabs />
          </div>

      </div>
      <div className="outrank realtive mt-20">
       <div className="container">
         <h2 className="text-[50px] CircularStdBold text-center text-white leading-[59px]">HOW WE HELP SMALL BUSINESSES <br></br>OUTRANK TOP <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> COMPETITORS </span></h2>
         <div className="round-main">
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Strategy} alt="Gradient-Tick" />
                <h5 className="text-[24px] CircularStdMedium text-white">Strategy</h5>
                <p className="text-[16px] leading-[25px] CircularStdBook text-white pt-4">First, we develop an SEO plan based on your business’ challenges and SEO goals.</p>
               </div>
             </div>
           </div>
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Build} alt="Gradient-Tick" />
                <h5 className="text-[24px] CircularStdMedium text-white">Build</h5>
                <p className="text-[16px] leading-[25px] CircularStdBook text-white pt-4">We take this insight to build the foundation for your digital marketing efforts.</p>
               </div>
             </div>
           </div>
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Deliver} alt="Gradient-Tick" />
                <h5 className="text-[24px] CircularStdMedium text-white">Deliver</h5>
                <p className="text-[16px] leading-[25px] CircularStdBook text-white pt-4">Now that key online assets are built, we bring your brand to life online.</p>
               </div>
             </div>
           </div>
         </div>
       </div>
      </div>
      <div className="container mx-auto">
        <div className="flex justify-between bg-[#52B95D] items-center rounded-[12px] p-[50px] -mt-[60px]">
            <div className="text-sec">
               <h3 className="text-[40px] leading-[45px] CircularStdBold text-white">WHY IS SEO SO POWERFUL FOR SMALL <br></br>BUSINESS MARKETING?</h3>
               <p className="text-[20px] CircularStd leading-[30px] text-white pt-3">Learn about how this long-term, sustainable solution works.</p>
            </div>
            <a href="#" className="rounded-[50px] flex items-center text-[16px] leading-[50px] text-white border border-[#fff] CircularStdBold px-5">
            Learn More <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority/>
                  </a>
        </div>
      </div>
      <div className="meet-experts pt-24">
        <div className="container mx-auto">
           <h2 className="text-[50px] CircularStdBold text-center">MEET OUR SEO EXPERTS</h2>
           <p className="text-center pt-4 CircularStdBook">
           Markitors is an award-winning SEO company located in the heart of Old Town Scottsdale. We connect small businesses <br></br> with customers…and have a great time doing it. If you Google “small business seo,” you&apos;ll find Markitors on the 1st page of <br></br> search results. We know our stuff, and nothing makes us happier than moving small businesses forward.
           </p>
           <div className="mt-14 pt-8 flex">
            <div className="w-1/3">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Basic</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$400</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center text-[20px] CircularStdBold py-5">Basic SEO Packages Include:</p>
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
            <div className="w-1/3">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Advanced</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$700</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center text-[20px] CircularStdBold py-5">Advanced  SEO Packages Include:</p>
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
            <div className="w-1/3">
              <div className="bg-[#fff] shadow-lg py-6 border-t-[6px] border-[#52B95D] rounded-[11px] mx-2">
                   <div className="pricing_tag relative">Enterprise</div>
                  <h3 className="text-[55px] text-[#52B95D] CircularStdBold text-center leading-[50px] pt-4">$900</h3>
                  <h6 className="text-center text-[20px] CircularStdBold"> /month</h6>
                  <p className="text-center text-[20px] CircularStdBold py-5">Enterprise SEO Packages Include:</p>
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
           </div>
        </div>
      </div>
      <div className="blog_info mt-14">
        <div className="container mx-auto">
            <div className="flex">
              <div className="w-1/2">
                <div className="blog-box rounded-[12px] relative overflow-hidden mx-5">
                  <Image src={BlogImageOne} alt="Seo-guide" className="rounded-tl-xl rounded-tr-xl w-full"  priority/>
                  <div className="px-[40px] py-[20px] bg-white rounded-bl-xl rounded-br-xl">
                    <h3 className="CircularStdMedium text-[27px] leading-[30px]">Small Business SEO Guide</h3>
                    <p className="CircularStdBook-normal text-[17px] leading-[24px] pt-4 text-[#515151]">How do smaller companies win market share online? Small businesses with the support of a professional SEO company can compete for a place on Google’s most coveted first page against anyone.</p>
                    <a href="#" className="absolute right-[16px] bottom-[16px] z-10">
                    <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="white"/>
                    </svg>

                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2">
                <div className="blog-box rounded-[12px] relative overflow-hidden mx-5">
                <div className="flex items-center justify-between bg-white ">
                        <div className="img-sec w-[45%]">
                          <Image src={BlogImageTwo}  alt="Seo-wins" priority/>
                        </div>
                        <div className="text-sec w-[55%] px-8">
                          <h3 className="CircularStdMedium text-[27px] leading-[30px]">Small Business SEO Wins</h3>
                          <p className="CircularStdBook-normal text-[17px] leading-[24px] pt-4 text-[#515151]">Keywords that our clients rank in the top 10 organic search results. This is a small sampling of our SEO “wins” and the successes that are in progress.</p>
                          <a href="#" className="absolute right-[16px] bottom-[16px] z-10">
                              <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 5.65661H11.8817L7.57006 1.19255L8.7219 0L15 6.5L8.7219 13L7.57006 11.8074L11.8817 7.34339H0V5.65661Z" fill="white"/>
                            </svg>
                            </a>
                        </div>
                     </div>
                </div>
                <div className="blog-box rounded-[12px] relative overflow-hidden mt-[40px] mx-5">
                  <div className="flex items-center justify-between bg-white">
                        <div className="img-sec w-[45%]">
                          <Image src={BlogImageThree}  alt="Seo-wins" priority/>
                        </div>
                        <div className="text-sec w-[55%] px-8">
                          <h3 className="CircularStdMedium text-[27px] leading-[30px]">Business Industries & Verticals</h3>
                          <p className="CircularStdBook-normal text-[17px] leading-[24px] pt-4 text-[#515151]">Some agencies focus on one or two industries. Markitors? We are more diverse. These are some of the industries that we have had success in with SEO.</p>
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
            </div>
      </div>
      <div className="experts-seo py-[118px]">
        <div className="container mx-auto">
          <h2 className="text-center text-[50px] leading-[65px] CircularStdBold">MEET OUR <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> SEO EXPERTS </span></h2>
          <p className="text-[20px] leading-[32px] CircularStdBook-normal text-[#434343] text-center pt-4">
          Markitors is an award-winning SEO company located in the heart of Old Town Scottsdale. We connect small businesses <br></br> with customers…and have a great time doing it. If you Google “small business seo,” you&apos;ll find Markitors on the 1st page of <br></br> search results. We know our stuff, and nothing makes us happier than moving small businesses forward.
          </p>
          <div className="flex mt-11">
            <div className="w-1/3">
              <div className="bg-white shadow-lg rounded-[12px] p-[50px] text-center mx-3">
                <div className="picture relative w-[226px] h-[226px] rounded-full mx-auto z-10 mb-7">
                  <Image src={TestimonialImage} className="rounded-full w-full h-full object-cover" alt=""/>
                </div>
                <h3 className="CircularStdMedium text-[27px] leading-[30px]">Jenn Christie</h3>
                <p className="CircularStdBook-normal text-[20px] text-[#434343]">VP of Operations</p>
              </div>
              </div>
              <div className="w-1/3">
              <div className="bg-white shadow-lg rounded-[12px] p-[50px] text-center mx-3">
                <div className="picture relative w-[226px] h-[226px] rounded-full mx-auto z-10 mb-7">
                  <Image src={TestimonialImageTwo} className="rounded-full w-full h-full object-cover" alt=""/>
                </div>
                <h3 className="CircularStdMedium text-[27px] leading-[30px]">Savannah Sletten</h3>
                <p className="CircularStdBook-normal text-[20px] text-[#434343]">SEO Account Manager</p>
              </div></div>
              
              <div className="w-1/3">
              <div className="bg-white shadow-lg rounded-[12px] p-[50px] text-center mx-3">
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
      </div>
      <div className="testimonial mt-12">
         <div className="container mx-auto">
            <h2 className="text-center text-[50px] leading-[65px] CircularStdBold uppercase"> OUR <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}>  Testimonials </span>
           </h2>
          <div className="pt-5">
           <Testimonials/>
          </div>
       </div>
      </div>
     <div className="container mx-auto">
      <Image src={BrandLogo} className=" mt-5" alt="Brand-Logo"/>
      </div>
      <footer>
        <div className="container mx-auto">
          <div className="flex">
            <div className="w-1/4">
               <Image src={HeaderLogo} alt="logo"/>
               <p className="text-[18px] leading-[25px] text-white CircularStdBook-normal pt-6">
               We&apos;ve been voted a Best Place To Work multiple times by the Business Journal, Best Companies, and more. We know our stuff, and nothing makes us happier than moving small businesses forward.
               </p>
               <a href="#" className="rounded-[50px] inline-flex items-center text-[16px] leading-[50px] text-white bg-[#52B95D] border border-[#52B95D] CircularStdBold mt-4 px-7">
               Schedule a Free Consultation <Image src={RightArrow} className="ms-3" alt="Right Arrow" priority/>
                  </a>
            </div>
            <div className="w-1/4">
             <div className="mx-auto w-fit flex flex-col justify-center">
                <h2 className="CircularStdBold text-white text-[25px]">Quick links</h2>
                <ul className="pt-3">
                  <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">sEO</a>
                  </li>
                  <li>
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">content </a>
                  </li>
                  <li> 
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block"> digital pR </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">technical sEO</a>
                  </li>
                  <li>
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block"> industries </a>
                  </li>
                  <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">about </a> 
                  </li>
                  <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">
                  contact
                  </a> 
                  </li>
                </ul>
               </div>
            </div>
            <div className="w-1/4">
             <div className="mx-auto w-fit flex flex-col justify-center">
                <h2 className="CircularStdBold text-white text-[25px]">Locations</h2>
                <ul className="pt-3">
                  <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">Austin</a>
                  </li>
                  <li>
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">Dallas </a>
                  </li>
                  <li> 
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block"> Houston </a>
                  </li>
                  <li>
                    <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">Albuquerque</a>
                  </li>
                  <li>
                  <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block"> Denver </a>
                  </li>
                  <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">Las Vegas </a> 
                  </li>
                  <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">
                  Miami
                  </a> 
                  </li>
                  <li> <a href="#" className="text-[#C6C6C6] CircularStdBook-normal text-[18px] pt-2 capitalize block">
                  Tampa
                  </a> 
                  </li>
                </ul>
               </div>
            </div>
            <div className="w-1/4">
             <div className="mx-auto w-fit">
                <h2 className="CircularStdBold text-white text-[25px]">Give us a Follow</h2>
                <ul className="pt-3 flex">
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
             <div className="flex justify-between">
                <div className="copyright">
                  <p className="text-white CircularStdBook-normal text-[18px]">© 2024 SEO STAR. All Rights Reserved.</p>
                </div>
                <div className="ftr-link">
                  <ul className="flex">
                    <li>
                      <a href="#" className="CircularStdBook-normal text-[18px] text-[#C6C6C6] block px-2">Terms & Conditions</a>
                    </li>
                    <li className="border-l border-[#C6C6C6]">
                      <a href="#" className="CircularStdBook-normal text-[18px] text-[#C6C6C6] block px-2">Terms & Conditions</a>
                    </li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
    </footer>
    </div>
    
  );
}
