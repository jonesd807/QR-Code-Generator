import {useState} from "react";

export const QrCode = () => {
  const [img , setImg]= useState("");
  const [loading , setloading]=useState(false);
  const[qrData , setQrData]=useState("joes");
  const [qrSize ,setQrSize]=useState("150");

  async function generateQr(){
    setloading(true);
    try{
      const url =`https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url);
    }catch(error){
      console.error("Error generating QR" , error);
    }finally{
      setloading(false);
    }
    }

    function downloadQR(){
      fetch(img)
        .then((response) => response.blob())
        .then((blob)=>{
          const link = document.createElement("a");
          link.href= URL.createObjectURL(blob);
          link.download="qrcode.png";
          link.click();
          document.body.removeChild(link);
        })
        .catch((error)=>{
          console.error("Error Downloading Qr Code" , error);
        });
        }
    
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait...</p>}
        {img && <img src={img} className="qr-code-image"  />}
        <div>


            <label htmlFor="dataInput" className="input-label">
                Data for QrCode:
            </label>

            <input type="text" value={qrData}  id="dataInput" placeholder="Enter data for Qr code" onChange={(e)=>setQrData(e.target.value)} />

            <label htmlFor="sizeInput" className="input-label">
                Image size(e.g 150):
            </label>

            <input type="text" value={qrSize} onChange={(e) => setQrSize(e.target.value)}id="sizeInput" placeholder="Enter image Size" />

            <button className="generate-button"disabled={loading} onClick={generateQr}> Generate Qr Code</button>

            <button className="download-button" onClick={downloadQR}>Download Qr Code</button>

        </div>
    </div>
  )
}
