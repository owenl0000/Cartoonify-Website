"use client"
import Image from 'next/image';
import { headers } from '../../next.config';
import '../app/globals.css';
import Slideshow from '../app/Slideshow';
import Header from '../app/Header.js';
import StylesSection from './stylessection';
import TutorialSection from './TutorialSection';
import 'font-awesome/css/font-awesome.min.css';


export default function Home() {
  return (
    <>
      <Header />
      
      <main className="bg-off-white">
        {/* Welcome Section */}
        <div className="relative h-[750px] lg:h-[750px] md:h-[600px] sm:h-[500px]">
          <Slideshow />

          <section className="absolute top-0 left-0 right-0 h-full flex flex-col justify-center items-center text-center p-5">
            <h4 className="font-trend text-[45px] lg:text-[45px] md:text-[35px] sm:text-[30px] text-off-white mb-4 shadow-text" style={{ textShadow: '3px 4px 7px #000' }}>
              Welcome to Cartoonify
            </h4>
            <p className="font-pop-sbold font-semibold text-2xl lg:text-2xl md:text-xl sm:text-lg text-off-white mb-5 shadow-text lg:w-[600px] md:w-[500px] sm:w-[400px]" style={{ textShadow: '3px 4px 7px #000' }}>
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
        <section id="About" className="bg-off-white flex flex-col justify-center items-center h-[80vh] p-8">
          <div className="bg-blue-900 py-12 w-full h-[60vh] rounded-lg overflow-hidden flex flex-col">
            <h4 className="font-trend text-off-white text-5xl text-center mb-10">About</h4>
            <div className="px-8 lg:px-16 xl:px-24 flex-grow overflow-y-auto flex justify-center">
              <div className="max-w-screen-md text-center">
                <p className="font-pop-thin text-off-whitep text-justify text-[23px] mb-[50px] leading-loose">
                  At Cartoonify, we are a group of four highly motivated students from CUNY Tech Prep. Our hackathon project uses AI to transform your favorite images into whimsical, cartoon art. Our goal is to provide our users with a unique and fun way to showcase their photos and memories.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Style Section */}
        <StylesSection/>
        {/* Tutorial Section */}
        <TutorialSection/>

      </main>

      <footer></footer>
    </>
  );
}





