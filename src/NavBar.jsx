import React from "react";

const NavBar = () => {
  return (
    <nav className=" shadow-md">
      <div className="max-w-4xl mx-auto flex items-center gap-3">
        <img
          src="https://img.icons8.com/?size=80&id=LLbsjn55wqEi&format=png"
          alt="logo"
        />
        <h3 className="text-gray-950 font-bold">LIST OF USERS</h3>
      </div>
    </nav>
  );
};

export default NavBar;
