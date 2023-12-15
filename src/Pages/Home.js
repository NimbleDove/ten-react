
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

const tytEkranOpen = () => {
    window.location.href = '/quizes';
  };

  const tirigonometriEkranOpen = () => {
    window.location.href = '/main';
  };

  useEffect(() => {
    if (!localStorage["user"]) {
      navigate("/login");
    }
  }, []);

  const user = JSON.parse(localStorage["user"] ?? "{}");

  return (
    <div className="Home">
        <h1>YUUSFF</h1>
      <div className="contanierofhomepage">
      <button className="button-Home" onClick={tirigonometriEkranOpen} role="button">Trigonometri</button>
      <br />
      </div>
    </div>
  );
};

export default Home;





