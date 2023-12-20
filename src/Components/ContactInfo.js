import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import "../index.css";

function ContactInfo() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container>
      <h1 md={6} lg={6}className="mt-5 mb-3">Envie d'échanger ? Laissez moi message !</h1>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mt-5 g-2">
          <Col md>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Nom"
              className="contact_infos mb-3"
            >
              <Form.Control
                required
                type="text"
                className="contact_infos"
                as="textarea"
                placeholder="Leave a comment here"
              />
               <Form.Control.Feedback type="invalid">
               Veuillez vérifier votre nom.
          </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col md>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Prénom"
              className="contact_infos mb-3"
            >
              <Form.Control
                required
                type="text"
                className="contact_infos"
                as="textarea"
                placeholder="Leave a comment here"
              />
               <Form.Control.Feedback type="invalid">
               Veuillez vérifier votre prénom.
          </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <FloatingLabel
            controlId="floatingInput"
            label="Adresse mail"
            className="contact_infos mt-2 mb-3"
          >
            <Form.Control
              required
              className="contact_infos"
              type="email"
              placeholder="name@example.com"
            />
             <Form.Control.Feedback type="invalid">
            Veuillez vérifier votre adresse mail.
          </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel
              controlId="floatingTextarea"
              label="Numéro de téléphone"
              className="contact_infos mb-3"
            >
              <Form.Control
                type="text"
                className="contact_infos"
                as="textarea"
                placeholder="0612345678"
              />
              <Form.Control.Feedback type="invalid">
            Veuillez vérifier votre numéro de téléphone
          </Form.Control.Feedback>
            </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Votre message"
            className="contact_infos mb-3"
          >
            <Form.Control
              required
              type="tel"
              className="contact_infos"
              style={{ height: "200px" }}
              as="textarea"
              placeholder="Leave a comment here"
            />
             <Form.Control.Feedback type="invalid">
            N'oubliez pas d'entrer votre message.
          </Form.Control.Feedback>
          </FloatingLabel>
        </Row>
        <Button className="submit_btn mt-4" type="submit">
          Envoyer
        </Button>
      </Form>
    </Container>
  );
}
export default ContactInfo;
