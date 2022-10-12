import React from "react";
import Contacts from "../contacts.js";
import Cards from "../components/card";

function App() {
  return (
    <div>
      <h1 className="heading">Contacts</h1>
      <Cards
        name={Contacts[0].name}
        url={Contacts[0].imgURL}
        phone={Contacts[0].phone}
        email={Contacts[0].email}
      />
      <Cards
        name={Contacts[1].name}
        url={Contacts[1].imgURL}
        phone={Contacts[1].phone}
        email={Contacts[1].email}
      />
    </div>
  );
}

export default App;
