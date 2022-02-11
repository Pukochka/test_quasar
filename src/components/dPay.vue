<template>
    <q-dialog persistent >
      <q-card class="column q-pa-md" style="heigth: 600px">
          <div class="flex justify-between">
          <div class="text-h5 custom-header">Покупка</div>
            <q-btn flat round dense icon="close" v-close-popup @click="num=1"/>
          </div>
          <q-separator horizontal class="custom-separator"/>
          <div  class="col q-pt-none text-h6">
            {{item.design.title}} : {{desc.design.title}}
          </div>

          <div class="col q-pt-none">
            <q-input dense v-model="email" label="Email:" />
          </div>

          <div class="col q-pt-none">
            <q-input dense v-model="telegram" label="Telegram:" />
          </div>

          <div class="col q-pt-none flex justify-between items-center">
            <q-badge color="blue q-ma-sm text-h6">
                Осталось : {{desc.setting.count}}
            </q-badge>

            <q-input type="number" 
            @keydown="validate(desc.setting.count)"
            @keyup="validate(desc.setting.count)"
            :min="desc.setting.count - (desc.setting.count - 1)" 
            :max="desc.setting.count" 
            v-model='num'  
            dense
            style="width: 200px;height:30px !important;"/>

          </div>

          <div class="col q-pt-none">
          <q-input dense v-model="text" label="Способ оплаты" />
          </div>

          <div class="col q-pt-none">
          <q-input dense v-model="sale" label="Код купона:" />
          </div>

          <div class="col q-pt-none">
          <q-badge color="blue q-ma-sm text-h6" >
              К оплате: {{formatMoney(parseInt(desc.price.amount)*num) }} {{desc.price.currency}}
          </q-badge>
          </div>

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
<style lang="scss" scoped>
.custom{
  &-header{
    color:rgb(75, 143, 233);
    font-weight: 700;
  }
}  
</style>