import React,{useState} from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'


function Contact(){
    function TextControlsExample() {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: '',
          });
          
          const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData((prevData) => ({ ...prevData, [name]: value }));
          };

          const handleSubmit = (event) => {
            event.preventDefault();

            console.log('Form submitted:', formData);

            setFormData({
                name: '',
                email: '',
                message: '',
              });
            };
        
        return (
          <Form onSubmit={handleSubmit} className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="string" 
              placeholder="Joe" 
              name="name" 
              value={formData.name} 
              onChange={handleInputChange} 
              required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" 
              placeholder="name@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" 
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required />
            </Form.Group>
            <Button className="button" as="input" type="submit" value="Submit" />
          </Form>
        );
      }
      function AutoLayoutExample() {
        return (
          <Container className="container">
            <Row className="row">
              <Col className="col1"><span>Contact</span> :<br/> 8939704091</Col>
              <Col className="col2"><span>Email</span> :<br/> jawinrozo@gmail.com</Col>
              <Col className="col3"><span>Address</span> :<br/> D401,<br/>LANCOR Central Park East,<br/>
                Sholinganallur,<br/>
                Chennai.<br/>
                600119.</Col>
            </Row>
          </Container>
        );
      }
    return(
        <>
        <div className="whole">
            <h1>Contact_</h1>
            <div className="cen">
            <span>Let's Connect</span>
            <TextControlsExample />
            <title pageTitile = 'About Us'></title>
            </div>   
            <div className="con">
            <AutoLayoutExample/>
            </div>
            <div className="social">
                <span>Getting in touch is easy!</span>
                <div className="logo">
                    <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
                    <FontAwesomeIcon className="insta" icon={faInstagram} />
                    <FontAwesomeIcon className="x" icon={faXTwitter} />
                    <FontAwesomeIcon className="facebook" icon={faFacebookMessenger} />
                </div>
            </div>
      
        </div>
        </>
    )
}

export default Contact

