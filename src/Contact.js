import React, { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom";


const UserContext = createContext();

function  Contact() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Services />
    </UserContext.Provider>
  );
}

function Services() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Transaction </h1>
      <h2>{`This is  ${user} !`}</h2>
    </>
  );
}
const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<Services />);

export default Contact;