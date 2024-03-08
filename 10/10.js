document.addEventListener("DOMContentLoaded", () => {
  // DOM 생성후에 button과 숫자를 출력할 선택자 가져오기
  const bt = document.querySelector("button");
  const numDisp = document.getElementById("numDisp");

  let nums = [];

  // 버튼의 클릭이벤트 달기
  bt.addEventListener("click", () => {
    // 배열 초기화
    nums.length = 0;

    while (nums.length < 7) {
      let n = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(n))
        if(nums.length == 6)
          nums.sort((a, b) => a - b);
        nums.push(n);
    }

    // nums.sort((a, b) => a - b);

    nums = nums.map((v) => `<span class="sp${parseInt(v / 10)}">${v}</span>`);

    nums.splice(6, 0, "<span> + </span>");

    console.log(nums)

    numDisp.innerHTML = nums.join(" ");

    // let tags = "";
    // nums.map((v, i) => {
    //   tags = tags + `<span class="sp${parseInt(v / 10)}">${v}</span>`;
    //   if(i === 5)
    //     tags = tags + "<span> + </span>";

    //   console.log(tags);
    // });

    // numDisp.innerHTML = tags;

    // console.log(nums);

    // for(let i in nums) {

    //   rn = Math.floor(Math.random() * 44) + 1; // 랜덤수 생성 1~45
    //   // if(nums.includes(rn))
    //     // continue;
    //     nums[i].innerHTML = rn;

    // }

    // let tags = [];
    // tags = nums.map((v) => `<span class="sp${parseInt(v / 10)}">${v}</span>`);
    // tags.splice(6, 0, "<span>+</span>");
  });
});

//     // 입력 초기화
//     numInput.style.display = "inline";
//     numInput.value = "";
//     numInput.focus();
//     bt.innerHTML = "확인";
//   }

//   // 숫자 비교
//   if (rn === parseInt(numInput.value)) {
//     upDownImg.setAttribute("src", "./imgs/good.png");
//     numInput.style.display = "none";
//     bt.innerHTML = "재시작";
//     flag = false;
//   } else if (rn > numInput.value) {
//     upDownImg.setAttribute("src", "./imgs/up.png");
//   } else {
//     upDownImg.setAttribute("src", "./imgs/down.png");
//   }

//   msg.innerHTML = numInput.value;
//   numInput.value = "";

// });
