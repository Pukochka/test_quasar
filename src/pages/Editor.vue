<template>
    <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="editor" min-height="5rem" />

    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ editor }}</pre>
      </q-card-section>
    </q-card>

    <q-card flat bordered>
      <q-card-section v-html="editor" />
    </q-card>
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

</style>