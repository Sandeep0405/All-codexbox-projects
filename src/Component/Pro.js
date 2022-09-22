import React from "react";
import "./Home.css";

function Pre() {
  return (
    <div className="box">
      <h4 className="title">Project Management</h4>
      <div className="bgImage">
        <div className="borderLine">
        <a href="http://localhost:3000/add">
        <button type="button" class="btn btn-primary">Add</button>
        </a>
        <a href="http://localhost:3000/home">
        <button type="button" class="btn btn-primary">Home</button>
        </a>
        <a href="http://localhost:3000/pre">
        <button type="button" class="btn btn-primary">Pre</button>
        </a>
        <a href="http://localhost:3000/test">
        <button type="button" class="btn btn-primary">Test</button>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Pre;