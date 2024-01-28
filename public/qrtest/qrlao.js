/* Import the necessary modules.
import qrcode from "qrcode";

// Define the main class.
class QRCodeGenerator {
  constructor() {
  // Initialize the QR code generator.
  this.qr = qrcode;
  }

  // Generate a QR code.
  generate(text) {
  // Create a new QR code.
  const qr = this.qr.create(text, {
  type: "text",
  errorCorrectionLevel: "H",
  });

  // Return the QR code as a base64 string.
  return qr;
  }
}

// Create a new instance of the QR code generator.
const qrCodeGenerator = new QRCodeGenerator();

// Generate a QR code for the text "Hello world!".
const qrCode = qrCodeGenerator.generate("Hello world!");

// Log the QR code to the console.
console.log(qrCode);*/


var qrcode = new QRCode("qrcode");

function makeCode () {    
  var elText = document.getElementById("text");
  
  if (!elText.value) {
    alert("Input a text");
    elText.focus();
    return;
  }
  
  qrcode.makeCode(elText.value);
}

makeCode();

$("#text").
  on("blur", function () {
    makeCode();
  }).
  on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });