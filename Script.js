const largeImg = document.querySelector('.large-img')
const smallImg = document.querySelectorAll('.small-img')

for(const elem of smallImg){
        elem.onclick = function (){
        largeImg.src = elem.src
    }
}

const loginForm = document.querySelector('#loginForm')
const regForm = document.querySelector('#regForm')
const indeCater = document.querySelector('#indecator')

function register() {
    regForm.style.transform = 'translateX(0px)'
    loginForm.style.transform = 'translateX(0px)'
    indeCater.style.transform = 'translateX(100px)'
}

function login() {
    regForm.style.transform = 'translateX(300px)'
    loginForm.style.transform = 'translateX(300px)'
    indeCater.style.transform = 'translateX(0px)'
}


function sendToWhatsApp() {
  // Product title
  const title = document.querySelector(".right-detail h1").innerText;

  // Price
  const price = document.querySelector("#discount-price").innerText;

  // Main image
  const img = document.querySelector("#main-img").src;

  // Product detail (sirf description, features nahi)
  let detail = "";
  if (document.querySelector("#product-detail")) {
    detail = document.querySelector("#product-detail").innerText.split("📌")[0].trim();
  }

  // Key Features list (ul li se uthana)
  let features = "";
  const featureList = document.querySelectorAll(".right-detail ul li");
  if (featureList.length > 0) {
    features = "\n\n🔑 *Key Features:*";
    featureList.forEach((li, i) => {
      features += `\n${i + 1}. ${li.innerText}`;
    });
  }

  // WhatsApp number
  const number = "923083611140";

  // Final message
  const message = 
`-------------------------

*📦 New Order Received*

🛒 *Product:* ${title}
💰 *Price:* ${price}
📋 *Detail:* ${detail}${features}

🖼 *Image:* ${img}

-------------------------`;

  // WhatsApp link
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  // Open WhatsApp
  window.open(url, "_blank");
}




// function sendToWhatsApp() {
//   // Product Data Pick Karna
//   const title = document.querySelector(".right-detail h1").innerText;
//   const price = document.getElementById("discount-price").innerText;
//   const img = document.getElementById("main-img") ? document.getElementById("main-img").src : "";
//   const detail = document.querySelector("#product-details").innerText;

//   // ✅ Apna WhatsApp Number Yahan Lagao (country code + number without +)
//   const phoneNumber = "923083611140";

//   // Message Format
//   const message = `
// 🛒 *New Order*
// -------------------------
// 📦 Product: ${title}
// 💰 Price: ${price}
// 📝 Detail: ${detail}
// 🖼️ Image: ${img}
// -------------------------
//   `;

//   // Open WhatsApp
//   const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
//   window.open(url, "_blank");
// }
