"use client";

import { useState } from "react";
import styles from "./Inputmessage.module.css";
import classNames from "classnames";
import emailjs from "@emailjs/browser";

function Inputmessage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function hundelClick(): void {
    if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
      setError("Enter valid email !");
      return;
    }
    if (!message) {
      setError("Enter message !");
      return;
    }
    console.log("fott");

    emailjs
      .send(
        "service_u7laykb",
        "template_1n6a76s",
        {
          name: email,
          message,
        },
        {
          publicKey: "nO_Q3LyriDtaTzuZj",
        }
      )
      .then(() => {
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        setError("Something wrong !!");
      });
  }

  return (
    <div>
      <div className="p-5">
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
          value={email}
          className={classNames("form-control mb-4")}
        />
        <textarea
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            setError("");
          }}
          className={classNames("form-control mb-4")}
          rows={4}
          style={{ resize: "none" }}
          aria-label="bg-transparent textarea"
          placeholder="Your message"
        ></textarea>
        <p className="m-0 text-danger fs-5">{error} </p>
      </div>
      <button
        onClick={hundelClick}
        className={classNames("btn px-5 mb-5 py-2 fw-bold shadow", styles.but)}
      >
        Send message
      </button>
    </div>
  );
}

export default Inputmessage;
