import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { SpinnerDotted, SpinnerCircularSplit } from "spinners-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function APItest() {
  const [USERS, setUSERS] = useState();
  const [Laoding, setLaoding] = useState(true);
  const [ERROR, setERROR] = useState(false);
  const [title, setTitle] = useState();
  const [Laoding2, setLaoding2] = useState(true);

  useEffect(() => {
    const getdata = async () => {
      try {
        const users = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersJSON = await users.json();
        // const response = await axios.get ("https://jsonplaceholder.typicode.com/users");
        // setUSERS(response.data);
        setUSERS(usersJSON);
        setLaoding(false);
        console.log("users:", usersJSON);
      } catch (error) {
        setLaoding(false);
        setERROR(true);
        console.log("error");
      }
    };
    getdata();
  }, []);
  return (
    <div>
      <form>
        <input onChange={(e) => setTitle(e.target.value)}></input>
        <button
          disabled={Laoding2}
          onClick={async (e) => {
            e.preventDefault();
            setLaoding2(true);
            try {
              const response = await axios.post(
                "https://jsonplaceholder.typicode.com/users",
                {
                  title: title,
                }
              );
              setLaoding2(false);
              toast.success("users created");
            } catch (error) {
              setLaoding2(false);
              toast.error("users failed to create");
            }
          }}
        >
          {Laoding2 ? (
            <SpinnerCircularSplit
              size={20}
              thickness={100}
              speed={100}
              color="#36ad47"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          ) : (
            "submit"
          )}
        </button>
      </form>
      {Laoding ? (
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <SpinnerDotted
            size={70}
            thickness={100}
            speed={100}
            color="#36ad47"
          />
        </div>
      ) : ERROR ? (
        <div>Error</div>
      ) : (
        USERS.map((value) => {
          return <li>{value.username}</li>;
        })
      )}
      <ToastContainer />
    </div>
  );
}

export default APItest;
