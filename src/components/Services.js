const Services=()=>{
    return(
        <>
        <div className="main-container">
            <h1 className="text-bold underline text-center mt-2">My Services</h1>

            <div className="flex space-x-5 px-10 mt-10">
                <div  className="col-md-4 curser-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center space-y-3 rounded-xl">
                <i class="text-5xl fa-brands fa-react"></i>
                    <h1>Web Development</h1>
                    <p>I have created web applications using HTML, CSS, JavaScript, and React.js.

Using HTML, I structured the pages to define elements like headings, paragraphs, and links. I applied CSS to style the applications, ensuring a visually appealing layout with customized colors and fonts. JavaScript was used to add interactivity, enhancing user experience through dynamic features. Finally, I utilized React.js to build reusable components and manage application state efficiently, allowing for smooth and responsive user interfaces. This combination of technologies enabled me to develop engaging and functional web applications.</p>
                </div>
                <div className="col-md-4 curser-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center space-y-3 rounded-xl">
                <i class="text-5xl fa-brands fa-java"></i>
                <h1>Backend Development</h1>
                <p>
                I have developed applications using Java, Spring Boot, Microservices, and Hibernate.

Using Java as the core programming language, I implemented business logic and functionality. Spring Boot enabled me to create standalone, production-ready applications with minimal configuration. I utilized a microservices architecture to build scalable and maintainable systems, allowing different services to operate independently. Additionally, I employed Hibernate for efficient data handling and ORM (Object-Relational Mapping), streamlining database interactions. This combination of technologies allowed me to create robust and efficient applications tailored to specific business needs.
                </p>
                </div>
                <div className="col-md-4 curser-pointer hover:bg-gray-100 shadow-lg bg-slate-200 p-5 text-center space-y-3 rounded-xl">
                <i class="text-5xl fa-solid fa-database"></i>
                <h1>Database Design</h1>
                <p>
                I have designed the database for my project, ensuring it effectively supports the application’s requirements. I carefully structured the schema to optimize data storage and retrieval, utilizing relationships between tables to maintain data integrity. By implementing appropriate indexing and normalization techniques, I enhanced query performance and reduced redundancy. This thoughtful database design played a crucial role in the overall functionality and efficiency of the application.
                </p>
                </div>


            </div>


        </div>
        
        
        </>

    )
}
export default Services;