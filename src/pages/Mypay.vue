<template>
  <q-banner class="row" v-if="!favorite_item.length">
    <div class="text-h4 flex justify-center">В корзине пусто!</div>
    
    </q-banner>
  <div class="q-pa-md items-start q-gutter-md justify-center col mw600" v-if="favorite_item.length">
    <q-card class="my-card"  flat bordered v-for="(item , index) in favorite_current" :key="index" >

      <q-card-section>
        <div class="text-h5 q-mt-sm q-mb-xs">{{item.design.title}}</div>
        <div class="">
          <t-desc :item='item'/>
        </div>
        <div class=" text-grey">
         <price :item='item'/>
        </div>
        
      </q-card-section>

      <q-card-actions>
        <q-btn flat color="primary" label="Купить" />

        <q-space />

        <q-btn
          v-if="item.design.rules"
          color="grey"
          round
          flat
          dense
          :icon="expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
          @click="expanded = !expanded"
        />
      </q-card-actions>

      <q-slide-transition>
        <div v-show="expanded">
          <q-separator />
          <q-card-section class="text-subitle2">
            {{item.design.rules}}
          </q-card-section>
        </div>
      </q-slide-transition>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import typeDescription from 'src/components/typeDescription.vue'
import price from 'src/components/price.vue'

export default {
  components:{
    't-desc': typeDescription, 
    'price': price, 
  },
  setup () {
    return {
      sel:null,
      expanded: ref(false),
      favorite_item:ref([]),
      favorite_current:ref([]),
    }
  },
  created(){
    const favorite_item = localStorage.getItem('favorite_item');

    if(favorite_item){
      this.favorite_item = JSON.parse(favorite_item);
      for(let item of this.favorite_item){
        this.favorite_current.push(JSON.parse(item))
      }
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>

</style>