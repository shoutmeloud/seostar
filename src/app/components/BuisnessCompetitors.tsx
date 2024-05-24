"use client";
import Image from "next/image";
import {UnderLineImg, Strategy, Build, Deliver} from '../../index';

const BuisnessCompetitors: React.FC = () => {  
    return (
    <div>
        <h2 className="lmd:text-[50px] md:text-[30px] text-[28px] CircularStdBold text-center text-white lmd:leading-[59px] md:leading-[35px]">HOW WE HELP SMALL BUSINESSES <br></br>OUTRANK TOP <span className="bg-no-repeat bg-bottom" style={{ backgroundImage: `url(${UnderLineImg.src})`, }}> COMPETITORS </span></h2>
         <div className="round-main">
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Strategy} alt="Strategy"/>
                <h5 className="text-[24px] xxl:text-[29px] CircularStdMedium text-white">Strategy</h5>
                <p className="text-[16px] xxl:text-[20px] leading-[25px] xxl:leading-[27px] CircularStdBook text-white pt-4">First, we develop an SEO plan based on your business’ challenges and SEO goals.</p>
               </div>
             </div>
           </div>
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Build} alt="Build"/>
                <h5 className="text-[24px] xxl:text-[29px] CircularStdMedium text-white">Build</h5>
                <p className="text-[16px] xxl:text-[20px] leading-[25px] xxl:leading-[27px] CircularStdBook text-white pt-4">We take this insight to build the foundation for your digital marketing efforts.</p>
               </div>
             </div>
           </div>
           <div className="round-part">
             <div className="round-part-inner">
               <div className="link-building-main-text">
                <Image src={Deliver} alt="Deliver"/>
                <h5 className="text-[24px] xxl:text-[29px] CircularStdMedium text-white">Deliver</h5>
                <p className="text-[16px] xxl:text-[20px] leading-[25px] xxl:leading-[27px] CircularStdBook text-white pt-4">Now that key online assets are built, we bring your brand to life online.</p>
               </div>
             </div>
           </div>
         </div>
    </div>
        );
    }

    export default BuisnessCompetitors;