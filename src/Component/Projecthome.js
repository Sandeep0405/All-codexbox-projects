import React from "react";
import bg from "./Images/bg.jpg";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate= useNavigate();
  return (
    <>
      <div>
        <h3 className="title">
          <span>Project Managment</span>
        </h3>
        <div className="boder">
          <img
            src={bg}
            class="img-rounded"
            alt="Baground"
            style={{ position: "fixed", height: 750, width: 1550 }}
            className="bg"
          />
          <div>
            <span>
              <img
                src={require("./Images/test.jpeg")}
                onClick={()=>{navigate('/Pre')}}
                style={{
                  position: "absolute",
                  marginTop: 20,
                  width: 210,
                  marginLeft: 40,
                }}
                className="i1"
              />
              
              <label
                style={{ position: "relative", marginTop: 20, marginLeft: 120 }}
              >
                PRE
              </label>
            </span>
            <span>
           
              <img
                src={require("./Images/test.jpeg")}
                onClick={()=>{navigate('/Test')}}
                style={{
                  position: "absolute",
                  marginTop: 20,
                  width: 210,
                  marginLeft: 290,
                }}
                className="i1"
              />
             
              <label
                style={{ position: "relative", marginTop: 20, marginLeft: 370 }}
              >
                TEST
              </label>
            </span>
            <span>
            
              <img
                src={require("./Images/test.jpeg")}
                onClick={()=>{navigate('/Pro')}}
                style={{
                  position: "absolute",
                  marginTop: 20,
                  width: 210,
                  marginLeft: 275,
                }}
                className="i1"
              />
              
              <label
                style={{ position: "relative", marginTop: 20, marginLeft: 360 }}
              >
                PRO
              </label>
            </span>
            <span>

                <img
                  src={require("./Images/test.jpeg")}
                  onClick={()=>{navigate('/Add')}}
                  style={{
                    position: "absolute",
                    marginTop: 20,
                    width: 210,
                    marginLeft: 260,
                  }}
                  className="i1"
                />
              
              <label
                style={{
                  position: "relative",
                  marginTop: 20,
                  marginLeft: 347,
                }}
              >
                ADD
              </label>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
