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
        }
    },
    methods: {
        agregarEstudiante() {
            this.lista.unshift(  { nombre: 'Anthonny', apellido: 'Montero', edad: 19 })
        }
    }
})

app.mount('#myApp')