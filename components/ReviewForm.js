

app.component('review-form',{
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>

    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name">

    <label for="review">Review:</label>
    <textarea id="review" cols="30" rows="10" v-model="review"> </textarea>

    <label for="rating">Rating:</label>
    <select name="" id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <label for="recommend">Would you recommend this produc?</label>
    <select name="" id="recommend" v-model="recommend">        
        <option>Yes</option>
        <option>No</option>
    </select>


    <input class="button" type="submit" value="Submit">
    </form>
    `,
    data(){
        return{
            name:'',
            review:'',
            rating:null,
            recommend:null,
        }
    },
    methods:{
        onSubmit(){
            if(this.name ==='' || this.review ==='' || this.rating === null || this.recommend === null){
                alert('Review is incomplete. Please fill out every field.')
                return
            }
            let productReview ={
                name: this.name,
                review:this.review,
                rating:this.rating,
                recommend: this.recommend
            }
            // console.log(productReview)
            this.$emit('review-submitted', productReview)
            this.name= ''
            this.review=''
            this.rating=null
            this.recommend= null
        }
    }
})