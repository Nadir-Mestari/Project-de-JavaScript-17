
function Tilo() {


    const canvas = document.getElementById("canvas")

    const aze = canvas.getContext("2d")

    aze.fillStyle = "rgb(259,56,98)"
    aze.fillRect(30, 70, 50, 50)

    aze.fillStyle = "rgba(7,98,87,0.3)"
    aze.fillRect(47, 8, 90, 65)
    aze.clearRect(45, 98, 76, 90)
    aze.strokeRect(56, 98, 90, 98)

    aze.fillStyle = "rgba(7,98,897,0.3)"
    aze.beginPath()
    aze.moveTo(100, 90)
    aze.lineTo(400, 98)
    aze.lineTo(784, 877)

    aze.fill()
}

window.addEventListener("load", Tilo())