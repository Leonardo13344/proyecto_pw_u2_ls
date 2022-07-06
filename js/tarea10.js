const lista = [
    { nombre: "Barrer", des: "Barrer toda la casa", dur: 2 },
    { nombre: "Deberes", des: "Deberes Taller, Progra", dur: 2}
]

const app = Vue.createApp({
    data() {
        return {
            lista,
            nombre: '',
            des: '',
            dur: ''
        }
    },
    methods: {
        agregarTarea(){
            this.lista.push({ nombre: this.nombre, des: this.des, dur: this.dur})
            this.nombre = ''
            this.des = ''
            this.dur = ''
        }
    }

})

app.mount('#myApp')