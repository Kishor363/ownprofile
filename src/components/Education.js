import Card from 'react-bootstrap/Card';
const Education=()=>{
    return(
        <>
         <div className="main-container bg-gray-100 shadow-lg mt-3">
            <h1 className="text-bold underline text-center mt-2">My Qualification</h1>

            <div className="flex space-x-5 px-10 mt-10">
            <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body >
        <Card.Title>10th- (2012)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Board Of Secondary Education , Odisha</Card.Subtitle>
        <Card.Text>
        Bagudi High School Bagudi
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body>
        <Card.Title>12th- (2014)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Council of Higher Secondary Education , Odisha</Card.Subtitle>
        <Card.Text>
        Saheed Mahavidyalaya , Barapur
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }} className="flex-1">
      <Card.Body>
        <Card.Title>Bachelor of Science (Chemistry) - (2017)</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Fakir Mohan University , Balasore </Card.Subtitle>
        <Card.Text>
       
        </Card.Text>
      </Card.Body>
    </Card>


            </div>


        </div>
        
        </>

    )
}
export default Education;