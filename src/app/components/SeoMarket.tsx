"use client";
import {UnderLineImg} from '../../index';

const SeoMarket: React.FC = () => {
    return (
   <div>
        <h1 className="lmd:text-[50px] md:text-[40px] text-[30px] leading-[35px] lmd:leading-[65px] md:leading-[45px] CircularStdBold text-center">
        OUR SEO MARKETING AGENCY <br className="hidden md:block"></br> <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> SERVICES</span>
        </h1>
        <p className="CircularStdBook-normal text-[18px] xxl:text-[22px] leading-[28px] xxl:leading-[32px] text-[#434343] text-center pt-9">
        Markitors is an SEO marketing agency generating consistent, tangible results for small businesses. We create data-driven <br></br> SEO strategies that are laser-focused on your unique business goals. Here are a few areas we specialize in.
        </p>
    </div>
    );
}

export default SeoMarket;