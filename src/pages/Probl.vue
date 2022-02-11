<template>
<div class="mw1000 flex">
  <q-btn flat class="q-ma-sm" color="primary" label="Все" @click="products = [],getProducts(0)" />
  <!-- <q-input rounded borderless v-model="searchItem" input-class="text-left" class="custom-input q-ma-none">
          <template v-slot:append>
            <q-icon v-if="searchItem === ''" name="search" />
            <q-icon v-else name="clear" class="cursor-pointer" @click="searchItem = ''" />
          </template>
  </q-input> -->
</div>
<!-- <q-banner v-model="error">
  <p>Ошибка загрузки.</p>
  <p>Пожалуйста, обновите страничку!</p>
</q-banner> -->
<div class="q-pa-md justify-center col mw1000">
  <div class="col " v-for="prod in products" :key="prod.id">
      <p class="text-h5 flex justify-start items-center custom-header q-mb-sm q-ml-sm q-mt-xl">{{prod.design.title}}</p>

      <q-separator horizontal class="custom-separator"/>

      <div class="row wrap q-pt-md " >
        <q-banner  
        rounded style="width:300px;"
        class="q-ma-sm rounded-borders bg-grey-1 custom-border"
        v-for="item in prod.items" :key="item.id"
        >
          <div class="text-h6 flex justify-between">
            {{item.design.title}}
            <!-- <q-checkbox
              v-model="val"
              checked-icon="star"
              unchecked-icon="star_border"
              
            /> -->
          </div>

          <t-desc :item='item'/>

          <template v-slot:action class="flex justify-between">
            <div class="price" v-if="item.type !== 0">
              {{formatMoney(item.price.amount) + ' ' + formatPrice(item.price.currency)}}
            </div>
            <q-btn flat color="primary" label="Купить" v-if="item.type !== 0" />

            <q-btn flat color="primary" label="Смотреть" @click="openSubCategory(item.id , item.category_id )" v-if="item.type == 0" />
          </template>

        </q-banner>
      </div>
      
  </div>
</div>
</template>

<script>
import { reactive, ref } from 'vue'
import { axios } from 'boot/axios'
import dPay from 'src/components/dPay.vue'
import typeDescription from 'src/components/typeDescription.vue'

export default {
  components:{
    't-desc': typeDescription,
    // 'd-pay': dPay,
  },
  data(){
    return{
      
    }
  },
  setup () {
    return {
      products:ref([]),
      pay: ref(false),
      error:ref(false),
      searchItem:ref(''),
      val: ref(true)
    }
  },
  created(){
    this.getProducts(0);
  },
  methods:{
    openPay(prod,item){
      this.prod = prod;
      this.item = item;
      // this.pay = true;
    },
    async openSubCategory(id ,category){

      this.products = [];

      axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk',`bot_id=30219&category_id=${category}`)
      .then(response => {
        for(let item in response.data.data){
          this.products.push(response.data.data[item])
        }
        this.products = this.products.filter(prod => prod.type == 0 && prod.id == id)
      })
      
      
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
    async getProducts(category){
     
      axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk',`bot_id=30219&category_id=${category}`)
      .then(response => {
        for(let item in response.data.data){
          this.products.push(response.data.data[item])
        }
      })
      // .catch(error =>{
      //   this.error = true
      // })
      
    }
  }
}
</script>
<style lang="scss" scoped>
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