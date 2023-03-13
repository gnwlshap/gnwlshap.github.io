const main = document.querySelector(".main");

const li1 = document.createElement("li");
li1.setAttribute("class", "li");
li1.setAttribute("id", "bookSearch");
li1.innerText = "booksearch";
li1.addEventListener("click", e =>{
    location.href = "https://kimdonghoon.site/booksearch/";
})
main.append(li1);

const li2 = document.createElement("li");
li2.setAttribute("class", "li");
li2.setAttribute("id", "omok");
li2.innerText = "omok";
li2.addEventListener("click", e =>{
    const a = e.target.innerText;
    location.href = "https://kimdonghoon.site/omok/";
})
main.append(li2);
