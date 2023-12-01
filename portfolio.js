gsap.to("form", {opacity: 0.8, delay:1, duration:5})
const button = document.querySelector(".btn");
const par = document.querySelector(".result");
button.addEventListener("click", result);

function result(e) {
    e.preventDefault()

    let points = 0;
    if (document.querySelector("#answer1").checked) {
        points++
    }
    if (document.querySelector("#answer2").checked) {
        points++
    }
    if (document.querySelector("#answer3").checked) {
        points++
    }
    if (document.querySelector("#answer4").checked) {
        points++
    }
    if (document.querySelector("#answer5").checked) {
        points++
    }
    par.textContent = "Anzahl korrekter Antworten: " + points
}