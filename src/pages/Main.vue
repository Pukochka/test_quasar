<template >
<div class="text-h3 flex justify-center q-pa-md ">Товары</div>

  <div class="fit row wrap justify-center items-start content-start">
    
    <div class="mw200">
      <q-list separator bordered padding class="rounded-borders text-primary " >
            
        <q-item clickable v-ripple @click="openMain()">
          <q-item-section >
            <q-icon name="circle" size="12px" />
          </q-item-section>

          <q-item-section class="text-subtitle1 text-weight-medium">Все</q-item-section>
        </q-item>

        <q-skeleton class="q-ma-md" height="40px" v-if="items.length == 0"/>
        <q-skeleton class="q-ma-md" height="40px" v-if="items.length == 0"/>
        <q-skeleton class="q-ma-md" height="40px" v-if="items.length == 0"/>
        <q-skeleton class="q-ma-md" height="40px" v-if="items.length == 0"/>

        <q-item v-for="head in heads" :key="head.id" clickable v-ripple @click="openFilter(head)">
          <q-item-section avatar>
            <q-badge color="blue q-pa-sm">
              {{head.items.length}}
            </q-badge>
          </q-item-section>

          <q-item-section class="text-subtitle1 text-weight-medium">{{head.design.title}}</q-item-section>

          
        </q-item>

      </q-list>
    </div>
      
    <div class="col-8 w600">
      <q-markup-table bordered class="q-mx-md q-mb-lg" >
        <thead>
          <ul class="main-head q-px-md q-my-sm">
            <li class="custom_bor">Продукт</li>
            <li class="custom_bor">Осталось</li>
            <li class="custom_bor">1 штука</li>
            <li class="custom_bor">Покупка</li>
          </ul>
        </thead>
        <tbody >
          <q-markup-table bordered class="q-ml-md q-mr-md full-width" @change="skeleton()">
            <q-skeleton class="q-ma-md" height="150px" v-if="items.length == 0"/>
            <q-skeleton class="q-ma-md" height="150px" v-if="items.length == 0"/>
            <q-skeleton class="q-ma-md" height="150px" v-if="items.length == 0"/>
            <q-skeleton class="q-ma-md" height="150px" v-if="items.length == 0"/>
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
                <td class="text-right" >{{formatMoney(openDesc(desc).price.amount)}} {{desc.price.currency}}</td>
                <td class="text-right" >
                  <q-btn color="white" text-color="black" 
                  @click="num=0;
                  openItem(item);
                  openPay(desc);
                  openDesc(desc);
                  validate(openDesc(desc).setting.count)
                  "
                  >Купить</q-btn>
                </td>
              </tr>

            </tbody>
      </q-markup-table>
        </tbody>
      </q-markup-table>
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
          :max="openDesc(desc).setting.count" v-model="num" filled style="width: 200px;height:50px !important;"/>

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
      console.log(this.num)
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
    // skeleton(){
    //   if (this.heads.length !== 0) {
    //     this.isHidden = true
    //   }
    // },
    res(r){
      return r;
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
          this.r = response;
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