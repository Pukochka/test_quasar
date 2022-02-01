<template>
<div class="text-h2 flex justify-center q-pa-md">Accraf-store</div>

  <div class="flex row wrap justify-center">
    

      <q-list separator bordered padding class="rounded-borders text-primary col-2" >
      
        <q-item clickable  v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section>Все</q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Аккаунты Blablacar </q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Аккаунты Mybook.ru </q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Аккаунты World of Tanks </q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Аккаунты Otzovik.com </q-item-section>
        </q-item>

        <q-item clickable v-ripple >
          <q-item-section avatar>
            <q-icon name="add" />
          </q-item-section>

          <q-item-section> Аккаунты Auction.ru </q-item-section>
        </q-item>

      
      </q-list>
    
      

    <q-markup-table :separator="separator" flat bordered class="q-ml-md q-mr-md col-8" >
      <thead>
        <tr>
          <th class="text-left">Продукт</th>
          <th class="text-center">Количество</th>
          <th class="text-center">За 1 штуку</th>
          <th class="text-center">Покупка</th>
        </tr>
      </thead>
      <tbody >
        <tr v-for="item in items" :key="item.id">
          <td class="text-left">{{item.address.street}}</td>
          <td class="text-center">{{item.name}}</td>
          <td class="text-center">{{item.username}}</td>
          <td class="text-center">
           <q-btn color="white" text-color="black" label="Купить" @click="openPay(item)"/>
          </td>
        </tr>
      </tbody>
    </q-markup-table>
    
    
  </div>
    <q-dialog v-model="pay" full-height>
      <q-card class="column full-height full-width" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Покупка</div>
        </q-card-section>

        <q-card-section class="col ">
          {{item.name}}
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

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Количество:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Способ оплаты" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          <q-input v-model="text" label="Код купона:" />
        </q-card-section>

        <q-card-section class="col q-pt-none">
          К оплате: 0.00
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
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
    }
  },
  methods:{
    openPay(item){
      this.item = item;
      this.pay = true;
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      this.items = response.data
      
    })
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
</style>