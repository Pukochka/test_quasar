<template>
  <q-layout view="hhh lpR lff">

    <q-header reveal elevated class="bg-grad text-white" height-hint="5">
      <q-toolbar>
        <q-toolbar-title class="text-h4 flex justify-center q-pa-lg">
          Accraf-store
        </q-toolbar-title>
      
      </q-toolbar>
    <div class="flex justify-center">
      <q-tabs >
        <q-route-tab to="/" label="Главная" />
        <q-route-tab to="/contact" label="Контакты и техподдержка" />
        <q-route-tab to="/posts" label="Для поставщиков" />
        <q-route-tab to="/probl" label="Решение проблем" />
        <q-route-tab to="/agree" label="Соглашение" />
        <q-route-tab to="/review" label="Отзывы" />
      </q-tabs>
    </div>
      
    </q-header>

    <q-page>
      <q-page-container >
        <router-view />
      </q-page-container>
    </q-page>
    

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const rightDrawerOpen = ref(false)

    return {
      
      
    }
  }
}
</script>
<style lang="scss" scoped>
  .bg-grad{
    background: linear-gradient(315deg, hsla(217, 100%, 50%, 1) 55%, hsla(186, 100%, 69%, 1) 100%) ;
  }
  .borrad{
    border-radius: 5px;
  }
</style>