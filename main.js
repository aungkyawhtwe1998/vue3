const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'Socks',
            description: "This is the description",
            image : './assets/images/socks_blue.jpg',
            inventory: 0,
            onSale: true,
            variants:[
                {
                    id:2234, color:'green', image:'./assets/images/socks_green.jpg'
                },
                {
                    id:2235, color:'blue', image:'./assets/images/socks_blue.jpg'
                }
            ]
        }
    },
    methods:{
        addToCart(){
            this.cart +=1
        },
        removeFromCart(){
            this.cart -=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }
})