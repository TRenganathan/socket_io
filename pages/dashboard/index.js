import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function Homes() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("/api/get-ip");
        setIp(response.data.ip);
        console.log(response, "Response");
      } catch (error) {
        console.error("Failed to fetch IP address", error);
      }
    };

    fetchIp();
  }, []);
  return (
    <div>
      Dashboard
      <h4>IP ADDRESS : {ip}</h4>
    </div>
  );
}

export default Homes;
