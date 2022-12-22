import React from "react";

const styles = {
  position: 'fixed',
  top: 0,
  height: '100vh',
  width: '100vw',
  pointerEvents: 'none',
};

export const HTMLOverlay = () => {
  return (
    <>
      {/* @ts-ignore */}
      <div className="text-green-500 fixed top-0 left-0 h-full w-full pointer-events-none" style={styles}>
        <h1>Helloo...</h1>
      </div>
    </>
  );
}