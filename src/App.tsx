import React from "react";
import "./App.css";
import { ContractController } from "./controllers/contract_controller";

function App() {
  return (
    <div className="root">
      <div className="box-title">
        <h1 className="title">The Current Message is :</h1>
      </div>

      <div className="box-inputs">
        <p className="p-new-message">New Message: </p>
        <input
          className="input-field "
          type="text"
          placeholder="Type your message"
        />
      </div>

      <div className="box-btn">
        <button className="btn-set">Set Message</button>
      </div>
    </div>
  );
}

export default App;
