import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>BMI Calculator</h1>
      <div className="BMI-Calculator-Card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          <h2>How to calculate Body Mass Index (BMI) </h2>
          BMI is a straightforward process that involves using an individual's
          height and weight. To compute BMI, you can utilize the formula BMI =
          kg/m^2, where 'kg' signifies the person's weight in kilograms, and
          'm^2' represents their height in meters squared. BMI values within the
          range of 18.5 to 24.9 are indicative of a healthy weight, while a BMI
          of 25.0 or higher suggests being overweight. It's essential to note
          that BMI is typically applicable to adults aged 18 to 65 years.
        </p>
      </div>
    </>
  );
}

export default App;
