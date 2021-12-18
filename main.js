const app = Vue.createApp({
    data(){
        return{
            cart:0,
            product: 'Socks',
            description: "This is the description",
            inventory: 0,
            brand: 'Vue Mastery',
            selectedVariant: 0,
            variants:[
                {
                    id:2234, color:'green', image:'./assets/images/socks_green.jpg', quantity: 50, onSale:true
                },
                {
                    id:2235, color:'blue', image:'./assets/images/socks_blue.jpg', quantity: 0, onSale:false
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
        updateVariant(index){
            this.selectedVariant = index
            // console.log(index)
        }
    },
    computed:{
        title(){
            return this.brand+' '+this.product 
        },
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        onSale(){
            return this.variants[this.selectedVariant].onSale
        }
    }
})