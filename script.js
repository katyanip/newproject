function revealToSpan(){
    document.querySelectorAll(".reveal")
.forEach(function(elem){
        let parent= document.createElement("span");
        let child= document.createElement("span");

        parent.classList.add("parent");
        child.classList.add("child");

        child.innerHTML= elem.innerHTML;
        parent.appendChild(child);

        elem.innerHTML="";
        elem.appendChild(parent);
});
}
function sett(){
    gsap.set("#nav a",{y:"-100%", opacity: 0});
    gsap.set(".down",{y: "100%", opacity: 0})
    gsap.set("#home .roww img", {opacity: 0})

}
sett();
revealToSpan();

var t1= gsap.timeline();
var t2= gsap.timeline();

t1
.from("#loader .child span", {
    x: 100,
    duration: 1.4,
    stagger: .2,
    ease: Power3.easeInOut
})

.to("#loader .parent .child", {
    y:"-100%",
    duration: 1,
    ease: Circ.easeInOut
})

.to("#loader", {
    height: 0,
    duration: 1,
    
    ease: Circ.easeInOut
})
.to("#green", {
    height: "100%",
    delay:-1,
    duration: 1 ,
    ease: Circ.easeInOut
})
.to("#white", {
    height: "100%",
    delay:-.6,
    duration: 1,
    ease: Circ.easeInOut,
    onComplete: function(){
        animatehp()
    }
});
function animatehp(){
   
    var tl=gsap.timeline();
    tl
    .to("#nav a",{
        y :0,
        opacity: 1,
        stagger: .05,
        ease: Expo.easeInOut
    })

    .to(".down",{
        y :0,
        duration: 1,
        opacity: 1,
        stagger: .1,
        ease: Circ.easeInOut,
    })
     .to("#home .roww img",{

        opacity: 1,
    
    })

}



