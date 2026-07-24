import foodStill from "../assets/projects/FOOD/stills/food_still-ss.png";
import foodDesktop from "../assets/projects/FOOD/food-desktop1.mp4";
import foodMobile from "../assets/projects/FOOD/food-mobile1.mp4";

import winSonStill from "../assets/projects/WinSon/stills/winson_ss.png";
import winSonDesktop from "../assets/projects/WinSon/winson-desktop.mp4";
import winSonMobile from "../assets/projects/WinSon/winson-mobile.mp4";

import sinclairStill from "../assets/projects/Sinclair.Global/stills/sinclair_ss.png";
import sinclairVideo from "../assets/projects/Sinclair.Global/sinclair-global.mp4";

export const PROJECTS = [
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
    subtitle: "Refreshed UI system for desktop and mobile for NYC based Taiwanese Restaurant using Figma.",
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
