<template >
<div class="text-h3 flex justify-center q-pa-md ">Товары</div>

  <div class="fit row wrap justify-center items-start content-start">
    
    <div class="mw200">
      <q-list separator bordered padding class="rounded-borders text-primary " >
            
        <q-item 
        clickable 
        v-ripple 
        @click="openMain()
        ">
          

          <q-item-section class="text-subtitle1 text-weight-medium">Все</q-item-section>

          <q-badge color='gray q-my-sm' >
            {{allItems()}}
          </q-badge>
        </q-item>

        <skeleton :height='h.h40' v-if="items.length == 0" />

        <q-item class="justify-center"
         v-for="head in heads"
        :key="head.id" 
        clickable 
        v-ripple 
        @click="openFilter(head)"
        >
        <q-item-section class="text-subtitle1 text-weight-medium">{{head.design.title}}</q-item-section>
          
            <q-badge color='gray q-my-sm'>
              {{head.items.length}}
            </q-badge>
          

          

          
        </q-item>

      </q-list>
    </div>
      
    <div class="col-8 w600">
      <q-markup-table bordered class="q-mx-md q-mb-lg" >
        <thead>
          <ul class="main-head q-px-md q-my-sm">
            <li class="">Продукт</li>
            <li class="">Осталось</li>
            <li class="">1 штука</li>
            <li class="">Покупка</li>
          </ul>
        </thead>
        <tbody >
          <q-markup-table bordered class="q-ml-md q-mr-md full-width">

            <skeleton :height='h.h150' v-if="items.length == 0" />

            <tbody v-for="item in items" :key="item.id" class="rel">
              <tr>
                <th colspan="4">
                  <div class="row no-wrap items-center justify-center bggr">
                    <div class="text-h6 ">{{item.design.title}}</div>
                  </div>
                </th>
              </tr>
              
              <tr v-for="desc in item.items" :key="desc.id">
                <td class="text-left" >{{desc.design.title}}</td>
                <td class="text-right" >{{desc.setting.count}}</td>
                <td class="text-right" >{{formatMoney(desc.price.amount)}} {{desc.price.currency}}</td>
                <td class="text-right" >
                  <q-btn color="white" text-color="black" 
                  @click="num=0;
                  openItem(item);
                  openPay(desc);
                  openDesc(desc);
                  validate(desc.setting.count)"
                  >Купить</q-btn>
                </td>
              </tr>

            </tbody>
      </q-markup-table>
        </tbody>
      </q-markup-table>
    </div>
    
    <d-pay v-model="pay" :desc='desc' :item='item' :num='0'/>
  
  </div>
  
    
</template>

<script>
import {ref } from 'vue'
import { axios } from 'boot/axios'
import skeleton from 'components/skeleton'
import dPay from 'components/dPay'

export default {
  data(){
    return{
      items:[],
      heads:[],
      isHidden:false,
      num:null,
      h:{
        h40:'40px',
        h150:'150px',
      },
    }
    
  },
  components:{
    skeleton,
    'd-pay':dPay
  },
  setup () {
    return {
      separator: ref('horizontal'),
      pay: ref(false),
      
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
    }
  },
  mounted(){
    this.onreadyStateChange();
  },
  
  methods:{
    allItems(){
      let count = 0;
      if(this.heads){
        for(let head of this.heads){
          count += head.items.length
          console.log(head.items.length)
          
        }
        return count;
      }
      
    },
    openPay(desc){
      this.desc = desc;
      this.pay = true;
    },
    validate(count){
      if(this.num > count){
        this.num = count;
      }
    },
    openItem(item){
      this.item = item;
      return item
    },
    openDesc(desc){
      this.desc = desc;
      return desc;
    },
    openMain(){
      this.items = [];
      this.items = this.heads
    },
    openFilter(item){
      this.item = item;
      this.items = [];
      this.items.push(item)
    },
    formatMoney(data){
      const numberValue = Number.prototype.toFixed.call(parseFloat(data) )           
      return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    },
    async onreadyStateChange(){
        axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk','bot_id=30219&category_id=0')
        .then(response => {
          for(let item in response.data.data){
            this.heads.push(response.data.data[item])
            this.items.push(response.data.data[item])
            console.log(this.items)
          }
        })
    }
  }      
}

</script>
<style lang="scss" scoped>
.custom_bor{
  border-radius: 5px;
  border: solid 1px rgb(206, 204, 204);
  padding: 4px;
}
.bg{
  background-color: #51bbff;
}
.btn{
  background-color: #fff;
}
.main-head{
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
.bggr{
  background-color: #f5efefc9;
  border-radius: 5px;
}
.flexdir{
  flex-direction: column;
}
.rel{
  position: relative;
}
.mw200{
  min-width: 200px;
}
@media (max-width:600px) {
  .w600{
    width: 100%;
    margin-top: 20px;
    margin: 0;
  }
}
</style>