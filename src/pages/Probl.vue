<template>
<div class="mw1000 flex">
  <q-btn flat class="q-ma-sm" color="primary" label="Все" @click="products = [] , getProducts(null , 0 , false)" />
  <!-- <q-btn color="primary" icon="check" label="OK" @click="cl()" /> -->
</div>
<div class="q-pa-md justify-center col mw1000">
  <div class="col " v-for="prod in products" :key="prod.id" >
      <p class="text-h5 flex justify-start items-center custom-header q-mb-sm q-ml-sm q-mt-xl">
        {{prod.design.title}}
        </p>

      <q-separator horizontal class="custom-separator"/>

      <div class="row wrap q-pt-md " >
        <q-banner  
        rounded style="width:300px;"
        class="q-ma-sm rounded-borders bg-grey-1 custom-border relative"
        v-for="(item , index) in prod.items" :key="index"
        >
          <div class="text-h6 flex justify-between">
            
            {{item.design.title}}
            <q-btn 
              flat 
              round 
              class="custom-favorite"
              @click="addInBasket(item.id , item);" 
              ref="fav"
              :class="{color : favorite_id.includes(item.id)}" 
              v-if="item.type !== 0">
              <q-icon name="shopping_cart" size="16px"/>
            </q-btn>

            <q-btn 
              flat 
              round 
              class="custom-favorite"
              v-if="item.type == 0">
              <q-icon name="more_horiz" size="20px"/>
            </q-btn>
            

          </div>

          <t-desc :item='item'/>

          <template v-slot:action class="flex justify-between">
            <div class="price" v-if="item.type !== 0">
              {{formatMoney(item.price.amount) + ' ' + formatPrice(item.price.currency)}}
            </div>
            <q-btn flat color="primary" label="Купить" v-if="item.type !== 0" />

            <q-btn flat color="primary" label="Смотреть" 
            @click="products = []; getProducts(item.id,  item.category_id , true)" v-if="item.type == 0" />
          </template>

        </q-banner>
      </div>
      
  </div>
</div>
</template>

<script>
import { reactive, ref, renderList } from 'vue'
import { axios } from 'boot/axios'
import typeDescription from 'src/components/typeDescription.vue'

export default {
  components:{
    't-desc': typeDescription, 
  },
  data(){
    return{
      products : [],
      validProd : [],
    }
  },
  setup () {
    return {
      
      favorite_id:ref([]),
      favorite_item:ref([]),

      sel:ref([])
    }
  },
  mounted(){
    
    

  },
  created(){
    this.getProducts(null , 0 , false)
  
    const favorite_id = localStorage.getItem('favorite_id');
    const favorite_item = localStorage.getItem('favorite_item');
    
    if(favorite_id){
      this.favorite_id = JSON.parse(favorite_id);
      console.log(this.favorite_id)
    }

    if(favorite_item){
      this.favorite_item = JSON.parse(favorite_item);
      for(let item of this.favorite_item){
        console.log(JSON.parse(item))
        // this.favorite_item.push(JSON.parse(item))
      }
      console.log(this.favorite_item)
    }
    
  },
  methods:{
    cl(){
      window.localStorage.clear();
    },
    addInBasket(selected_id , selected_item ){

      !this.favorite_id.includes(selected_id) ? 
      this.favorite_id.push(selected_id) : this.favorite_id = this.favorite_id.filter(mas => mas !== selected_id)

      !this.favorite_item.includes(JSON.stringify(selected_item)) ? 
      this.favorite_item.push(JSON.stringify(selected_item)) : this.favorite_item = this.favorite_item.filter(mas => mas !== JSON.stringify(selected_item))

      localStorage.setItem('favorite_id',JSON.stringify(this.favorite_id))
      localStorage.setItem('favorite_item',JSON.stringify(this.favorite_item))

      console.log(localStorage.getItem('favorite_item'))
      console.log(this.favorite_item)
      
    },
    formatPrice(data){
      let val = '';
      switch(data){
        case ('RUB'):
          val = '₽';
          break;
        case ('USD'):
          val = '$';
          break;
        case ('EUR'):
          val = '€';
          break;
        case ('UAH'):
          val = '₴';
          break;
        case ('KZT'):
          val = '₸';
          break;              
      }
      return val;
    },
    formatMoney(data){
      const numberValue = Number.prototype.toFixed.call(parseFloat(data) )           
      return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    },
    async getProducts(id, category , subCategory){
      this.products = [];

       axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk',`bot_id=30219&category_id=${category}`)
        .then(response => {

          for(let item in response.data.data){
            this.products.push(response.data.data[item])
            
          }

          if(subCategory){
            this.products = this.products.filter(prod => prod.type == 0 && prod.id == id)
          }
        })
    },
    
  }
}
</script>
<style lang="scss" scoped>
.color{
  color: $primary;
}
.custom{
  &-header{
    color:rgb(75, 143, 233);
    font-weight: 700;
  }
  &-border{
    border: 1px solid #0000001f;
  }
  &-input{
    background-color: rgb(206, 200, 200);
  }
  &-favorite{
    position: absolute;
    right:3px;
    top: 3px;
  }
  
}
.q-banner__actions.col-all .q-btn-item {
  margin: 0 !important;
}
.price{
  color: rgb(126, 123, 123);
  padding: 8px;
}
.q-btn{
  text-transform: none !important;
  font-weight: 600;
}
.relative{
  position: relative;
}
.flexdir{
  flex-direction: column;
}
</style>