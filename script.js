const countDOM = document.querySelector(".count");
const inputDOM = document.querySelector("input");


inputDOM.addEventListener("keyup", () => {
    const name = inputDOM.value
    console.log(name);
    countDOM.innerHTML = inputDOM.value.length
})