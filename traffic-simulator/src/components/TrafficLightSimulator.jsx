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

  const getLightStyle = (lightColor) => {
    const isActive = activeLight === lightColor;
    return {
      ...styles.light,
      backgroundColor: isActive ? lightColor : "#999999",
      opacity: isActive ? 1 : 0.3,
      boxShadow: isActive ? `0 0 25px 15px ${lightColor}` : "none",
      transition: "all 0.5s ease"
    };
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={getLightStyle("red")}></div>
        <div style={getLightStyle("yellow")}></div>
        <div style={getLightStyle("green")}></div>
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
