# Reto JavaScript Pair Programming PIMEC 2023

[URL del challenge](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI)
[Demo de la app](https://omiras.github.io/interactive-rating-component-main/)

Os adjunto la demo para que veaís fácilmente como funciona la app. No inspeccioneis el código, ni siquiera por que hay _algo_ que no os sale. Prefiero que me llaméis a mi.

1. Escribir con lenguaje natural una idea de lo que tiene que ocurrir en esta aplicación. Podéis escribirlo en el mismo README.md más abajo
2. En principio todo el CSS necesario y maquetación ya está implementado. Pero puedes añadir tus clases CSS, estilos en línea a partir de la propiedad .style, etc.
3. Fijate en el atributo `data-rating="1"` de cada DIV. Es un atributo comunmente utilizado para obtener datos del elemento clicado, seleccionado, etc. Es más útil de usar que no el atributo _id_
4. No os imprescindible usar variables de estado, pero puede ser una buena opción tener una variable para almacenar la puntuación que ha escogido el usuario.
5. Bonus! Puedes hacer que al seleccionar un valor, se quede marcado en naranja.

## Pregunta 1: Describe con lenguaje natural que tiene que hacer la app.

- On hover de los números cambiar la clase de los números (hecho)
- On click de los números activar el botón submit (mouse tiene que convertirse en pointer, el color cambia a naranja y se puede clickar)
- al clickar submit vamos a la pantalla Thank You! 
- guardar el número seleccionado y mostrarlo en la pantalla Thank you!
- bonus ya veremos