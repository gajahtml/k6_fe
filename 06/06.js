

const handleClick = (n) => {

    const rn = Math.floor(Math.random() * 6 + 1);

    const img1 = document.querySelector("#i1");
    const img2 = document.querySelector("#i2");

    img1.setAttribute("src", `./img/${rn}.png`);
    img2.setAttribute("src", `./img/${n}.png`);

    if(tn == n) {
        
        document.querySelector("#result")
    }

    // bts.forEach((item) => {
    //     console.log(item);
        
    //     const n = Math.floor(Math.random() * 6 + 1);
    //     item.setAttribute("src", `./img/${n}.png`);

    // });
};