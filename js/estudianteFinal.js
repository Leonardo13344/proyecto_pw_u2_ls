const lista = [
    { nombre: 'Leonardo', apellido: 'Suniga', edad: 22 },
    { nombre: 'Pepito', apellido: 'Teran', edad: 20 },
    { nombre: 'Juanito', apellido: 'Perez', edad: 36 },
    { nombre: 'Andrea', apellido: 'Sanchez', edad: 15 },
    { nombre: 'Daniela', apellido: 'Cedeño', edad: 21 },
    { nombre: 'Carlos', apellido: 'Duarte', edad: 19 }
]
const app = Vue.createApp({
    data() {
        return {
            lista,
            mensaje: "",
            apellido: "",
            edad:0
        }
    },
    methods: {
        agregarEstudianteI() {
            this.lista.unshift({ nombre: this.mensaje, apellido: this.apellido, edad: this.edad })
            this.mensaje = ''
            this.apellido = ''
            this.edad = ''
        },
        agregarEstudianteF() {
            this.lista.push({ nombre: this.mensaje, apellido: this.apellido, edad: this.edad })
            this.mensaje = ''
            this.apellido = ''
            this.edad = ''
        },
        agregarEstudiante(tipo){
            if( tipo === 'I'){
                this.lista.unshift({ nombre: this.mensaje, apellido: this.apellido, edad: this.edad })
            }else{
                this.lista.push({ nombre: this.mensaje, apellido: 'Fin', edad: 19 })
            }
            this.mensaje = ''
            this.apellido = ''
            this.edad = ''
        },
        eventoKey(event) {
            if (event.charCode === 13) {
                console.log('Si dispara el evento')
                console.log(event)
                this.lista.unshift({ nombre: this.mensaje, apellido: 'Montero', edad: 19 })
            }
        },
        eventoKeyDesestructurado({charCode, key}) {
            console.log(key)
            console.log(charCode)
            if (charCode === 13) {
                this.lista.unshift({ nombre: this.mensaje, apellido: 'Montero', edad: 19 })
            }
        },
        eventoFinal(){
            //Ejemplo de modificadores de eventos 
            //Entro al evento 
            this.lista.unshift({ nombre: this.mensaje, apellido: 'Montero2', edad: 19 })
        }
    }
})

app.mount('#myApp')