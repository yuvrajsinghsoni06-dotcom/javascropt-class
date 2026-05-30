let userOne = {
    name: "Yash",
    number: 1234567890,
    address: "Najafgarh"
};

let userTwo = {
    name: "Sagar",
    number: 6969696969,
    address: "Yamuna Nagar"
};

console.log("User One object:", userOne);

userTwo.name = "Kashyap";
console.log("Updated User Two name:", userTwo.name);

console.log("DOM document object:", document);

const firstParagraph = document.querySelector('p');
console.log("First paragraph text before:", firstParagraph.textContent);

firstParagraph.textContent = "Paragraph updated using querySelector('p')";
console.log("First paragraph text after:", firstParagraph.textContent);

const firstParaById = document.getElementById('firstPara');
firstParaById.textContent = "Updated using getElementById";
firstParaById.style.color = "green";
console.log("Element from getElementById:", firstParaById);

const paragraphsByClass = document.getElementsByClassName('textLine');
paragraphsByClass[0].style.fontWeight = "bold";
paragraphsByClass[1].style.color = "purple";
console.log("HTMLCollection from getElementsByClassName:", paragraphsByClass);

const paragraphsNodeList = document.querySelectorAll('.textLine');
console.log("NodeList from querySelectorAll:", paragraphsNodeList);

paragraphsNodeList.forEach((para, index) => {
    console.log(`NodeList item ${index}:`, para.textContent);
});

const firstTextLine = document.querySelector('.textLine');
firstTextLine.textContent = "Updated first .textLine using querySelector";
firstTextLine.style.color = "red";
console.log("First element with class textLine:", firstTextLine);

const hiddenParagraph = document.getElementById('hiddenPara');

console.log("Hidden paragraph textContent:", hiddenParagraph.textContent);
console.log("Hidden paragraph innerText:", hiddenParagraph.innerText);

paragraphsNodeList[1].innerHTML = "<div><b>Hello</b> World</div>";
console.log("Paragraph after innerHTML update:", paragraphsNodeList[1]);
