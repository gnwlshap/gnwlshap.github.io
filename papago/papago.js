const inputBox = document.querySelector(".inputBox");



function papago(text) {
    $.ajax({
        "url": `https://openapi.naver.com/v1/papago/n2mt?source=ko&target=en&text=${text}`,
        "method": "POST",
        "timeout": 0,
        "headers": {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Naver-Client-Id": "_Oq1Vr8G_qRE555JAfV7",
        "X-Naver-Client-Secret": "3upf9Tlcm3"
        },
    })
    .done(function (response) {
        console.log(response);
    });
};