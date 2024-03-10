import React, { useState, useEffect } from "react";
import { ContractController } from "./controllers/contract_controller";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const contract = await new ContractController().connectToContract();
      const message = await contract.getMessage();
      setMessage(message);
    };
    fetchData();
  }, []);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    const contract = await new ContractController().connectToContract();
    const transaction = await contract.setMessage(newMessage);
    await transaction.wait();
    const updatedMessage = await contract.getMessage();
    setMessage(updatedMessage);
    setNewMessage("");
  };

  return (
    <div className="root">
      <div className="box-title">
        <h1 className="title">The Current Message is : {message}</h1>
      </div>

      <div className="box-inputs">
        <p className="p-new-message">New Message: </p>
        <input
          className="input-field "
          type="text"
          placeholder="Type your message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          required
        />
      </div>

      <div className="box-btn">
        <button onClick={handleFormSubmit} className="btn-set">
          Set Message
        </button>
      </div>
    </div>
  );
};

export default App;
