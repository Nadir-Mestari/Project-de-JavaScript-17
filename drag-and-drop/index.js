
// let item;

// document.addEventListener('dragstart', (e) => {
//     item = e.target
// })

// document.addEventListener("dragover", (e) => {
//     e.preventDefault()
// })
// document.addEventListener("drop", (e) => {
//     if (e.target.getAttribute("data-draggable") == "target") {

//         e.preventDefault()
//         e.target.appendChild(item)
//     }
// })

// document.addEventListener("dragend", () => (item = null))


// try {
//     maFonction()
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("je suis là")
// }


// function isValideJSON(text) {
//     try {
//         JSON.parse(text)
//         return true
//     } catch {
//         return false
//     }
// }
// console.log(isValideJSON(89))

function isNumber(num) {
    if (isNaN(num)) {
        throw "il y a une erreur"
    } else {
        console.log("c'est un chiffre")
    }
}

try {
    isNumber("mù")
} catch (err) {
    console.log(err)
}




