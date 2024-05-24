"use client";
import Image from "next/image";
import {RightArrow} from '../../index';
const SmallMarket: React.FC = () => {  
    return (

<div className="lmd:flex block justify-between text-center lmd:text-left bg-[#52B95D] items-center rounded-[12px] md:p-[50px] p-[20px] -mt-[60px] relative z-10">
<div className="text-sec">
   <h3 className="lg:text-[40px] lmd:text-[34px] md:text-[30px] text-[25px] leading-[33px] lmd:leading-[45px] md:leading-[37px] CircularStdBold text-white">WHY IS SEO SO POWERFUL FOR SMALL <br className="hidden md:block"></br>BUSINESS MARKETING?</h3>
   <p className="md:text-[20px] text-[18px] leading-[24px] CircularStd md:leading-[30px] text-white pt-3 md:pb-4 lmd:pb-0 pb-5">Learn about how this long-term, sustainable solution works.</p>
</div>
<a href="#" className="rounded-[50px] flex md:w-fit lmd:w-auto md:mx-auto lmd:m-0 items-center text-[16px] leading-[50px] text-white border border-[#fff] CircularStdBold px-5 w-fit mx-auto">
Learn More <Image src={RightArrow} className="ms-2" alt="Right Arrow" priority/>
</a>
</div>
    );
}

export default SmallMarket;
