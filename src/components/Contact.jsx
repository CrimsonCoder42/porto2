// Importing necessary React hooks and third-party modules
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"; // For sending emails directly from JavaScript
import styled from "styled-components"; // For creating styled components
import Map from "./Map"; // Importing the Map component

// Main section container with defined styles
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

// Parent container for layout styling
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

// Styling for the left section of the contact form
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  // Adjustments for smaller screen sizes
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

// Title styling for the contact form
const Title = styled.h1`
  font-weight: 200;
`;

// Styling for the form element itself
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  // Adjustments for smaller screen sizes
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

// Input fields styling
const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

// Textarea styling for message input
const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

// Submit button styling
const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

// Right section styling which contains the map, hidden on smaller screens
const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

// Main Contact component
const Contact = () => {
  const ref = useRef(); // Ref for accessing the form DOM element
  const [success, setSuccess] = useState(null); // State to track the success/failure of email sending

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Using emailjs to send email
    emailjs
      .sendForm(
        "service_id", // Replace with your service ID
        "template_id", // Replace with your template ID
        ref.current,   // Passing the form element
        "public_key"   // Replace with your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true); // If successful, set the success state to true
        },
        (error) => {
          console.log(error.text);
          setSuccess(false); // If an error occurs, set the success state to false
        }
      );
  };

  // Rendering the JSX
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
          <Map /> {/* Render the Map component */}
        </Right>
      </Container>
    </Section>
  );
};

// Exporting the Contact component for use in other parts of the application
export default Contact;
