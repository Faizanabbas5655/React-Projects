import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import InputForm from "./assets/components/InputForm";
import { useState } from "react";
import ErrorMessage from "./assets/components/ErrorMessage";
import IsPalindrome from "./assets/components/IsPalindrome";
import NotPalindrome from "./assets/components/NotPalindrome";

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="card container" style={{ width: "18rem" }}>
      <div className="card-body">
        <Header></Header>
        <InputForm setValue={setValue}></InputForm>
        {value == 0 && <ErrorMessage />}
        {value == 1 && <IsPalindrome />}
        {value == 2 && <NotPalindrome />}
      </div>
    </div>
  );
}

export default App;
