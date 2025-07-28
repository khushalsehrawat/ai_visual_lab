// Make sure GSAP and ScrollTrigger are loaded before this script runs
gsap.registerPlugin(ScrollTrigger);
const track = document.getElementById("workflowTrack");
const totalScroll = track.scrollWidth - window.innerWidth;

gsap.to(track, {
  x: () => `-${totalScroll}px`,
  ease: "none",
  scrollTrigger: {
    trigger: "#workflow",
    start: "top top",
    end: () => `+=${track.scrollWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  }
});
