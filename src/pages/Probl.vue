<template>
<div class="flex justify-center">
  <q-btn class="q-ma-sm" color="primary" label="Все" @click="products = [],getProducts(0)" />
</div>
<div class="q-pa-md justify-center col mw700">
  <div class="col" v-for="prod in products" :key="prod.id">
      <p class="text-h5 flex justify-center items-center colorD">{{prod.design.title}}</p>
      <div class="row flexdir">
        <q-banner  
        rounded
        class="q-ma-sm bg-grey-3 flex justify-beetween"
        v-for="item in prod.items" :key="item.id"
        >

          

          <div class="text-h6">
            {{definesType(item)}}
            <q-badge label="Подкатегория" class="sub-category q-mt-none" v-if="item.type == 0"/>
          </div>

          <template v-slot:action>
            <div class="price" v-if="item.type !== 0">
              {{formatMoney(item.price.amount) + ' ' + item.price.currency}}
            </div>
            <q-btn color="primary" label="Купить" @click="openPay(prod,item)" v-if="item.type !== 0" />

            <q-btn color="primary" label="Смотреть" @click="openSubCategory(item.id , item.category_id )" v-if="item.type == 0" />
          </template>

          

        </q-banner>
      </div>
      
  </div>
</div>
    <d-pay v-model="pay" :desc='item' :item='prod' :num='1'/>
</template>

<script>
import { reactive, ref } from 'vue'
import { axios } from 'boot/axios'
import dPay from 'src/components/dPay.vue'

export default {
  components:{
    'd-pay': dPay
  },
  data(){
    return{
      products:[],
    }
  },
  setup () {
    return {
      pay: ref(false)
    }
  },
  created(){
    this.getProducts(0);
  },
  methods:{
    openPay(prod,item){
      this.prod = prod;
      this.item = item;
      this.pay = true;
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
    definesType(element){
      if(element.type !== 0){
        return element.design.title
      }else{
        return element.design.title
      }
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
      
    }
  }
}
</script>
<style lang="scss" scoped>
.q-banner__actions.col-all .q-btn-item {
  margin: 0 !important;
}
.price{
  background-color: $primary;
  color: white;
  padding: 8px;
  border-radius: 3px;
  margin-right: 10px;
}
.q-btn{
  text-transform: none !important;
}
.relative{
  position: relative;
}
.sub-category{
  transform: translateY(-10px);
  background-color: rgb(112, 131, 189);
  font-size: 13px;
}
.flexdir{
  flex-direction: column;
}
.colorD{
  border-radius: 6px;
  height: 60px;
  background-color: rgb(219, 219, 219);
}
</style>