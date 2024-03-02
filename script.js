gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 

  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();



let lt = gsap.timeline()
lt.from(".line h1,#box",{
  y:100,
  stagger:.2,
  duration:.6,
  delay:.5,
  onStart: function(){
    let h5time = document.querySelector("#box h5")
    let count=0;
    setInterval(function(){
      if(count<=100){
        h5time.innerHTML = count++
      }
    },30)
  }
})



lt.to("#loader",{
  opacity:0,
  duration:.4,
  delay:2.5,
  top:-1000,  
})