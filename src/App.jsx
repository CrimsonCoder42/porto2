// Importing styled-components for styled components.
import styled from "styled-components";
// Importing individual components to be rendered within the App component.
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";

// Container styled-component with specific styling properties.
// It's designed to have scroll-snap, smooth behavior, and custom styling.
const Container = styled.div`
  height: 100vh; // Sets the height of the container to 100% of the viewport height.
  scroll-snap-type: y mandatory; // Enables vertical scroll snapping.
  scroll-behavior: smooth; // Makes the scrolling smoothly.
  overflow-y: auto; // Allows vertical scrolling.
  scrollbar-width: none; // Hides the scrollbar for Firefox.
  color: white; // Sets the text color to white.
  background: url("./img/bg.jpeg"); // Sets a background image.
  
  &::-webkit-scrollbar{
    display: none; // Hides the scrollbar for Chrome, Safari and newer versions of Opera.
  }
`;

// Main functional component App which renders the whole application.
function App() {
  // Rendering individual components inside the Container component.
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
    </Container>
  );
}

// Exporting App component to be used in other parts of the application.
export default App;

