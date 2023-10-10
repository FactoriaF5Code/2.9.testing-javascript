"use strict"
const chai = window.chai
const expect = chai.expect

/// Esta parte del archivo contiene el código
/// de tres funciones.

/// genera un saludo
let saludar = (nombre) => {
    if (nombre === undefined) {
        return "Hola!";
    }
    return `Hola, ${nombre}`;
}

/// devuelve la extensión de un archivo
let fileExtension = (fileName) => {
    if (fileName.includes(".")) {
        return fileName.split(".")[1];
    }
    return "";
}



describe('la función saludar', () => {
    it('devuelve el saludo con el nombre', () => {
        expect(saludar("Juan")).to.equal("Hola, Juan");
    });

    it('funciona también cuando no le pasamos ningún nombre', () => {
        expect(saludar()).to.equal("Hola!");
    });
})

describe('la función fileExtension', () => {
    it('devuelve la extensión de un archivo pdf', () => {
        expect(fileExtension("myfile.pdf")).to.equal("pdf");
    })
    it('devuelve la extensión de un archivo png', () => {
        expect(fileExtension("myfile.png")).to.equal("png");
    })
    it('si el archivo no tiene extensión, no devolvemos nada', () => {
        expect(fileExtension("myfile")).to.equal("");
    })
})
