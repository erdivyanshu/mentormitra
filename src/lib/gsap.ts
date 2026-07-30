import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let registered = false;

export const registerGsapPlugins = (): void => {
  if (registered) return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
};

registerGsapPlugins();

export { gsap, ScrollTrigger };
