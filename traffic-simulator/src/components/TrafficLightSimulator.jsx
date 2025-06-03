import React, { useState, useEffect } from "react";

const TrafficLightSimulator = () => {
  const lights = ["yellow", "green", "red"];
  const [activeLight, setActiveLight] = useState("yellow");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % lights.length;
      setActiveLight(lights[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const getLightStyle = (color) => ({
    ...styles.light,
    backgroundColor: color,
    opacity: activeLight === color ? 1 : 0.3,
    boxShadow: activeLight === color ? `0 0 25px 10px ${color}` : "none",
    transition: "all 0.5s ease"
  });

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={getLightStyle("#999999")}></div>
        <div style={getLightStyle("#999999")}></div>
        <div style={getLightStyle("#999999")}></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  container: {
    width: "100px",
    backgroundColor: "#333",
    padding: "20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px"
  },
  light: {
    width: "60px",
    height: "60px",
    borderRadius: "50%"
  }
};

export default TrafficLightSimulator;
