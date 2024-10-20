import Button from 'react-bootstrap/Button';
import BannerImage from '../assets/IMG_7892.svg'
import BannerBaground from '../assets/banner_wallpaper.svg'
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { scroller } from 'react-scroll';
const Banner=()=>{

    const el = useRef(null);

    useEffect(() => {
      const typed = new Typed(el.current, {
        strings: ["Java FullStack Developer"], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        loop:true
      });
  
      // Destropying
      return () => {
        typed.destroy();
      };
    }, []);


    return(
        <div  style={
            {
                backgroundImage:`url(${BannerBaground})`,
                backgroundSize:"cover"
            }
        }  className="main-container flex items-center bg mt-8">
            <div className=" w-full flex justify-center text-white">
                <div className="w-2/3">

                <h3>Hi, I am</h3>
                <h1>Kishor Mohanty</h1>
                <h2>I am a <span ref={el}></span></h2>
                <p>Highly skilled Java developer with 3.6 years of experience with a proven track record of designing,
implementing, and maintaining robust and scalable applications using Java and its associated
frameworks . Adept at collaborating with cross-functional teams to analyze requirements, identify
opportunities for process improvements, and deliver high-quality solutions within established
timelines. Possess a deep understanding of Java development best practices, object-oriented
programming, and design patterns. Strong expertise in frameworks such as Spring and
Hibernate, with a focus on creating efficient and maintainable code. Committed to staying current
with industry trends and continuously enhancing skills to deliver innovative and effective
solutions. Excellent communication and problem-solving abilities contribute to successful project
outcomes.</p>
<div className="flex space-x-5">
<a  href="https://www.facebook.com/profile.php?id=100004681215468" 
  target="_blank"  className="hover:bg-orange-600 border cursor-pointer animate-spin">
<i  class="fa-brands text-4xl fa-facebook"></i>
</a>
<a href="https://www.instagram.com/mk_kishor_2.0?igsh=ZnhuM2g5ZXEzdGY3&utm_source=qr8" 
  target="_blank" className="hover:bg-white-600 cursor-pointer animate-spin">
<i class="fa-brands text-4xl fa-instagram"></i>
</a>  
<a href="https://www.linkedin.com/in/kishor--mohanty/" className="hover:bg-orange-600 border cursor-pointer animate-spin">
<i class="fa-brands text-4xl fa-linkedin"></i>
</a>
<a href="https://github.com/Kishor363" className="hover:bg-white-600  cursor-pointer animate-spin">
<i class="fa-brands text-4xl fa-square-github"></i>
</a>
</div><br></br>
<Button variant="outline-warning" onClick={() => scroller.scrollTo('contact')}>Contact Me</Button>
                </div>


            </div>


            <div className="  w-full flex justify-center">
                <img className="rounded-full shadow w-fit" src={BannerImage}/>
                
            </div>
            
            
            
            
            
            </div>
        
    )
}
export default Banner;