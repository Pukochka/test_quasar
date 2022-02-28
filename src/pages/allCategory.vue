<template>
    <q-btn color="primary" icon="check" label="OK" @click="con()" />
    <div  v-for="(item, index) in products" :key="index" >
        <div v-if="item.type !== 0">{{item.design.title}}</div>
    </div>
    
</template>
<script>
import {ref} from 'vue'
import { axios } from 'boot/axios'
export default {
    setup(){
        return{
            categoryies:ref([]),
            products:ref([]),
        }
    },
    created(){
        this.getProd(null,0, true ,true)
    },
    methods:{
        con(){
            console.log(this.categoryies)
            console.log(this.products)
        },
        async getProd(type , category , init , dnt){
            axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk',`bot_id=30219&category_id=${category}`)
            .then(response => {
                
                for(let item in response.data.data){
                    this.categoryies.push(item)
                    this.products.push(response.data.data[item])
                }
                


            })
        }
    }
}
</script>