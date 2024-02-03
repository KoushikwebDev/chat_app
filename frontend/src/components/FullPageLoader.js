import React from "react";

function FullPageLoader() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 99999,
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          margin: "8px",
          position: "relative",
          borderRadius: "50%",
          border: "6px solid transparent",
          borderTopColor: "#000",
          animation: "lds-dual-ring 1.2s linear infinite",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            height: "50%",
            borderBottom: "6px solid #000",
            borderRight: "6px solid #000",
            borderRadius: "50%",
          }}
        ></div>
      </div>
      <style jsx>{`
        @keyframes lds-dual-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default FullPageLoader;
