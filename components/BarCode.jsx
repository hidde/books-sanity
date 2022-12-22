import React, { useState } from "react"
import BarCodeScanner from "./BarCodeScanner";

export function BarCode({ isbn, setIsbn, ...rest }) {
  const [camera, setCamera] = useState(false);
  const [result, setResult] = useState(null);

  const onDetected = result => {
    alert('result')
    setResult(result);
    setIsbn(result);
    setCamera(false);
  };

  return (
      <>
        <button onClick={() => setCamera(!camera)}>
          {result ? '' : "Scanning..."}
          {camera ? "Give up" : "Scan"}
        </button>
        <span className="container" hidden>
          {camera && <BarCodeScanner onDetected={onDetected} />}
        </span>
      </>
  )
}