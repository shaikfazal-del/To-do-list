let input_box = document.getElementById("text1")
let list_container = document.querySelector("#list-content")
const addtask = () => {
    if (input_box.value === " ") {
        alert("Enter Task")
    }
    else {
        let li = document.createElement("li")
        li.innerHTML = input_box.value
        list_container.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    input_box.value = " "
    storedata()
}

list_container.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        storedata()
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove()
        storedata()
    }

}, false)

const storedata = () => {
    localStorage.setItem("data", list_container.innerHTML)
}

const showdata = () => {
    list_container.innerHTML = localStorage.getItem("data")
}
showdata()
