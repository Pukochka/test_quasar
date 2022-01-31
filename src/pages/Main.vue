<template>
<div class="text-h2">Accraf-store</div>
  <div class="flex justify-center">
    
    <q-list padding class="row">
      <q-item  v-ripple >
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>

        <q-item-section>Icon as avatar</q-item-section>
      </q-item>

      <q-item  v-ripple>
        <q-item-section avatar>
          <q-avatar color="teal" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Avatar-type icon</q-item-section>
      </q-item>

      <q-item  v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
        </q-item-section>

        <q-item-section>Rounded avatar-type icon</q-item-section>
      </q-item>

      
    </q-list>
  </div>
    
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',

      stars: ref(3),
      header: ref(''),
      description: ref(''),
      slideVol: ref(39),
      slideAlarm: ref(56),
      slideVibration: ref(63)
    }
  },
  methods:{
    clearValue(){
      console.log(this.header,this.description)
      this.header ='';
      this.description ='';
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
</style>