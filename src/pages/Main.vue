<template>
<div class="text-h2 flex justify-center q-pa-md ">Accraf-store</div>

  <div class="flex row wrap justify-center">
    
      <q-list separator bordered padding class="rounded-borders text-primary col-2" >

        <q-item clickable v-ripple @click="openFilter(all)">
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section>Все</q-item-section>
        </q-item>
      
        <q-item v-for="item in items" :key="item.id" clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section>{{item.design.title}}</q-item-section>
        </q-item>

      </q-list>
    
    <q-markup-table :separator="separator" flat bordered class="q-ml-md q-mr-md col-8 q-mb-lg" >
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
            <div class="full-width q-pa-md text-h6 bggr " style="width:100%;">{{item.design.title}}</div>
            <tr v-for="desc in item.items" :key="desc.id" class="">
              
              <td class="text-left" >{{desc.design.title}}</td>
              <td class="text-right" >{{desc.setting.count}}</td>
              <td class="text-right" >{{formatMoney(counting(desc).price.amount)}} {{desc.price.currency}}</td>
              <td class="text-right" >
                
                <q-btn color="white" text-color="black" label="Купить" @click="openPay(desc);openDesc(desc)"/>
              </td>
              <q-separator horizontal dark />
            </tr>

          </tbody>
    </q-markup-table>
      </tbody>
    </q-markup-table>
    
    
  </div>
    <q-dialog v-model="pay" full-height>
      <q-card class="column full-height full-width" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Покупка</div>
        </q-card-section>

        <q-card-section  class="col q-pt-none">
          {{desc.design.title}}
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
          <q-badge color="blue q-pa-sm text-h6">
            Осталось : {{openDesc(desc).setting.count}}
          </q-badge>

          <q-input type="number" @click="counting(desc)" :min="openDesc(desc).setting.count - (openDesc(desc).setting.count - 1)" :max="openDesc(desc).setting.count" v-model="num" filled style="width: 200px"/>
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Способ оплаты" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Код купона:" />
        </q-card-section>

        <q-card-section class="col q-pt-none" color="green">
          <q-badge color="green q-pa-sm text-h6">
              К оплате: {{formatMoney(parseInt(counting(desc).price.amount)*num) }} {{desc.price.currency}}
          </q-badge>
          
        </q-card-section>

        <q-card-actions align="center" class="bg-white text-teal">
          <q-btn rounded flat label="Перейти к оплате" v-close-popup @click="pay = false"/>
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
    openDesc(desc){
      this.desc = desc;
      return desc;
    },
    counting(desc){
      this.desc = desc;
      return desc;
    },
    openFilter(){
      if(this.onreadyStateChange()){
        skel = false
      }
    },
    formatMoney(data){
      const numberValue = Number.prototype.toFixed.call(parseFloat(data) )           
      return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    },
    async onreadyStateChange(filter){
        axios.post('https://api.bot-t.ru/v1/shop/category/view?token=5229498662:AAH6wu0z-uButJQfzT5jAUfjzROfNUTLDGk','bot_id=30219&category_id=0')
        .then(response => {
          for(let item in response.data.data){
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
  background-color: rgb(235, 233, 233);
  border-radius: 5px;
}
.flexdir{
  flex-direction: column;
}
.rel{
  position: relative;
}
</style>