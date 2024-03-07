document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll("section img");
  const bts = document.querySelectorAll("section button");

  for (let bt of bts) {
    bt.addEventListener("click", () => {
      console.log(bt.innerHTML.slice(-1));

      const rn = Math.floor(Math.random() * 6 + 1);
      const n = parseInt(bt.innerHTML.slice(-1)); // 문자를 숫자로 변환

      imgs[0].setAttribute("src", `./img/${rn}.png`);
      imgs[1].setAttribute("src", `./img/${n}.png`);

      if (rn === n) {
        // 값과 데이터타입을 모두 체크
        document.querySelector("#result").innerHTML = "맞음";
      } else {
        document.querySelector("#result").innerHTML = "틀림";
      }
    });
  }
});

// bts.forEach((item) => {
//     console.log(item);

//     const n = Math.floor(Math.random() * 6 + 1);
//     item.setAttribute("src", `./img/${n}.png`);

// });
