<template>
    <div class="flex justify-center">
    <h5>Мои покупки</h5>
  </div>

    <div class="justify-center row">
      
       <q-card class="my-card " style="">

        <q-card-section>
          <q-input v-model="text" label="Ваш email" style="width:300px;"/>
        </q-card-section>

        <q-card-section>
          <q-input v-model="text" label="Пароль" style="width:300px;"/>
        </q-card-section>
        
        <q-card-section class="flex justify-center ">
          <q-btn color="white" text-color="black" label="Отправить" />
          
        </q-card-section>
      </q-card>

    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      
      lorem: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, ratione eum minus fuga, quasi dicta facilis corporis magnam, suscipit at quo nostrum!',
      header: ref(''),
      description: ref(''),
    }
  },
  methods:{
    
  }
}
</script>
<style lang="scss" scoped>

</style>