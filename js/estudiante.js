const lista = [
    { nombre: 'Leonardo', apellido: 'Suniga', edad: 22 },
    { nombre: 'Pepito', apellido: 'Teran', edad: 20 },
    { nombre: 'Juanito', apellido: 'Perez', edad: 36 },
    { nombre: 'Andrea', apellido: 'Sanchez', edad: 15 },
    { nombre: 'Daniela', apellido: 'Cedeño', edad: 21 },
    { nombre: 'Carlos', apellido: 'Duarte', edad: 19 }
]

const profes = [
    {nombre: 'Jose', apellido: 'Garcia', edad:40, genero:'M', sueldo: 1000},
    {nombre: 'Maria', apellido: 'Vanegas', edad:35, genero:'F', sueldo: 970},
    {nombre: 'Nicolas', apellido: 'Sanchez', edad:45, genero:'M', sueldo: 1456},
    {nombre: 'Genesis', apellido: 'Aguirre', edad:31, genero:'F', sueldo: 770},
    {nombre: 'Alexa', apellido: 'Montero', edad:60, genero:'F', sueldo: 2000}
]

const app = Vue.createApp({
    data() {
        return {
            lista,
            profes
        }
    },
    methods: {
        agregarEstudiante() {
            this.lista.unshift(  { nombre: 'Anthonny', apellido: 'Montero', edad: 19 })
        },
        agregarProfes(){
            this.profes.unshift({ nombre: 'Jorge', apellido: 'Mateus', edad:52, genero:'M', sueldo: 1450})
        }
    }
})

app.mount('#myApp')