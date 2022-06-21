const adviceNum = document.querySelector("#adviceNum");
const adviceText = document.querySelector("#advice");
const refreshButton = document.querySelector("#diceImage");


refreshButton.addEventListener("click", function () {
    axios.get("https://api.adviceslip.com/advice")
        .then(res => {
            adviceNum.innerHTML = res.data.slip.id;
            adviceText.innerHTML = `"${res.data.slip.advice}"`;
        })
    setTimeout(() => {
        refreshButton.classList.toggle("loading");
    }, 400);
    setTimeout(() => {
        refreshButton.classList.toggle("loading");
    }, 800);
});