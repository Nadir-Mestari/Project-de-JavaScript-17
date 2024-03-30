
const fusion = require("./fusionArrey")

test("Je fusionne des tableaux", () => {
    let arrey1 = [6, 8]
    let arrey2 = [9, 8]

    expect(fusion(arrey1, arrey2)).toEqual([6, 8, 9, 8])
})