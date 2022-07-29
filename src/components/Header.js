import React from "react";
import AddButton from "./AddButton";
import LogInLogOut from "./LogInLogOut";

function Header() {
  return (
    <header>
      <nav className="mystore-app__header">
        <h1>Product List</h1>
        <AddButton />
        <LogInLogOut />
      </nav>
    </header>
  );
}

export default Header;
