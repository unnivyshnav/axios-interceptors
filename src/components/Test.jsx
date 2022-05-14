import React from "react";
import axios from "axios";

export default function Test() {
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todoss/"
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response.status);
    }
  };

  const getData1 = async () => {
    try {
      const response = await axios.get(
        "https://ictak-project.herokuapp.com/api/student/",
        {
          headers: { "X-Custom-Header": "foobar" },
        }
      );
    } catch (error) {}
  };
  return (
    <div>
      <button onClick={getData}>Get</button>
      <button onClick={getData1}>Error 401</button>
    </div>
  );
}
