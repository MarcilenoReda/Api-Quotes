const quoteElement = document.getElementById("quote");

const newQuoteButton = document.getElementById("new-quote");

const copyButton = document.getElementById("copy-button");
newQuoteButton.addEventListener("click", () => {
  
  fetch("https://api.quotable.io/random")
  
  .then((response) => response.json())
  
  .then((data) => {
  
    quoteElement.textContent = data.content;
  
  })
  
  .catch((error) => {
  
    console.log(error);
  
  });

});

copyButton.addEventListener("click", () => {
  const tempInput = document.createElement("input");
  
  tempInput.setAttribute("value", quoteElement.textContent);
  
  document.body.appendChild(tempInput);
  
  tempInput.select();
  
  document.execCommand("copy");
  
  document.body.removeChild(tempInput);
  Swal.fire({
    icon: 'success',
    title: 'Text copied to clipboard!',
    showConfirmButton: false,
    timer: 1500
  });
});
