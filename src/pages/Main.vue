<template>
<div class="text-h3 flex justify-center q-pa-md ">Товары</div>

  <div class="fit row wrap justify-center items-start content-start">
    
    <div class="mw200">
      <q-list separator bordered padding class="rounded-borders text-primary " >

        <q-item clickable v-ripple @click="openMain()">
          <q-item-section avatar>
            <q-icon name="circle" size="12px" />
          </q-item-section>

          <q-item-section class="text-subtitle1 text-weight-medium">Все</q-item-section>
        </q-item>
      
        <q-item v-for="head in heads" :key="head.id" clickable v-ripple @click="openFilter(head)">
          <q-item-section avatar>
            <q-icon name="circle" size="12px"/>
          </q-item-section>

          <q-item-section class="text-subtitle1 text-weight-medium">{{head.design.title}}</q-item-section>
        </q-item>

      </q-list>
    </div>
      
    <div class="col-8 w600">
      <q-markup-table bordered class="q-mx-md q-mb-lg" >
        <thead>
          <ul class="main-head q-px-md">
            <li>Продукт</li>
            <li>Осталось</li>
            <li>1 штука</li>
            <li>Покупка</li>
          </ul>
        </thead>
        <tbody >
          <q-markup-table bordered class="q-ml-md q-mr-md full-width" >
            <tbody v-for="item in items" :key="item.id" class="rel">
              <tr>
                <th colspan="5">
                  <div class="row no-wrap items-center justify-center bggr">
                    <div class="text-h6 ">{{item.design.title}}</div>
                  </div>
                </th>
              </tr>
              
              <tr v-for="desc in item.items" :key="desc.id">
                <td class="text-left" >{{desc.design.title}}</td>
                <td class="text-right" >{{desc.setting.count}}</td>
                <td class="text-right" >{{formatMoney(counting(desc).price.amount)}} {{desc.price.currency}}</td>
                <td class="text-right" >
                  <q-btn color="white" text-color="black" @click="openItem(item);openPay(desc);openDesc(desc);validate(openDesc(desc).setting.count)">Купить</q-btn>
                </td>
              </tr>

            </tbody>
      </q-markup-table>
        </tbody>
      </q-markup-table>
    </div>
    
  
  </div>
  
    <q-dialog v-model="pay" full-height>
      <q-card class="column full-height full-width" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Покупка</div>
        </q-card-section>

        <q-card-section  class="col q-pt-none">
          {{openItem(item).design.title}} : {{desc.design.title}}
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Email:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Telegram:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Контакты:" />
        </q-card-section>

        <q-card-section class="col q-pt-none flex justify-between items-center">
          <q-badge color="blue q-ma-sm text-h6">
            Осталось : {{openDesc(desc).setting.count}}
          </q-badge>

          <q-input type="number" @keydown="validate(openDesc(desc).setting.count);isHidden=false" @keyup="validate(openDesc(desc).setting.count)" @focus="counting(desc);" :min="openDesc(desc).setting.count - (openDesc(desc).setting.count - 1)" :max="openDesc(desc).setting.count" v-model="num" filled style="width: 200px"/>
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Способ оплаты" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Код купона:" />
        </q-card-section>

        <q-card-section class="col q-pt-none" color="green">
          <q-badge color="blue q-ma-sm text-h6" v-bind:class="{hidden : isHidden}">
            К оплате: {{formatMoney(parseInt(counting(desc).price.amount)*num) }} {{desc.price.currency}}
          </q-badge>
          
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-teal">
          <q-btn rounded flat label="Перейти к оплате" v-close-popup @click="pay = false; "/>
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>

<script>
import {ref } from 'vue'
import { axios } from 'boot/axios'

export default {
  data(){
    return{
      items:[],
      heads:[],
      isHidden:true
    }
    
  },
  setup () {
    return {
      separator: ref('horizontal'),
      pay: ref(false),
      
      num:ref({
        min:0,
        max:1,
        
      }),
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
    }
  },
  mounted(){
    this.onreadyStateChange();
  },
  methods:{
    openPay(desc){
      this.desc = desc;
      this.pay = true;
      console.log(this.num)
    },
    validate(count){
      if(this.num > count){
        this.num = count;
      }
      
    },
    nanPrice(price){
      if(this.num !== NaN){
        return price;
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
    counting(desc){
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
      this.items.push(item);
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
        .catch(console.log('error'))
    }
  }      
}

</script>
<style lang="scss" scoped>
.bg{
  background-color: #51bbff;
}
.btn{
  background-color: #fff;
}
.my-menu-link{
  color: white;
  background-color: #F2C037;
}
.main-head{
  display: flex;
  list-style-type: none;
  justify-content: space-between;
}
.bggr{
  background-color: rgba(245, 239, 239, 0.788);
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