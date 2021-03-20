## Puppeteer
  # que es?
    * es una librería de Node
    * que está desarrollada por Google
      
  # para que sirve?
    * automatizar una tarea monótona y repetitiva sobre los navegadores de Google.
    * para la extraccion de datos

  # como funciona
    * casi todas las peticiones resuelven promesas
    * se puede usar then().catch() o async await
      . si se utiliza el then().catch() se generaran muchas anidaciones.
      . si se utiliza el async await  evitaremos las anidaciones.

  # desventajas
    * no permite automatizar pruebas en navegadores que no sean Chrome o Chromium
    * actualmente sólo permite su uso en JavaScript para Node.js

  # [Funciones Ejecutables](http://www.etnassoft.com/2011/03/14/funciones-autoejecutables-en-javascript/)
    * funcion anonima, genera un hambito y se auto ejecuta
      (function(){})();

 # Requerimiento para usar
    Previamente a la implementación, es necesario disponer
    * Node.js
    * Chrome

 # Instalacion
    * npm i puppeteer
    * yarn add puppeteer

  # networkidle0 
    resulta útil para las SPA que cargan recursos con fetchsolicitudes.
  # networkidle2 
    resulta útil para páginas que realizan encuestas largas o cualquier otra actividad secundaria.

## para que practiquen 
  * loguearse a bumeran como candidato

  * logearse a github, buscar repos y mostrar los nombres del proyecto, duenios y estrellas


## Estructura para un backend 

  src
    Controlllers
      * agrupar todas los controladores (funciones) que se podran hacer uso desde una api
    datalayer 
      * configuraciones para las conecciones de las bd o servicios externos
      connection
        * configuraciones para conectar la bd o servicios ( uso de los envs)
        * coneccion con servicios externos ( amazon, postgress )
      models
        * esquemas de las bd mongo
    service
      api
        controllers
          * agrupa el enrrutamiento para los src/controllers
        routes
          * rutas disponibles
    utils
      * funciones reutilizables

