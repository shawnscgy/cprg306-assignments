"use client";

import { useState, useEffect } from "react";
export default function Page() {
  const [dogUrl, setDogUrl] = useState(null);

  const getDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    const url = data.message;
    setDogUrl(url);
  };

  useEffect(() => {
    getDog();
  }, []);
  return (
    <div>
      <text>week8</text>

      <p>
        <img src={dogUrl} alt="dog" />
      </p>
    </div>
  );
}
