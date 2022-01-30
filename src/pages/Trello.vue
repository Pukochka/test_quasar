<template>
    <div class="row q-pa-sm bg justify-around">
      <div class="justify-center">

        <q-input v-model="header" label="Название" style="width:300px;"/>

        <q-input v-model="description" label="Описание" style="width:300px;"/>

        <q-btn class="btn q-mt-md" icon-right="add" label="Добавить" @click="clearValue()" />
      </div>
    </div>

    <div class="tasks q-pa-lg flex">

    </div>

    <div class="maket">
      <q-card v-model="maket" class="my-card">
        <q-card-section>
          <q-card-label class="text-h6">Our Changing Planet</q-card-label>
          <q-card-label class="text-subtitle2">by John Doe</q-card-label>
        </q-card-section>

        <q-separator />

        <q-card-actions vertical>
          <q-btn flat>Action 1</q-btn>
          <q-btn flat>Action 2</q-btn>
        </q-card-actions>
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
    clearValue(){
      console.log(this.header,this.description)
      this.header ='';
      this.description ='';
    }
  }
}
</script>
<style lang="scss" scoped>
.maket{
  display: none;
}
</style>