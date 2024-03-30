
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const reset = document.getElementById("reset")

function getMousePos(e) {
    const pos = canvas.getBoundingClientRect();

    return {
        x: e.clientX - pos.left,
        y: e.clientY - pos.top
    }


}

function Mousemove(e) {
    const mousePos = (getMousePos(e))
    ctx.lineTo(mousePos.x, mousePos.y)
    ctx.stroke()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 14

}


canvas.addEventListener("mousedown", (e) => {
    e.preventDefault();
    const mousePos = (getMousePos(e))
    ctx.beginPath();
    ctx.moveTo(mousePos.x, mousePos.y)

    canvas.addEventListener("mousemove", Mousemove)
    canvas.addEventListener("mouseup", () => {
        canvas.removeEventListener("mousemove", Mousemove)

    })


});
reset.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})


