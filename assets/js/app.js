/* ===========================================
   OpsByYash
   Main JavaScript
=========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       Terminal Typing Animation
    ===================================== */

    const terminal = document.getElementById("terminal-text");

    const commands = [

        "$ git clone https://github.com/opsbyyash/devops-project",

        "$ docker build -t myapp .",

        "$ docker run -d myapp",

        "$ terraform init",

        "$ terraform apply",

        "$ kubectl get pods",

        "$ kubectl describe pod nginx",

        "$ kubectl logs deployment/backend",

        "$ helm install monitoring prometheus",

        "$ argocd app sync production",

        "$ aws eks update-kubeconfig",

        "$ kubectl get ingress",

        "✔ Deployment Successful 🚀"

    ];

    let commandIndex = 0;
    let charIndex = 0;

    function typeTerminal() {

        if (!terminal) return;

        if (charIndex < commands[commandIndex].length) {

            terminal.innerHTML += commands[commandIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typeTerminal, 35);

        } else {

            terminal.innerHTML += "<br>";

            commandIndex++;

            charIndex = 0;

            if (commandIndex < commands.length) {

                setTimeout(typeTerminal, 600);

            } else {

                setTimeout(() => {

                    terminal.innerHTML = "";

                    commandIndex = 0;

                    typeTerminal();

                }, 3000);

            }

        }

    }

    typeTerminal();




    /* =====================================
       Counter Animation
    ===================================== */

    const counters = document.querySelectorAll(".stat-card h2");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                animateCounters();

                observer.disconnect();

            }

        });

    });

    if(counters.length){

        observer.observe(counters[0]);
    }

    function animateCounters(){

        counters.forEach(counter=>{

            const original = counter.innerText;

            const number = parseInt(original);

            if(isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(number/40);

            const interval = setInterval(()=>{

                current += increment;

                if(current >= number){

                    counter.innerText = original;

                    clearInterval(interval);

                }else{

                    counter.innerText = current + "+";

                }

            },40);

        });

    }




    /* =====================================
       Navbar Shadow
    ===================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 50){

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.35)";

        }else{

            header.style.boxShadow="none";

        }

    });




    /* =====================================
       Reveal Animation
    ===================================== */

    const reveals = document.querySelectorAll(".card,.stat-card,.terminal");

    const revealObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";

                entry.target.style.transform="translateY(0px)";

            }

        });

    },{
        threshold:0.15
    });

    reveals.forEach(item=>{

        item.style.opacity="0";

        item.style.transform="translateY(40px)";

        item.style.transition=".7s";

        revealObserver.observe(item);

    });




    /* =====================================
       Floating Profile
    ===================================== */

    const profile = document.querySelector(".profile-card");

    if(profile){

        let direction = 1;

        let position = 0;

        setInterval(()=>{

            position += direction;

            profile.style.transform=`translateY(${position}px)`;

            if(position>12) direction=-1;

            if(position<0) direction=1;

        },40);

    }




    /* =====================================
       Smooth Anchor Scroll
    ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });




    /* =====================================
       Mouse Glow Effect
    ===================================== */

    const glow = document.createElement("div");

    glow.style.position="fixed";
    glow.style.width="300px";
    glow.style.height="300px";
    glow.style.borderRadius="50%";
    glow.style.pointerEvents="none";
    glow.style.background="radial-gradient(circle, rgba(0,200,255,.18), transparent 70%)";
    glow.style.transform="translate(-50%,-50%)";
    glow.style.zIndex="-1";
    glow.style.transition="left .08s linear, top .08s linear";

    document.body.appendChild(glow);

    document.addEventListener("mousemove",(e)=>{

        glow.style.left=e.clientX+"px";
        glow.style.top=e.clientY+"px";

    });

});


/* ===========================
   MOBILE MENU
=========================== */

const hamburger = document.getElementById("hamburger");

const nav = document.getElementById("navMenu");

hamburger.addEventListener("click",()=>{

    nav.classList.toggle("mobile-open");

});
