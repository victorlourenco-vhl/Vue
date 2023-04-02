const { createApp } = Vue

createApp({
    data() {
        return {
            nome: '',
            idade: '19',
            input_name: ''
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.nome = this.input_name;
            console.log(this.input_name);
        }
    }
}).mount('#app')