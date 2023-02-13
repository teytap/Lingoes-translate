const submitBtn = document.querySelector("#submit-btn");
const selectLanguage1 = document.querySelector("#languages-one");
const selectLanguage2 = document.querySelector("#languages-two");
const languageResult = document.querySelector(".language-result");
const translationResult = document.querySelector(".translation");

function translate(response) {
  // languageResult.innerHTML =
  //   selectLanguage2.options[selectLanguage2.selectedIndex].text;
  translationResult.innerHTML = response.responseData.translatedText;
}
function showTranslate(textInput, twoLanguages) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e5cb67fa32msha237b8afe927e3fp13f481jsn269ad7101412",
      "X-RapidAPI-Host":
        "translated-mymemory---translation-memory.p.rapidapi.com",
    },
  };
  fetch(
    `https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=${twoLanguages}&q=${textInput}&mt=1&onlyprivate=0&de=a%40b.c`,
    options
  )
    .then((response) => response.json())
    .then((response) => translate(response))
    .catch((err) => console.error(err));
}

function handleSubmit(event) {
  event.preventDefault();
  const textInput = document.querySelector("#newWord").value;
  const firstLanguage = selectLanguage1.value;
  const secondLanguage = selectLanguage2.value;
  let twoLanguages = `${firstLanguage}|${secondLanguage}`;

  showTranslate(textInput, twoLanguages);
}

submitBtn.addEventListener("click", handleSubmit);

showTranslate("Hello", "en|tr");
