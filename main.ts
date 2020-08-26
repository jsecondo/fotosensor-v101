input.onButtonPressed(Button.A, function () {
    mostrar = 1
    while (mostrar < nivel_luz.length) {
        basic.showString("" + mostrar + ";" + nivel_luz[mostrar])
        mostrar += 1
    }
})
input.onButtonPressed(Button.B, function () {
    mostrar = 1
    serial.writeLine("DATOS DE FOTOSENSOR GRUPO, 2XX")
    serial.writeLine("SALON," + "21" + ",PLANTA BAJA")
    serial.writeLine("FECHA, 25/08/2020")
    serial.writeLine("INICIO, 07:50:00")
    serial.writeLine("Toma cada," + periodo + ",segundos")
    while (mostrar < nivel_luz.length) {
        serial.writeLine("" + mostrar + "," + nivel_luz[mostrar])
        mostrar += 1
    }
    serial.writeLine("Subgrupo:" + "2XX - YY" + ",Integrantes:")
})
let nivel_luz: number[] = []
let mostrar = 0
let periodo = 0
basic.clearScreen()
periodo = 5
let contador = 1
let inicio = "HORA INICIO:" + "07:50:00"
basic.forever(function () {
    basic.pause(periodo * 1000)
    basic.showString("" + (input.lightLevel()))
    nivel_luz[contador] = input.lightLevel()
    contador += 1
})
