"use client";
import Image from "next/image";
import { TestimonialOne } from '../../index';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';

// Ensure jQuery is attached to the window object
if (typeof window !== 'undefined') {
    window.$ = window.jQuery = $;
}

// Dynamically import OwlCarousel with no SSR
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
    ssr: false,
    loading: () => <p>Loading...</p>,
});

const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    dots: true,
    loop: true,
};

const Testimonials: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        isClient && (
            <OwlCarousel {...options} className="mt-16">
                <div className="max-w-[90%] mx-auto">
                    <div className="lmd:flex md:block items-center justify-between testi_sec_block relative">
                        <div className="Testi-img shrink-0">
                           <Image src={TestimonialOne} alt="Testimonial" />
                        </div>
                        <div className="text-testi lmd:w-[60%] md:w-[100%] w-full">
                        <p className="text-[20px] leading-[30px] CircularStdBook-normal text-[#434343]">“Phasellus dapibus eleifend quam, sit amet facilisis metus eleifend id.  In luctus convallis tortor, ut ornare nisl tristique non. Etiam  tristique, nulla tempor laoreet viverra, eros massa pretium ex, et  sagittis elit elit vitae ante. Ut congue fermentum magna, eu efficitur  mi interdum at. Aenean semper gravida massa vitae porttitor.”</p>
                           <h3 className="CircularStdBold text-[30px] pt-5">Brian Mohr</h3>
                           <p className="text-[#434343] text-[20px]">Co-founder of Y Scouts</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[90%] mx-auto">
                    <div className="lmd:flex md:block items-center justify-between testi_sec_block relative">
                        <div className="Testi-img  shrink-0">
                           <Image src={TestimonialOne} alt="Testimonial" />
                        </div>
                        <div className="text-testi lmd:w-[60%] md:w-[100%] w-full">
                        <p className="text-[20px] leading-[30px] CircularStdBook-normal text-[#434343]">“Phasellus dapibus eleifend quam, sit amet facilisis metus eleifend id.  In luctus convallis tortor, ut ornare nisl tristique non. Etiam  tristique, nulla tempor laoreet viverra, eros massa pretium ex, et  sagittis elit elit vitae ante. Ut congue fermentum magna, eu efficitur  mi interdum at. Aenean semper gravida massa vitae porttitor.”</p>
                           <h3 className="CircularStdBold text-[30px] pt-5">Brian Mohr</h3>
                           <p className="text-[#434343] text-[20px]">Co-founder of Y Scouts</p>
                        </div>
                    </div>
                </div>
                <div className="max-w-[90%] mx-auto">
                    <div className="lmd:flex md:block items-center justify-between testi_sec_block relative">
                        <div className="Testi-img  shrink-0">
                           <Image src={TestimonialOne} alt="Testimonial" />
                        </div>
                        <div className="text-testi lmd:w-[60%] md:w-[100%] w-full">
                           <p className="text-[20px] leading-[30px] CircularStdBook-normal text-[#434343]">“Phasellus dapibus eleifend quam, sit amet facilisis metus eleifend id.  In luctus convallis tortor, ut ornare nisl tristique non. Etiam  tristique, nulla tempor laoreet viverra, eros massa pretium ex, et  sagittis elit elit vitae ante. Ut congue fermentum magna, eu efficitur  mi interdum at. Aenean semper gravida massa vitae porttitor.”</p>
                           <h3 className="CircularStdBold text-[30px] pt-5">Brian Mohr</h3>
                           <p className="text-[#434343] text-[20px]">Co-founder of Y Scouts</p>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        )
    );
};

export default Testimonials;
