const { createApp } = Vue;

let vm = createApp({
    data() {
        return {
            frame:"Ion",
            lname:"Popescu",
            address: "Brasov",
            maessage: "Imi place JavaScript"
        }
    },
    methods: {
        myName: function () {
            //return "Eu ma numesc" + this.fname + "" + this.lname + " si usnt din " + this.address;
            return `Eu ma numesc ${this.fname} ${this.lname}
            si sunt din ${this.address}`;
        }
    }
}).mount('#app');

