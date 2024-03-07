

const handleClick = () => {

    const bts = document.querySelectorAll("img");

    const btsNum = [1,1,1];

    // for of
    for(let [idx, bt] of bts.entries()) {
        const n = Math.floor(Math.random() * 6 + 1);
        bt.setAttribute("src", `./img/${n}.png`);

        btsNum[idx] = n;

        console.log(btsNum);
    };

    // for of => Python의 for in
    // for(let bt of bts) {
    //     const n = Math.floor(Math.random() * 6 + 1);
    //     bt.setAttribute("src", `./img/${n}.png`);

    //         console.log("for of i=", bt);
    // }

    // for in
    // for(let i in bts) {
    //         const n = Math.floor(Math.random() * 6 + 1);
    //         bts[i].setAttribute("src", `./img/${n}.png`);

    //     console.log("for in i=", bts[i]);

    // }

    // 기본 for
    // for(let i = 0; i < bts.length; i++) {
    //     const n = Math.floor(Math.random() * 6 + 1);
    //     bts[i].setAttribute("src", `./img/${n}.png`);

    // };




    // bts.forEach((item) => {
    //     console.log(item);
        
    //     const n = Math.floor(Math.random() * 6 + 1);
    //     item.setAttribute("src", `./img/${n}.png`);

    // });
};