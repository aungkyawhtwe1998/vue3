const app = Vue.createApp({
    data(){
        return{
            product: 'Socks',
            description: "This is the description",
            image:"./assets/images/socks_blue.jpg",
            inventory: 1000,
            onSale: true
        }
    }
})