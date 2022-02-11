<template>
    <q-card class="my-card" style="width:500px; margin:16px auto;" flat bordered v-for="text in texts" :key="text.id">
      <q-item class="">
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>
            username
          </q-item-label>
          <q-item-label caption>
            {{text.date}}
          </q-item-label>
        </q-item-section >
          
      </q-item>

      <q-separator />
      <q-card-section>
        {{text.value}}
      </q-card-section>
    </q-card>
</template>
<script>
export default {
    props:{
        texts:{
            type:Object,
            required:true
        }
    },
}
</script>
<style lang="scss" scoped>
.absolute{
  right: 0;
}
.nlike{
  color: #777;
}
.nlike.like{
  color: red;
}

</style>