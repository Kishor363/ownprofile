//import BannerBaground from '../assets/banner_wallpaper.svg'
const Skills=()=>{
    return(
        <>
        <div className= "box-container my-14">
            <h1 className="font-bold underline text-center text-5xl">My Skills</h1>

            <div className="flex gap-3 p-3 py-10 w-full">
            <div
                style={{
                    //backgroundImage: `url(${BannerBaground})`,
                    background: "linear-gradient(135deg, rgba(211, 211, 211, 1), rgba(192, 192, 192, 1))", // Gradient background
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    width: "100%", // Ensure it takes full width
                    borderRadius: "20px", // Adjust the radius to your preference
                    padding: "20px", // Optional: add some padding for better appearance
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)", // Shadow effect
                }}
                className="text-center flex justify-center items-center "
            >
                <h1 className="text-4xl text-white ">I Have experience in these technologies</h1>
            </div>
        

                
                <div className="flex justify-center text-center">
                    <div className="flex space-x-3 flex-wrap space-y-3 ">
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Core Java</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Advance Java</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">JDBC</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Servlet</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Jsp</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Spring Boot</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Spring MVC</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Spring security</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Spring Betch</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Spring Data JPA</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Microservices</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Hibernate</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">MySQL</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">MongoDB</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">HTML</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">CSS</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">JavaScriptava</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">React js</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Junit</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Jenkins</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Git</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Log4j</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">Kafka</p>
                    <p className="bg-gray-300 w-fit px-3 py-3 rounded-full transition-transform duration-300 ease-in-out transform hover:scale-110">DSA</p>
                    </div>
                </div>
            </div>


        </div>
        
        </>
    )
}
export default Skills;