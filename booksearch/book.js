// API : Application Programming Interface
// ㄴ Open API : 다양한 기업에서 공익의 목적 또는 다른 이유로 무료로 인터페이스를 이용할 수 있게 제공
// ㄴ Private API : 유료 

// Open API
// ㄴ 공공 데이터 포탈
// ㄴ 카카오 개발자 센터
// ㄴ 네이버 개발자 센터
// ㄴ ...

// ajax
// ㄴ 비동기 방식으로 페이지의 일부 정보를 갱신할 수 있는 기술
// fetch() 로도 구현 가능(일부 브라우저 또는 하위 버전의 스크립트에서 호환 X)
// -> jQuery.ajax() 메소드를 활용

let page = 1;

const query = document.querySelector(".query");

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("submit", e =>{
    e.preventDefault();
    if(query !== "") {
        page = 1;
        searchRequest(query.value, page);
    }
})

function searchRequest(query, page) {
    $.ajax({
        "url": `https://dapi.kakao.com/v3/search/book?query=${query}&page=${page}&size=10&target=title`,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Authorization": "KakaoAK 5e0b5e06e4fb88f8a3728d0c4aa130eb"
        },
    })
    .done((response) => {

        // container 안에
        /*
            <div class="container">
        <div class="result-card">
            <img class="book-img" src="">
            <h4 class="book-title">도서제목</h4>
            <p class="book-description">도서상세정보</p>
            <span class="price">10000원</span>
            <p class="book-info">
            <span class="author">저자</span>|<span class="publisher">출판사</span>
            </p>
        </div>
        */

        // 새로 생성
        console.log(response);
        // console.log(response.documents[0].title);
        const container = document.querySelector(".container");
        container.innerText = ""; 
        let result = response.documents;
        
        for(let i=0; i<result.length; i++) {
            const resultCard = document.createElement("div");
            resultCard.setAttribute("class", "result-card");
    
            const bookImg = document.createElement("img");
            bookImg.setAttribute("class", "book-img");
            bookImg.src = result[i].thumbnail;
            resultCard.appendChild(bookImg);
    
            const bookTitle = document.createElement("h4");
            bookTitle.setAttribute("class", "book-title");
            bookTitle.innerText = result[i].title;
            resultCard.appendChild(bookTitle);
    
            const price = document.createElement("span");

            if(result[i].sale_price > 0){
                price.setAttribute("class", "price");
                price.innerText = result[i].sale_price + "원";
            }
            else{
                price.setAttribute("class", "zero");
                price.innerText = "절판";
            }
            resultCard.appendChild(price);
    
            const bookInfo = document.createElement("p");
            bookInfo.setAttribute("class", "book-info");

            resultCard.appendChild(bookInfo);

            const author = document.createElement("span");
            author.setAttribute("class", "author");
            const publisher = document.createElement("span");
            publisher.setAttribute("class", "publisher");

            author.innerText = result[i].authors;
            publisher.innerText = " | "+result[i].publisher;

            bookInfo.appendChild(author);
            bookInfo.appendChild(publisher);
            
    
            container.appendChild(resultCard);
        }
    });
}
