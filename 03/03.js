// DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded ok")
    
    // 버튼생성 (변수선언)
    const bt3 = document.createElement("button");
    const bt3Txt = document.createTextNode("버튼3");
    bt3.appendChild(bt3Txt);

    const bt4 = document.createElement("button");
    const bt4Txt = document.createTextNode("버튼4");
    
    bt3.setAttribute("id", "bt3");
    bt4.setAttribute("id", "bt3");

    bt4.appendChild(bt4Txt);


    // 버튼추가하기 
    document.querySelector("#btArea2").append(bt3);
    document.querySelector("#btArea3").append(bt4);
    

    // 버튼 이벤트 닫기
    bt3.addEventListener("click", () => {
        handleClick(3);    
    });

    bt4.addEventListener("click", () => {
        handleClick(4);
    });

});



// 함수작성 2: 화살표 함수
const handleClick = (n) => {
    let msg;
    if(n == 1) msg = "<h2>안녕하세요</h2>";
    else if(n == 2) msg = "<h2>안녕히가세요</h2>";
    else if(n == 3) msg = `<h2>버튼 ${n}이라고!<h2>`;
    else msg = `<h2>버튼 ${n}이지라~<h2>`;

    document.querySelector("#msgArea").innerHTML = msg;
};


// 함수 작성 1

/*
function handleClick(n) {
    // 메세지 영역 가져오기 1
    // document.getElementById("msgArea").innerHTML = "안녕하세요";

    // 메세지 영역 가져오기 2
    // document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다</h2>";

    document.querySelector("#msgArea").innerHTML = `<h2>버튼 ${n}이 눌러졌습니다</h2>`;
} */