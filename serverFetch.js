const Http = new XMLHttpRequest()
const url = "http://jsonplaceholder.typicode.com/posts/";

Http.open("GET",url);
Http.send();

Http.onreadystatechange = () =>{
    // console.log(Http.responseText);
}

const arrayData = [];

fetch(url)
.then((response) =>
    response.json())
.then((data) => {
    arrayData.push(data);
    // console.log(data);
    info_data(arrayData);
});

function info_data(array_respons) {
    array_respons.forEach(element => {
        element.forEach(item =>{
            const body =document.querySelector("body");
            const tag_h1 = document.createElement("h1");
            tag_h1.innerHTML = item.title;
            tag_h1.className = 'title';

            const tag_p = document.createElement("p");
            tag_p.innerHTML = item.title;
            tag_p.className = 'info_container';


            const div = document.createElement("div");
            tag_h1.className = 'container';
            div.appendChild(tag_h1);
            div.appendChild(tag_p);
            body.append(div);
        })
    });
}

const arr = [
    [
        {body: "dd", title:"Salut"},
        {body: "dasdasdd", title:"asdasdaSdd"},
        {body: "dasdasdaddad", title:"Sasdasdadadalut"}
    ]
]

info_data(arr, "Salut");

function filtre_data(params,data_info) {
    params.forEach(element =>{
        element.forEach(item =>{
            if (item.title.includes(data_info)) {
                console.log(item);
            }
            // } else {
            //     console.log("nu este asa");
            // }
        })
    })
}


filtre_data(arr, "Salut");


