# Proyecto final del curso de la UTN

## Instrucciones para la ejecucion:

- API

  - Abrir una terminal en la carpeta ./api
  - Ejecutar el comando: node index.js

- FrontEnd
  - Abrir otra terminal en la carpeta ./App
  - Ejecutar el comando: yarn
  - Ejecutar el comando: yarn start

## Requisitos del proyecto:

- Inicio: Al momento de ingresar a la app en la ruta base ‘/’
- Visualizar (como mínimo) un set de ítems disponibles para la compra o
  información.
- Contar con algún acceso visible a la vista de carrito que debe alojarse en
  el route /cart.
- Acceder a un menú desplegable que contendrá las categorías.
- Al clickear en una, debe navegar a la lista de productos o información de
  la misma mediante un route /categories.
- Flow: Al clickear un ítem del listado debe navegar a la ruta /item, y ver la
  descripción del producto (foto, precio, selector de cantidad). Si se ingresa a
  /item y el producto no existe, debemos responder un mensaje adecuado que
  indique algo relacionado a que el producto no existe.
- El cart debe ser accesible durante toda la experiencia y tener una indicación de
  la cantidad de items incluidos agregados.
- Checkout mínimo:
  - Items con sus cantidades.
  - Total de la orden.
  - Formulario para nombre, apellido y teléfono u otros datos necesarios.

### FLOW:

- Un usuario debe poder ingresar como visitante o mediante un login y navegar por
- los componentes.
- Si hay productos o imágenes, se debe poder ver la descripción, foto y precio e
  ingresarlo al carrito si se puede comprar.
- Debe tener al menos un formulario (login, contacto, suscripción, compra).
- Utilizar al menos 8 componentes.
- Utilizar estados, hooks, eventos, props.
- Deberá realizar al menos 2 llamadas a una API para obtener datos.
