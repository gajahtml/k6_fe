document.addEventListener("DOMContentLoaded", () => {
  // DOM 생성후에 img, input, button 가져오기

  const upDownImg = document.querySelector("img");
  const numInput = document.getElementById("num1");
  const bt = document.querySelector("button");
  const msg = document.querySelector("#msg");

  // input 박스에 focus
  numInput.focus();

  // 랜덤수 생성 변수
  let rn;
  let flag = false;

  // 버튼의 클릭이벤트 달기
  bt.addEventListener("click", (e) => {
    e.preventDefault();

    console.log(numInput.value);

    // input 박스 내용가져오기
    if (numInput.value == "") {
      // alert("숫자를 입력하세요.");
      msg.innerHTML = "<span>숫자를 입력하세요</span>";
      numInput.focus();
      return;
    }

    // if(flag === false)
    if (!flag) {
      rn = Math.floor(Math.random() * 100) + 1; // 랜덤수 생성 1~100
      console.log("rn=", rn);
      flag = true;

      // 입력 초기화
      numInput.style.display = "inline";
      numInput.value = "";
      numInput.focus();
      bt.innerHTML = "확인";
    }

    // 숫자 비교
    if (rn === parseInt(numInput.value)) {
      upDownImg.setAttribute("src", "./imgs/good.png");
      numInput.style.display = "none";
      bt.innerHTML = "재시작";
      flag = false;
    } else if (rn > numInput.value) {
      upDownImg.setAttribute("src", "./imgs/up.png");
    } else {
      upDownImg.setAttribute("src", "./imgs/down.png");
    }

    msg.innerHTML = numInput.value;
    numInput.value = "";
    
  });
});
