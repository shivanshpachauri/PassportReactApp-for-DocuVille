import React from "react";

const CustomFooter = ({ name, email }) => {
  return (
    <div>
      <footer
        style={{
          textAlign: "right",
          padding: "3px",
          backgroundColor: "rgb(43,48,53)",
          color: "white",
          marginLeft: "10px",
        }}
      >
        <h4> Made by : </h4>
        <p>
          Name: <strong>{name}</strong>
          <a
            style={{ display: "block" }}
            href="https://www.linkedin.com/in/shivansh-pachauri/"
          >
            <strong>Linkedin</strong>
          </a>
          <a href="mailto:shivanshpachauri00@gmail.com">
            {" "}
            Email <strong>{email}</strong>
          </a>
        </p>
      </footer>
    </div>
  );
};
export default CustomFooter;
