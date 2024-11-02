import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.js";
import Article from "./components/Article.js";
import CustomFigure from "./components/Figure.js";
import CustomFooter from "./components/Footer.js";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Article customheading="Passport" custompara="Uploading custom Picture" />
      <hr />
      <CustomFigure />
      <hr />
      <a
        href={process.env.PUBLIC_URL + "/mrz-scanner-master/dist/index.html"}
        style={{ fontSize: "x-large" }}
      >
        <strong>Passport input </strong>
      </a>
      <hr />
      <CustomFooter
        name="Shivansh Pachauri   "
        email="shivanshpachauri00@gmail.com   "
      />
    </div>
  );
}

export default App;
