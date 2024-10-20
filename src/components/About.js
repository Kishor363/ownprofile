import BannerImage from "../assets/Mediamodifier-Design.svg"
const About=()=>{
    return (
        <>
        <div className="main-container py-16 bg-gray-30">
            <h1 className="text-4xl text-center underline font-bold"> About Me</h1>
            <div className="flex gap-3">
                <div className="w-50 h-50 ">
                    <img className="rounded-full  shadow w-fit" src={BannerImage} />

                </div>
                <div className="text-4xl py-16 w-50 h-50 ">
                    <h1>Java FullStack Developer</h1><br/><br/>
                    <h6>My name is Kishor Mohanty, and I am from Odisha. I am currently working at GlobalLogic as a Java backend developer, with 3.6 years of experience in building and maintaining server-side applications. I have experience in designing RESTful APIs, integrating databases, and ensuring the security and performance of backend systems.<br/><br/>

Regarding my technical skills, I have experience in Spring Boot, Spring MVC, microservices, and ORM technologies such as Spring Data JPA and Hibernate. I am also proficient in database technologies including MySQL, Oracle, and NoSQL databases like MongoDB. On the frontend, I have knowledge of HTML, CSS, JavaScript, and React.js, as well as version control technologies like Git and Jenkins for building CI/CD pipelines.<br/><br/>

As for my education, I Have completed my B.Sc. from F.M. University, Balasore, Odisha.<br/><br/>

I am passionate about continuous learning and always eager to explore new technologies and tools to enhance my skills.<br/><br/>

I come from a nuclear family and live with my parents. In my free time, I enjoy traveling and focusing on fitness.</h6>

                </div>
            </div>
        </div>
        </>
    )
}
export default About;