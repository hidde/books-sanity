import React from "react"

export function BarCode({ isbn, setIsbn, cameraOpen, setCameraOpen, ...rest }) {

  return (
      <button onClick={() => setCameraOpen(!cameraOpen)}>
        {cameraOpen ? "Give up" : "Scan"}
      </button>
  )
}