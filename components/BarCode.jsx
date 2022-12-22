import React from "react"

export function BarCode({cameraOpen, setCameraOpen, ...rest}) {
  return (
      <button onClick={() => setCameraOpen(!cameraOpen)}>
        {cameraOpen ? "Give up" : "Scan"}
      </button>
  )
}