### Testing en Javascript

El testing nos permite detectar defectos en el código.

Cuando creemos que una función tiene un defecto, escribimos un test para verificar que falla y después arreglamos el código original.

Ejemplo:

```
let saludar = (nombre) => "Hola, " + nombre;
```

En este caso, nos damos cuenta de que la función puede no comportarse como esperamos: si no le pasamos un nombre y hacemos `saludar()`, el resultado será `"Hola, undefined"`.

Para arreglar esto, escribimos un test que manifieste el comportamiento esperado cuando no le pasemos ningún nombre a la función: 


```
describe('la función saludar', () => {
  it('devuelve el saludo con el nombre', () => {
    expect(saludar("Juan")).to.equal("Hola, Juan"); // Este test pasa ✅
  });

  it('funciona también cuando no le pasamos ningún nombre', () => {
    expect(saludar()).to.equal("Hola!"); // Este test falla ❌
  });
})
```

Por tanto, para "arreglar" nuestro test, modificamos el código original de la función:

```
let saludar = (nombre) => {
    if (nombre === undefined) {
        return "Hola!";
    }
    return `Hola, ${nombre}`;
}
```

y ahora deberíamos ver el test pasar.


### Ejercicio: 

La función `fileExtension` contiene un bug. Si nuestro archivo contiene puntos en el nombre, la extensión no se calculará correctamente. Por ejemplo, la extensión del archivo `entrega1.2.pdf` debería ser `pdf`.

[ ] Asegúrate de entender lo que hace la función y los tests

[ ] Escribe un test que verifique que la función no se comporta correctamente cuando el nombre del archivo tiene puntos. Este test debería fallar mientras exista el bug.

[ ] Corrige el código para que se extraiga la extensión del archivo correctamente y verifica

