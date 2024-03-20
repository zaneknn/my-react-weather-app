import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/zaneknn" target="_blank" rel="noreferrer">
            Zane Jakuseva
          </a>{" "}
          is open-sourced on{" "}
          <a
            href="https://github.com/zaneknn/my-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://musical-cactus-e800bf.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
