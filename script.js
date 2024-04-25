const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

function buttonClick()
{
    var inputValue = input.value;
    input.value = "";

    const li = document.createElement("li");
    const span = document.createElement("span");
    const listButton = document.createElement("button");

    span.textContent = inputValue;
    li.appendChild(span);
    listButton.textContent = "Delete";
    li.appendChild(listButton);
    ul.appendChild(li);

    listButton.addEventListener("click", () =>{
        ul.removeChild(li);
    });
    input.focus();
}

button.addEventListener("click", buttonClick);



