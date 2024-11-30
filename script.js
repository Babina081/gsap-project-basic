gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  backgroundColor: "yellow",
  borderRadius: "50%",
  // scale:0.5,
  scale: -1,
});
gsap.from("#box2", {
  x: 500,
  y: 500,
  duration: 2,
  delay: 1,
});

gsap.from("h1", {
  color: "red",
  duration: 2,
  delay: 1,
  opacity: 0,
  y: 20,
  // stagger:-1
  stagger: 1,
});
gsap.to("#box", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%",
});

// timeline
// tranditional
// gsap.to('#tlbox1',{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })
// gsap.to('#tlbox2',{
//     x:1500,
//     backgroundColor:'yellow',
//     rotate:360,
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to('#tlbox3',{
//     x:1500,
//     backgroundColor:'yellow',
//     rotate:360,
//     duration:1.5,
//     delay:4,
//     borderRadius:'50%'
// })

//alternative of above delay issue
var timeline = gsap.timeline();
timeline
  .to("#tlbox1", {
    x: 1500,
    rotate: 360,
    duration: 1.5,
    delay: 1,
  })
  .to("#tlbox2", {
    x: 1500,
    backgroundColor: "yellow",
    duration: 1.5,
  })
  .to("#tlbox3", {
    x: 1500,
    borderRadius: "50%",
    duration: 1.5,
  });

var navtl = gsap.timeline();
navtl
  .from("#nav h2", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: 0.5,
  })
  .from("h4", {
    y: -30,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
  })
  .from(".pokhara", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2,
    // repeat:-1
  });
