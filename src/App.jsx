import { useState } from "react";

import foodStill from "./assets/projects/FOOD/stills/food_still-ss.png";
import foodDesktop from "./assets/projects/FOOD/food-desktop1.mp4";
import foodMobile from "./assets/projects/FOOD/food-mobile1.mp4";

import winSonStill from "./assets/projects/WinSon/stills/winson_ss.png";
import winSonDesktop from "./assets/projects/WinSon/winson-desktop.mp4";
import winSonMobile from "./assets/projects/WinSon/winson-mobile.mp4";

import sinclairStill from "./assets/projects/Sinclair.Global/stills/sinclair_ss.png"; 
import sinclairVideo from "./assets/projects/Sinclair.Global/sinclair-global.mp4";

/*
const PROJECTS = [

    {
    id: "foodetcfood",
    title: "foodetcfood",
    subtitle: "Shopify storefront refresh for a small chapbook publication.",
    stillImage: foodStill,
    previewVideo: foodDesktop,
    detailVideos: [foodDesktop, foodMobile], // BOTH videos display inside the project page!
    description: "An intentional, gallery-inspired digital environment for an independent print publication. By prioritizing expansive whitespace and minimal typographic hierarchy, the interface frames each physical chapbook as a piece of art. The refresh focuses on seamless, tactile media interactions that mimic the experience of flipping through a printed edition in a physical gallery space."
    },

    {
    id: "winson",
    title: "Win Son",
    subtitle: "Refreshed UI system for desktop and mobile for Win Son using Figma.",
    stillImage: winSonStill,
    previewVideo: winSonDesktop, // First video plays on hover
    detailVideos: [winSonDesktop, winSonMobile], // BOTH videos display inside the project page!
    description: "A complete responsive design refresh for Win Son. Designed a unified user interface system across both desktop and mobile layouts to streamline online ordering, elevate brand typography, and preserve the iconic restaurant and bakery aesthetic."
  },

  {
   id: "sinclair",
    title: "Sinclair Global",
    subtitle: "Frontend web development using Shopify for NYC based streetwear brand.",
    stillImage: sinclairStill,
    previewVideo: sinclairVideo, // The video used for the landing page hover
    detailVideos: [sinclairVideo], // The video(s) shown once clicked into
    description: "A comprehensive frontend development overhaul for Sinclair Global. Focused on building a highly customized, lightning-fast Shopify storefront optimized for high-volume streetwear drops, seamless inventory tracking, and a pristine editorial user experience."
  },

];
*/




function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen flex flex-col p-8 md:p-12 text-[#111111] antialiased">
      
      {/* NAVIGATION */}
      <nav className="text-sm font-normal">
        <ul className="flex flex-wrap gap-x-2 gap-y-1 p-0 m-0 text-black">
          <li>
            <button 
              onClick={() => setActiveSection('home')} 
              className={`no-underline hover:underline ${activeSection === 'home' ? 'italic' : ''}`}
            >
              Home
            </button>,
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('about')} 
              className={`no-underline hover:underline ${activeSection === 'about' ? 'italic' : ''}`}
            >
              About
            </button>,
          </li>
          <li>
            <button 
              onClick={() => setActiveSection('work')} 
              className={`no-underline hover:underline ${activeSection === 'work' ? 'italic' : ''}`}
            >
              Work
            </button>,
          </li>
          <li>
            <a href="mailto:camille.elliott14@gmail.com" className="no-underline hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* DYNAMIC CONTENT AREA */}
      <main className="flex-grow flex flex-col items-center mt-16">
        
        {/* HOME CONTENT */}
        {activeSection === 'home' && (
          <>
            <h1 className="text-3xl md:text-4xl font-normal tracking-tight">
              Camille Elliott
            </h1>
            <p className="text-sm md:text-base text-neutral-800 leading-relaxed">
              Frontend web developer and UI designer based in Brooklyn, NY.
            </p>
            <p></p>
          </>
        )}

        {/* ABOUT CONTENT */}
        {activeSection === 'about' && (
          <section id="about" className="mt-24 scroll-mt-20">
            <h2 className="text-sm font-normal mb-6 text-neutral-500 uppercase tracking-widest">About</h2>
            <div className="space-y-4 text-neutral-800 leading-relaxed max-w-2xl">
              <p>
                Frontend web developer and UI designer with a background in Design and Technology from Parsons School of Design. 
                I specialize in crafting intuitive, accessible interfaces that blend technical precision with thoughtful design.
              </p>
              <p>
                When I'm not in the code editor, you can usually find me baking, practicing yoga, or writing. 
                I believe these creative outlets help fuel the problem-solving and focus I bring to my web development projects.
              </p>
            </div>
          </section>
        )}

        {/* WORK CONTENT */}
        {activeSection === 'work' && (
          <section id="work" className="mt-24 scroll-mt-20">
            <h2 className="text-sm font-normal mb-6 text-neutral-500 uppercase tracking-widest">Work</h2>
            {/* Project components will be added here */}
          </section>
        )}
      </main>
    </div>  
  );
}

export default App;