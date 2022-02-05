<template>
    <div class="justify-center">
      <div class="q-ma-md flex wrap justify-center">

        <q-list class="flex wrap text-primary mw700">

          <q-item class="hover"
          clickable 
          v-ripple 
          @click="openMain()
          ">
            <q-item-section >
              <q-icon name="circle" size="8px" />
            </q-item-section>

            <q-item-section class="text-subtitle1 text-weight-medium">Все</q-item-section>
          </q-item>

          <q-item 
          v-for="head in heads"
          :key="head.id" 
          clickable 
          v-ripple 
          @click="openFilter(head)"
          class=""
          >
             
            <q-item-section class="text-subtitle1 text-weight-medium">{{head.design.title}}</q-item-section>
            <q-badge color="white" class="text-blue q-pa-sm">
              {{head.items.length}}
            </q-badge>
          </q-item>

        </q-list>

      </div>

      <div class="mw900 " v-for="item in items" :key="item.id">

        <div class="text-h5 text-weight-bold q-pt-lg q-pb-sm">{{item.design.title}}</div>

        <div class="flex wrap" >
          
          <q-card class="my-card q-ma-sm" v-for="desc in item.items" :key="desc.id">
            <q-card-section vertical>
              <div class="bgc rounded-borders"></div>

              <q-card-section class="mw200">
                {{desc.design.title}}
              </q-card-section>
            </q-card-section>

            <q-separator />

            <q-card-actions class="justify-between">
              <q-btn flat>
                {{formatMoney(openDesc(desc).price.amount)}} {{desc.price.currency}}
              </q-btn>
              <q-btn flat color="primary"
              @click="num=0;
              openItem(item);
              openPay(desc);
              openDesc(desc);
              validate(openDesc(desc).setting.count)"
              >
                Купить
              </q-btn>
            </q-card-actions>
          </q-card>

        </div>

      </div>
        
      

    </div>
    
    <q-dialog  v-model="pay" full-height>
      <q-card class="column full-height full-width" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Покупка</div>
        </q-card-section>

        <q-card-section  class="col q-pt-none">
          {{openItem(item).design.title}} : {{desc.design.title}}
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="email" label="Email:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="telegram" label="Telegram:" />
        </q-card-section>

        <!-- <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Контакты:" />
        </q-card-section> -->

        <q-card-section class="col q-pt-none flex justify-between items-center">
          <q-badge color="blue q-ma-sm text-h6">
            Осталось : {{openDesc(desc).setting.count}}
          </q-badge>

          <q-input type="number" 
          @keydown="validate(openDesc(desc).setting.count)"
          @keyup="validate(openDesc(desc).setting.count)"
          :min="openDesc(desc).setting.count - (openDesc(desc).setting.count - 1)" 
          :max="openDesc(desc).setting.count" 
          v-model="num" 
          filled 
          style="width: 200px;height:50px !important;"/>

        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Способ оплаты" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="sale" label="Код купона:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-badge color="blue q-ma-sm text-h6" >
            К оплате: {{formatMoney(parseInt(openDesc(desc).price.amount)*num) }} {{desc.price.currency}}
          </q-badge>
          
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-blue">
          <q-btn rounded flat label="Перейти к оплате"  @click="pay = false; "/>
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
      isHidden:false,
      r:[],
    }
    
  },
  setup () {
    return {
      separator: ref('horizontal'),
      pay: ref(false),
      email: ref(''),
      telegram: ref(''),
      sale: ref(''),
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
      this.items.push(item);
      console.log(this.r)
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
.mw700{
  max-width: 700px;
}
.mw900{
  max-width: 900px;
  margin: 0 auto;
}
.mw200{
  max-width: 200px;
}
.bgc{
  width: 200px;
  height: 150px;
  background-color: $blue;
}
.hover:hover{
  background-color: rgb(111, 170, 224);
}
</style>