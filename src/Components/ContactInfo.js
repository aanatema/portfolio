import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../index.css";

function ContactInfo() {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();

    emailjs.sendForm(
        "service_39lsro9",
        "template_8i7nqj7",
        form.current,
        "Q-vLiAGXssjwGb0gX"
      ).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      //permet de refresh le formulaire une fois celui ci envoyé
      //onClick sur le bouton ne marche pas, il efface les données avant qu'elles aient pu être envoyées
      form.current.reset()
  };
  return (
    <Container>
      <h1 md={6} lg={6} className="mt-5 mb-3">
        Envie d'échanger ? Laissez moi message !
      </h1>
      <Form ref={form} onSubmit={sendEmail}>
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
                name="user_nom"
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
                name="user_prenom"
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
              name="user_email"
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
              name="user_tel"
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
              name="user_message"
              style={{ height: "200px" }}
              as="textarea"
              placeholder="Leave a comment here"
            />
            <Form.Control.Feedback type="invalid">
              N'oubliez pas d'entrer votre message.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Row>
        <Button className="mt-4" type="submit" value="Send" variant="warning">
          Envoyer
        </Button>
      </Form>
    </Container>
  
  );
}
export default ContactInfo;
