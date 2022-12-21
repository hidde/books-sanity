// import React from "react"
// import BarcodeScannerComponent from "react-qr-barcode-scanner";

// export function BarCode(props) {
//   const [data, setData] = React.useState("Not Found");
//   return (
//     <>
//       <BarcodeScannerComponent
//         height={100}
//         onUpdate={(err, result) => {
//           if (result) setData(result.text);
//           else setData("Not Found");
//         }}
//       />
//       <p>{data}</p>
//     </>  )
// }