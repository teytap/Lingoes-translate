function searchFormWord(event) {
  event.preventDefault();
  let newWordInput = document.querySelector("#newWord").value;
  // searchWord(newWordInput);
  let h2 = document.querySelector("h2");
  let meaningOf = document.querySelector("#meaningOf");
  h2.innerHTML = newWordInput;
  meaningOf.innerHTML = `Meaning of ${newWordInput} is ... `;
}

function listenWord(event) {
  event.preventDefault();
  alert("Listen to pronounciation");
}
let form = document.querySelector("form");
form.addEventListener("submit", searchFormWord);
let listen = document.querySelector(".listen");
listen.addEventListener("click", listenWord);
let listen2 = document.querySelector(".listen2");
listen2.addEventListener("click", listenWord);
