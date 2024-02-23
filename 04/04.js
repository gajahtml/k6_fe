/* document.addEventListener("DOMContentLoaded", () => {

    // 버튼 선택방법
    // const bt1 = document.querySelector("div > button");     // child selector
    // const bt1 = document.querySelector("button");           // tag selector
    const bt1 = document.querySelector("#bt1");                // id selector

    bt1.addEventListener("click", () => {
        console.log("click");
        handleClick();
    });
        
        
}); */

const handleClick = () => {
    const n1 = Math.floor(Math.random() * 6 + 1);
    const n2 = Math.floor(Math.random() * 6 + 1);
    const n3 = Math.floor(Math.random() * 6 + 1);

    console.log("random integer", n1, n2, n3);

    const img1 = document.querySelector("#i1");
    const img2 = document.querySelector("#i2");
    const img3 = document.querySelector("#i3");

    img1.setAttribute("src", `./img/${n1}.png`);
    img2.setAttribute("src", `./img/${n2}.png`);
    img3.setAttribute("src", `./img/${n3}.png`);
};


/* const handleClick = () => {
    
    const rnd = Math.floor(Math.random() * 6 + 1);
    
    document.querySelector("img").setAttribute("src", `./img/${rnd}.png`);
    
    // i.setAttribute("src", `./img/${rnd}.png`);

}; */


