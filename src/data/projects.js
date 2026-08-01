import foodStill from "../assets/projects/FOOD/stills/food_still-ss.png";
import foodDesktop from "../assets/projects/FOOD/food-desktop1.mp4";
import foodMobile from "../assets/projects/FOOD/food-mobile1.mp4";

import winSonStill from "../assets/projects/WinSon/stills/winson_ss.png";
import winSonDesktop from "../assets/projects/WinSon/winson-desktop.mp4";
import winSonMobile from "../assets/projects/WinSon/winson-mobile.mp4";

import sinclairStill from "../assets/projects/Sinclair.Global/stills/sinclair_ss.png";
import sinclairVideo from "../assets/projects/Sinclair.Global/sinclair-global.mp4";

import ridingTheJStill from "../assets/projects/riding_the_J/riding_the_J.png";
import ridingTheJSlide1 from "../assets/projects/riding_the_J/slide_1.png";
import ridingTheJSlide2 from "../assets/projects/riding_the_J/slide_2.png";

export const PROJECTS = [
  {
    id: "ridingthej",
    title: "Riding The J",
    subtitle: "Data visualization project exploring real MTA subway data, built during a mentorship with the Data Visualization Society.",
    stillImage: ridingTheJStill,
    liveUrl: "https://spiritualnapper.github.io/Riding_The_J/",
    // No preview video yet — falls back to the still on hover until one is added.
    media: [
      { type: "image", src: ridingTheJSlide1, width: "half" },
      { type: "image", src: ridingTheJSlide2, width: "half" },
      { type: "image", src: ridingTheJStill, width: "full" },
    ],
    description: "Riding The J is an exploration of data visualization. During my mentorship with the Data Visualization Society, my goal was to sharpen my web development skills and build a deeper understanding of how to clean and visualize data using Python and JavaScript. The project takes real MTA subway data and turns it into an interactive visual story, from cleaning and structuring the dataset in Python to bringing it to life on the page with JavaScript."
  },

  {
    id: "foodetcfood",
    title: "foodetcfood",
    subtitle: "Shopify storefront refresh for a small chapbook publication.",
    stillImage: foodStill,
    previewVideo: foodDesktop,
    media: [
      { type: "video", src: foodDesktop, width: "full" },
      { type: "video", src: foodMobile, width: "quarter" },
    ], // BOTH videos display inside the project page!
    description: "An intentional, gallery-inspired digital environment for an independent print publication. By prioritizing expansive whitespace and minimal typographic hierarchy, the interface frames each physical chapbook as a piece of art. The refresh focuses on seamless, tactile media interactions that mimic the experience of flipping through a printed edition in a physical gallery space."
  },

  {
    id: "winson",
    title: "Win Son",
    subtitle: "Refreshed UI system for desktop and mobile for NYC based Taiwanese Restaurant using Figma.",
    stillImage: winSonStill,
    previewVideo: winSonDesktop, // First video plays on hover
    media: [
      { type: "video", src: winSonDesktop, width: "full" },
      { type: "video", src: winSonMobile, width: "quarter" },
    ], // BOTH videos display inside the project page!
    description: "A complete responsive design refresh for Win Son. Designed a unified user interface system across both desktop and mobile layouts to streamline online ordering, elevate brand typography, and preserve the iconic restaurant and bakery aesthetic."
  },

  {
    id: "sinclair",
    title: "Sinclair Global",
    subtitle: "Frontend web development using Shopify for NYC based streetwear brand.",
    stillImage: sinclairStill,
    previewVideo: sinclairVideo, // The video used for the landing page hover
    media: [{ type: "video", src: sinclairVideo, width: "full" }], // The media shown once clicked into
    description: "A comprehensive frontend development overhaul for Sinclair Global. Focused on building a highly customized, lightning-fast Shopify storefront optimized for high-volume streetwear drops, seamless inventory tracking, and a pristine editorial user experience."
  },
];
