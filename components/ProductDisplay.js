app.component('product-display', {
    props:{
        premium:{
            type:Boolean,
            required:true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" alt="">
      </div>
      <div class="product-info">
        <h1>{{title}}</h1>
        <p v-if="inStock">
          In Stock
        </p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{shipping}} </p>
        <div
        class="color-circle"
        :style="{backgroundColor: variant.color}" 
        v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)">
          {{}}
        </div>
        <button class="button" v-on:click="addToCart">Add to Cart</button>
        <button class="button" v-on:click="removeFromCart">Remove</button>
      </div>
    </div>
  </div>`,
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
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    removeFromCart(){
        this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
    },
    shipping(){
        if(this.premium){
            return 'free'
        }else{
            return 2.99
        }
    }
}
})