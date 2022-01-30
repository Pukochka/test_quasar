<template>
  <q-page class="flex flex-center">
    <q-card>
      
      <q-card-section class="q-ma-sm">
        <div class="q-pa-md" v-for="(item, index) in list" :key="index">{{item.val}}</div>
      </q-card-section>

      <q-card-section class="q-ma-sm">
        <q-input v-model="text" label="maket" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  data() {
    return{
      list:[
        {val:'adfwef'},
        {val:'adfwef'},
        {val:'adfwef'},
        {val:'adfef'}
      ]
    }
    
  }
})
</script>
<style lang="scss" scoped>
  .q-pa-md{
    color: aquamarine;
  }
</style>