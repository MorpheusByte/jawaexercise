const newLi = document.createElement("li")

const textLi = document.createTextNode("Go")

newLi.appendChild(textLi)

document.querySelector("ul").appendChild(newLi)


const newLi2 = document.createElement("li")
newLi2.textContent = "C++"

const react = document.querySelector(" ul li:nth-child(4)")

// react.appendChild(newLi2)
react.before(newLi2)
react.after(newLi2, newLi)

