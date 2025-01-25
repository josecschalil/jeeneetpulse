const showPopup = (message) => {
  const popup = document.createElement("div");
  popup.innerText = message;
  popup.style.position = "fixed";
  popup.style.top = "20px";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.backgroundColor = "#f3f4f6"; // Tailwind gray-100
  popup.style.color = "#333";
  popup.style.padding = "15px 25px";
  popup.style.borderRadius = "8px";
  popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.1)";
  popup.style.zIndex = "1000";
  popup.style.fontFamily = "Jakarta";
  popup.style.fontSize = "13px";
  popup.style.opacity = "0";
  popup.style.transition = "opacity 0.1s ease-in-out";

  document.body.appendChild(popup);

  setTimeout(() => {
    popup.style.opacity = "1";
  }, 5);

  setTimeout(() => {
    popup.style.opacity = "0";
    setTimeout(() => popup.remove(), 500);
  }, 3000);
};

export default showPopup;
