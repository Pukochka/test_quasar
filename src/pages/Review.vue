<template>
    <h6 class="flex justify-center q-pa-md">Your comment</h6>
    <div class="flex justify-center q-ma-md">
      <q-input style="width:500px; " class="area"
      v-model="text"
      filled
      type="textarea"
    />
    </div>
    <div class="flex justify-center q-pa-md">
      <q-btn color="primary" label="Добавить" @click="publicSub()" />
    </div>
    <div class="conteiner justify-center" >
      <comment :texts='texts'/>
    </div>
</template>

<script>
import { ref } from 'vue'
import comment from 'src/components/comment'

export default {
  components:{
    comment
  },
  data(){
    return{
      
    }
  },
  setup () {
    return {
      text: ref(''),
      texts:ref([])
    }
  },
  methods:{
    publicSub(){ 
      if(this.text !== ''){
        this.texts.push({
          value : this.text,
          date : new Date(Date.now()).toLocaleString(),
          likes: 0
        })
        console.log(this.texts)
        this.text = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
}
.area{
  resize: none !important;
}
</style>