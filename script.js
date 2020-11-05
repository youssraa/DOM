
let total = document.getElementById("tot")
let arr = document.getElementsByClassName("pu")
let s = 0
for (a of arr) {
    s += parseInt(a.innerText)
}
total.innerText = s + "$"
let like = Array.from(document.querySelectorAll(".like"))
like.forEach((x) => {
    x.addEventListener("click", (event) => {
        if (event.target.style.color != "red") {
            event.target.style.color = "red"
        } else { event.target.style.color = "#AAB8C2" }
    })
})

let remove = Array.from(document.querySelectorAll(".remove"))

remove.forEach((x) => {

    x.addEventListener("click", (event) => {
        let div = event.target
            .parentElement
            .parentElement
            .parentElement
        div.parentElement.removeChild(div)
        let parent = event.target.parentElement.parentElement.parentElement;
        let priceDeleted = parseInt(parent.querySelector('.price').innerText.replace("$", ""))
        let qtDeleted = parseInt(parent.querySelector('.qt').innerText)
        console.log("to delete", priceDeleted * qtDeleted)
        let all = parseInt(document.querySelector('#tot').innerText.replace('$', ''))

        all -= priceDeleted
        document.querySelector('#tot').innerText = all + "$";
        console.log(all)
    })
})

let plus = Array.from(document.querySelectorAll(".plus"))
plus.forEach((x) => {
    x.addEventListener("click", (event) => {
        let parent = event.target.parentElement.parentElement
        let pu = +parent.querySelector(".pu").innerText
        let qt = +parent.querySelector(".qt").innerText

        let pt = +parent.querySelector(".price").innerText.replace("$", "")

        let fp = +document.getElementById("tot").innerText.replace("$", "")

        if (event.target.innerText == "+") {
            parent.querySelector(".qt").innerText++
                parent.querySelector(".price").innerText = pu + pt + "$"
            document.getElementById("tot").innerText = fp + pu + "$"
        } else {
            if (pt > 0) {
                parent.querySelector(".qt").innerText--
                    parent.querySelector(".price").innerText = pt - pu + "$"
                document.getElementById("tot").innerText = fp - pu + "$"
            }
        }
    })
})