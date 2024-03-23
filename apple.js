// import gsap from "https://cdn.skypack.dev/gsap@3.12.0";
// import { ScrollTrigger } from "https://cdn.skypack.dev/gsap@3.12.0/ScrollTrigger";

// if (CSS.supports("animation-timeline: scroll()")) {
//   gsap.registerPlugin(ScrollTrigger);
//   console.clear();
//   const name = document.querySelector("section:nth-of-type(1) svg");
//   gsap.to(name, {
//     scrollTrigger: {
//       trigger: name.parentNode,
//       scrub: true,
//       pin: true,
//       start: "top top",
//       end: "top top-=25%"
//     },
//     keyframes: {
//       "0%": { background: "transparent" },
//       "95%": { background: "transparent" },
//       "100%": { z: "99vh", background: "black", opacity: 0.2 }
//     }
//   });

//   const p = document.querySelector("section:nth-of-type(2) p");
//   gsap
//     .timeline()
//     .set(p, { opacity: 0 })
//     .to(p, {
//       opacity: 1,
//       scrollTrigger: {
//         trigger: p.parentNode,
//         scrub: true,
//         pin: true,
//         start: "top bottom",
//         end: "top 75%"
//       }
//     })
//     .to(video, {
//       opacity: 0,
//       scrollTrigger: {
//         trigger: p.parentNode,
//         scrub: true,
//         pin: true,
//         start: "top -=10%",
//         end: "top -=35%"
//       }
//     });

//   const video = document.querySelector("video");
//   gsap
//     .timeline()
//     .set(video, { opacity: 0 })
//     .to(video, {
//       opacity: 1,
//       scrollTrigger: {
//         trigger: video.parentNode,
//         scrub: true,
//         pin: true,
//         start: "top bottom",
//         end: "top 75%"
//       }
//     })
//     .to(video, {
//       opacity: 0,
//       scrollTrigger: {
//         trigger: video.parentNode,
//         scrub: true,
//         pin: true,
//         start: "top -=10%",
//         end: "top -=35%"
//       }
//     });
// }
