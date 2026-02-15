import React,{useState,useEffect} from "react";
import axios from "axios";
import {FRONTEND_URL, BACKEND_URL } from "../../utils/constants.js";


const Summary = () => {
  const [username, setUsername] = useState("");


    useEffect(() => {
    const verifyCookie = async () => {
      try {
        const { data } = await axios.post(
          `${BACKEND_URL}`,
          {},
          {withCredentials: true }
        );
  
        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
          removeCookie("token");
          window.location.href = `${FRONTEND_URL}/login`;
        }
      } catch (error) {
        console.error(error);
        removeCookie("token");
        window.location.href = `${FRONTEND_URL}/login`;
      }
    };

    verifyCookie();
  }, []);




  return (
    <>
      <div className="username">
        <h6>Hi, <span>{username}</span>!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

const styles = {
  sessionBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#f4f4f4",
    borderBottom: "1px solid #ddd",
  },
};

export default Summary;