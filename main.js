console.dir(document);
const myObj = {
    "html" : [
        "head", "body"
    ],
    "h1" : [
        "textContent", "What up"
    ]
};
console.log(myObj);

//reference matching element w/ H1
const elem1 = document.querySelector('h1');
elem1.textContent = "What up Peeps!";
console.log(elem1); 