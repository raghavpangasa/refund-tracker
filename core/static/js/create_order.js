const itemList = document.querySelector("#item-list")


function addItem(n){
    const itemDiv = document.createElement("div")
    itemDiv.classList.add("item","field","is-grouped")
    const itemNumber = document.createElement("p")
    itemNumber.innerText = "#" + n
    itemNumber.classList.add("title","pr-5")
    const nameControl = document.createElement("div")
    nameControl.classList.add("control")
    const nameLabel = document.createElement("label")
    nameLabel.classList.add("label")
    nameLabel.innerText = "Name"
    const nameInput = document.createElement("input")
    nameInput.classList.add("is-success", "input")
    nameInput.setAttribute("type","input")
    nameControl.appendChild(nameLabel)
    nameControl.appendChild(nameInput)

    const priceControl = document.createElement("div")
    priceControl.classList.add("control")
    const priceLabel = document.createElement("label")
    priceLabel.classList.add("label")
    priceLabel.innerText = "Price"
    const priceInput = document.createElement("input")
    priceInput.classList.add("is-success", "input")
    priceInput.setAttribute("type","input")
    priceControl.appendChild(priceLabel)
    priceControl.appendChild(priceInput)

    itemDiv.appendChild(itemNumber)
    itemDiv.appendChild(nameControl)
    itemDiv.appendChild(priceControl)
    itemList.appendChild(itemDiv)
}

const numItems = document.querySelector("#num-items")

numItems.addEventListener("change", function(e){
    while (itemList.firstChild) {
        itemList.removeChild(itemList.lastChild);
    }
    const val = numItems.value
    if (val<=0) {
        const err = document.createElement("p")
        err.innerText = "Please select a number greater than 0"
        itemList.appendChild(err)
    }else{
        for (let index = 0; index < val; index++) {
            addItem(index+1)
        }
    }

})