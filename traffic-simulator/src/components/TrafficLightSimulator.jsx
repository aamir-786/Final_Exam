import React from "react";

const TrafficLightSimulator = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={{ ...styles.light, backgroundColor: 'red' }}></div>
        <div style={{ ...styles.light, backgroundColor: 'yellow' }}></div>
        <div style={{ ...styles.light, backgroundColor: 'green' }}></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: '100vh',
    width: '100vw',
    backgroundColor: '#111',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '100px',
    backgroundColor: '#333',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
  },
  light: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    opacity: 0.3,
  }
};

export default TrafficLightSimulator;
