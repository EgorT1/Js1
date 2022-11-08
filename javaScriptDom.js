// const tag_h1 = document.querySelector(".title")
// console.log(tag_h1);
// tag_h1.innerHTML = "Salut";
// tag_h1.style.color = "red";
// console.log(tag_h1);
// const body = document.querySelector("body");
// const paragraf = document.createElement('p');
// paragraf.innerHTML = "1992";
// paragraf.className = "age";
// body.appendChild(paragraf);
    // const tag_h1 = document.querySelector("h1");
    // const body_color = document.querySelector("body");

    // function color(param) {
    //     addEventListener('click', ()=>{
    //         param.style.backgroundColor = 'blue';
    //     })
    // }

    // color(tag_h1);

    const array =[
        "JavaScript",
        "Dom Element",
        "Const",
        "Operator"
    ];

    const array1 =[
        "JavaScript",
        "Dom Element",
        "Const",
        "Operator",
        "dadad",
        "nununu"
    ];
    // array.forEach(item => {
    //     const title = document.createElement('p');
    //     title.innerHTML = item;
    //     console.log(title);
    //     const container = document.querySelector('.container');
    //     container.appendChild(title)
    // })

    function createElement(params){
        params.forEach(item => {
            const title = document.createElement('p');
            title.innerHTML = item;
            const container = document.querySelector('.container');
            container.appendChild(title)
        })
    }
createElement(array)
createElement(array1)