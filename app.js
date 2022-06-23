console.log("Objetos y Librerias de Vue.Js")
console.log(Vue)

const app = Vue.createApp({
    //Vue utiliza una representación declarativa {{}} para evaluar/ejecutar expresiones JS
    template: `
    <h1>
    Hola Mundo desde Vue.js
    </h1>
    <p>Expresión JS</p>
    <p>{{1+1}}</p>
    <h2>Arreglo</h2>
    <p>{{[1,2,3,4,5]}}</p>
    <p>Objeto</p>
    <p>{{ {nombre:"Leonardo", apellido:"Suniga"} }}</p>
    <h2>Función ternaria</h2>
    <p>{{ true ? 'Activo' : 'Inactivo' }}</p>
    `
})

app.mount("#miApp")