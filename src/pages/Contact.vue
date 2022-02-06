<template>
    <div class="justify-center">

      <div class="q-ma-md flex wrap justify-center">

        <q-list bordered class="flex wrap text-primary mw700 rounded-borders">

          <q-item class="borrad"
          clickable 
          v-ripple 
          @click="openMain()
          ">
            <q-item-section >
              {{allItems()}}
            </q-item-section>

            <q-item-section class="text-subtitle1 text-weight-medium">
              Все
            </q-item-section>

          </q-item>

          <q-item 
          v-for="head in heads"
          :key="head.id" 
          clickable 
          v-ripple 
          @click="openFilter(head)"
          class="borrad"
          >
             
            <q-item-section class="text-subtitle1 text-weight-medium">
              {{head.design.title}}
            </q-item-section>

            <q-badge color="white" class="text-blue q-pa-sm">
              {{head.items.length}}
            </q-badge>
            <q-separator vertical dark />
          </q-item>

        </q-list>

      </div>

      <div class="mw1000 " v-for="item in items" :key="item.id">

        <div class="text-h5 text-weight-bold q-pt-lg q-pb-sm">{{item.design.title}}</div>

        <div class="flex wrap" >

          <skeleton :height='h.h80' v-if="items.length == 0"/>
          
          <q-card class="q-ma-sm" style="width:300px;" v-for="desc in item.items" :key="desc.id">
            
              <div class="bgc"></div>

              <div class="mw200 text-h6 q-pa-sm q-pl-md word">
                {{desc.design.title}}
              </div>

            <div class="flex justify-between q-pb-sm items-center">

              <div class="text-subtitle2 q-pa-sm">
                {{formatMoney(desc.price.amount)}} {{desc.price.currency}}
              </div>

              <q-btn @click="
              openItem(item);
              openDesc(desc);
              openMore(desc);
              " color="primary q-pa-sm" flat class="text-subtitle2">
                Подробнее
              </q-btn>

              <q-btn flat color="primary q-pa-sm"
                    @click="num=0;
                    openItem(item);
                    openPay(desc);
                    openDesc(desc);
                    validate(desc.setting.count)"
              >
                Купить
              </q-btn>

            </div>

          </q-card>

        </div>

      </div>

      <d-more :desc='openDesc(desc)' v-model="more"/>

      <d-pay v-model="pay" :desc='desc' :item='item' :num='0'/>
        
    </div>
    
    
</template>

<script>
import {ref } from 'vue'
import { axios } from 'boot/axios'
import skeleton from 'components/skeleton'
import dMore from 'components/dMore'
import dPay from 'components/dPay'


export default {
  components:{
    skeleton,
    'd-more':dMore,
    'd-pay':dPay
  },
  data(){
    return{
      items:[],
      heads:[],
      isHidden:false,
      more: false,
      h:{
        h40:'40px',
        h80:'80px',
        h150:'150px',
      },
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
    toFirstSumb(str){
      this.new = str.toLowerCase();
      return this.new;
    },
    openPay(desc){
      this.desc = desc;
      this.pay = true;
    },
    openMore(desc){
      this.desc = desc;
      this.more = true;
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
    },
    formatMoney(data){
      const numberValue = Number.prototype.toFixed.call(parseFloat(data))           
      return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
    },
    allItems(){
      let count = 0;
      if(this.heads){
        for(let head of this.heads){
          count += head.items.length
        }
        return count;
      }
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
.mw200{
  max-width: 200px;
}
.bgc{
  height: 200px;
  background-color: $blue;
}
.hover:hover{
  background-color: rgb(111, 170, 224);
}
</style>