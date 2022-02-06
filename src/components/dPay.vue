<template>
    <q-dialog persistent full-height>
      <q-card class="column full-height full-width" style="width: 300px">
          <q-card-section class="flex justify-between">
          <div class="text-h4">Покупка</div>
            <q-btn flat round dense icon="close" v-close-popup @click="num=1"/>
          </q-card-section>

          <q-card-section  class="col q-pt-none text-h6">
            {{item.design.title}} : {{desc.design.title}}
          </q-card-section>

          <q-card-section class="col q-pt-none">
            <q-input v-model="email" label="Email:" />
          </q-card-section>

          <q-card-section class="col q-pt-none">
            <q-input v-model="telegram" label="Telegram:" />
          </q-card-section>

          <q-card-section class="col q-pt-none flex justify-between items-center">
            <q-badge color="blue q-ma-sm text-h6">
                Осталось : {{desc.setting.count}}
            </q-badge>

            <q-input type="number" 
            @keydown="validate(desc.setting.count)"
            @keyup="validate(desc.setting.count)"
            :min="desc.setting.count - (desc.setting.count - 1)" 
            :max="desc.setting.count" 
            v-model='num'  
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
              К оплате: {{formatMoney(parseInt(desc.price.amount)*num) }} {{desc.price.currency}}
          </q-badge>
          
          </q-card-section>

          <q-card-actions align="center" class="bg-white text-blue">
          <q-btn rounded flat label="Перейти к оплате"  v-close-popup @click="num=1"/>
          </q-card-actions>
      </q-card>
    </q-dialog>
</template>
<script>
import {ref } from 'vue'
export default {
    data(){
        return{
            
        }
    },
    setup(){
        return{
            email: ref(''),
            telegram: ref(''),
            sale: ref(''),
            num:ref(1)
       }
    },
    props:{
        desc:{
            type:Object
        },
        item:{
            type:Object
        },
    },
    methods:{
        formatMoney(data){
            const numberValue = Number.prototype.toFixed.call(parseFloat(data))           
            return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
        },
        validate(count){
            if(this.num > count){
                this.num = count;
            }
        },
    }
}
</script>