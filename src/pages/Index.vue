<template>
  <div class="flex justify-center">
    <h1>Main page</h1>
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