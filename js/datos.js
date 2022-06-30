const app = Vue.createApp({
    //Options API
    data() {
        return {
            //Propiedades Reactivas
            mensaje: 'Hola Mundo',
            mensaje1: 'Mi primer Mensaje'
        }
    },
    methods:{
        cambiarMensaje(event){
            console.log(event)
            this.mensaje = 'texto Cambiado'
        },
        cambiarMensajeMayuscula(){
            this.mensaje1 = this.mensaje1.toUpperCase()
        },
        cambiarTodo(){
            this.cambiarMensaje()
            this.cambiarMensajeMayuscula()
        }
    }
})

app.mount('#myApp')