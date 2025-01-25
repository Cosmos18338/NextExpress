"use client";
import React, { useState, useEffect } from "react";

export default function Api(props) {
  const [api, setApi] = useState([]);
  const showApi = document.querySelector(".showApi");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => setApi(data));
  }, []);

  return (
    <>
      <div>api</div>
      <div className="showApi">
        <h1>{api.message}</h1>
      </div>
    </>
  );
}
