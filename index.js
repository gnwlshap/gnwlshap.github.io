const main = document.querySelector(".main");

function addList(name, href) {
    const li = document.createElement("li");
    li.setAttribute("class", "li");
    li.setAttribute("id", name);
    li.innerText = name;
    li.addEventListener("click", e =>{
        location.href = href;
    })
    main.append(li);
}

addList("booksearch", "https://kimdonghoon.site/booksearch/");
addList("omok", "https://kimdonghoon.site/omok/");
addList("papago", "https://kimdonghoon.site/papago/")