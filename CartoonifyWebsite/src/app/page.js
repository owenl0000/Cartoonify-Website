"use client"
import Image from 'next/image';
import { headers } from '../../next.config';
import '../app/globals.css';
import Slideshow from '../app/Slideshow';
import Header from '../app/Header.js';
import StylesSection from './stylessection';


export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-off-white">
        {/* Welcome Section */}
        <div className="relative h-[750px]">
          <Slideshow />
          
          <section className="absolute top-0 left-0 right-0 h-[750px] flex flex-col justify-center items-center text-center p-5">
            <h4 className="font-trend text-[45px] text-off-white mb-4 shadow-text" style={{ textShadow: '3px 4px 7px #000' }}> 
              Welcome to Cartoonify
            </h4>
            <p className="font-pop-sbold font-semibold text-2xl text-off-white mb-5 shadow-text w-[600px]" style={{ textShadow: '3px 4px 7px #000' }}> 
              Transform Your Photos into Playful Cartoons with Cartoonify!
            </p>
            <a
              href="/cartoonize"
              className="font-trend bg-turquoise text-off-white px-6 py-2 rounded-md text-center hover:bg-turquoise-dark inline-block pb-3"
            >
              Cartoonize Images Now
            </a>
          </section>
        </div>
        {/* About Section */}
        <section className="bg-off-white p-12 h-[700px] flex items-center">
          <div className="bg-blue-900 py-12 mx-auto w-full h-full">
            <h4 className="font-trend text-off-white text-5xl text-center mb-10">About</h4>
            <p className="font-pop-thin text-off-whitep text-justify text-[23px] mx-[500px] mb-[50px] leading-loose">
              At Cartoonify, we are a group of four highly motivated students from CUNY Tech Prep. Our hackathon project uses AI to transform your favorite images into whimsical, cartoon art. Our goal is to provide our valued customers with a unique and fun way to showcase their photos and memories.
            </p>
          </div>
        </section>
        {/* Style Section */}
        <StylesSection />


      </main>

      <footer></footer>
    </>
  );
}





