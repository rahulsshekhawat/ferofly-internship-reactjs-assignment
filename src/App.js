import "./styles.css";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { BsChatTextFill } from "react-icons/bs";
import SocialMediaComp from "./Components/SocialMediaComp";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="chat">
        <BsChatTextFill color="white" size="2rem" />
      </div>
      <SocialMediaComp />
      <HomePage />
    </div>
  );
}
