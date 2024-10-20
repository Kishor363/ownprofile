import Card from 'react-bootstrap/Card';
const Experience=()=>{
    return(
        <>
        <div className="main-container bg-gray-100 shadow-lg">
            <h1 className="text-bold underline text-center mt-2">My Experience</h1>

            <div className="flex space-x-5 px-10 mt-10">
            <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body >
        <Card.Title>GlobalLogic (11/2023) - (Present)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Software Engineer</Card.Subtitle>
        <Card.Text>
        At Global Logic, I contributed to the Health Hub project, focusing on the development and enhancement of a comprehensive healthcare platform. <b>My role involved:</b><br/>

<b>Collaborative Development:</b> Worked closely with cross-functional teams, including UX/UI designers and backend developers, to create a user-friendly interface and robust functionality.<br/>

<b>Feature Implementation:</b>  Played a key role in implementing critical features aimed at improving patient engagement and streamlining healthcare services.<br/>

<b>Performance Optimization:</b> Conducted performance analysis and optimization, ensuring the platform met high standards of speed and reliability.<br/>

<b>Quality Assurance:</b> Engaged in thorough testing processes to maintain high software quality and address any issues promptly.
        </Card.Text>
        <Card.Link href="https://www.globallogic.com/">GlobalLogic</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body>
        <Card.Title>Nagarro Software Pvt. Ltd. (05/2022) - (10/2023)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Associate Software Engineer</Card.Subtitle>
        <Card.Text>
        During my tenure at Nagarro, I was actively involved in an insurance project, where I contributed to the development and implementation of solutions aimed at improving client services and operational efficiency . <b>My key responsibilities included:</b><br/>
        <b>Development:</b> Designed and developed scalable Java backend solutions with Spring Boot to
enhance performance and reliability. <br/>
<b>Optimized Database Integration :</b> Enhanced database integration with MySQL by optimizing schemas and conducting
rigorous code reviews, resulting in a High performance improvement. <br/>
<b>Enhanced User Experience:</b> Implemented advanced algorithms and fostered cross-functional collaboration with
frontend and QA teams, ensuring seamless user experiences and maintaining high
software quality standards.
        </Card.Text>
        <Card.Link href="https://www.nagarro.com/en">Nagarro</Card.Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body>
        <Card.Title>Rapit Technology Services (12/2020) - (04/2022)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Associate Software Engineer</Card.Subtitle>
        <Card.Text>
        At Rapid Technology, I contributed to the Human Resource Management Operating System (HRM OS) project, collaborating with cross-functional teams to enhance employee management and operational efficiency. <b>My key responsibilities included:</b><br/>

<b>Requirements Analysis:</b> Collaborated with stakeholders to gather and align project requirements.<br/>
<b>System Design:</b> Assisted in architectural design, prioritizing user experience.<br/>
<b>Development:</b> Developed key system components using Java with Spring Boot , Microservices,Hibernate and MySQL<br/>
<b>Testing and QA:</b> Conducted testing and debugging to ensure system reliability.<br/>
<b>User Support:</b> Facilitated training sessions and provided ongoing user support.<br/>
        </Card.Text>
        <Card.Link href="https://rapitl.com/">Rapit Technology</Card.Link>
      </Card.Body>
    </Card>


            </div>


        </div>
        
        
        </>
    )
}
export default Experience;