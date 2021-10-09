import BookARoom from "./BookARoom";
import bgImage from "../Images/homePageImage.jpg";
const HomePage = () => {
  return (
    <div className="container">
      <div className="page-text">
        <h1>Ferofly</h1>
        <p>--Magnify your Journey--</p>
      </div>
      <div
        className="img-container"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <BookARoom />
    </div>
  );
};
export default HomePage;
