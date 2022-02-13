<template>
  <q-layout view="hHr lpR fFf">

    <q-header reveal elevated class="bg-grad text-white" height-hint="5">
      <q-toolbar>
        <q-toolbar-title class="text-h4 flex justify-center q-pa-lg">
          Accraf-store
        </q-toolbar-title>
      <q-btn class="mobile-draw mobile-none" side="right" dense flat round icon="menu" @click="toggleRightDrawer" />
      </q-toolbar>
    <div class="flex justify-center">
      <q-tabs class="w920">
        <q-route-tab to="/" label="Магазин" />
        <!-- <q-route-tab to="/contact" label="Элементы" />
        <q-route-tab to="/posts" label="Для поставщиков" /> -->
        <q-route-tab to="/mypay" label="Корзина" >
          <!-- <q-badge class="custom-badge" color="white" text-color="black">
            {{count.length}}
          </q-badge> -->
        </q-route-tab>
        <!-- <q-route-tab to="/agree" label="Соглашение" />
        <q-route-tab to="/review" label="Отзывы" /> -->
      </q-tabs>
    </div>
    
    </q-header>

    <q-drawer v-model="rightDrawerOpen" side="right" bordered class="mobile-none mobile-draw ">
      <q-list separator bordered>
        <!-- <q-item clickable v-ripple to="/">
          
          <q-item-section >Таблица</q-item-section>

        </q-item>
        <q-item clickable v-ripple to="/contact">
          
          <q-item-section >Элементы</q-item-section>

        </q-item>
        <q-item clickable v-ripple to="/posts">
          
          <q-item-section >Для поставщиков</q-item-section>

        </q-item> -->
        <q-item clickable v-ripple to="/">
          
          <q-item-section >Магазин</q-item-section>

        </q-item>
        <q-item clickable v-ripple to="/mypay">
          
          <q-item-section >Корзина</q-item-section>

        </q-item>
        <!-- <q-item clickable v-ripple to="/agree">
          
          <q-item-section >Соглашение</q-item-section>

        </q-item>
        <q-item clickable v-ripple to="/review">
          
          <q-item-section >Отзывы</q-item-section>

        </q-item> -->
      </q-list>
    </q-drawer>

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
    const data = localStorage.getItem('favorite_item')
    let mass = JSON.parse(data)
    return {
      rightDrawerOpen,
      count : mass,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
      
    }
  },
  created(){
     
  }
}
</script>
<style lang="scss" scoped>
  .custom-badge{
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .bg-grad{
    background: linear-gradient(315deg, hsla(217, 100%, 50%, 1) 55%, hsla(186, 100%, 69%, 1) 100%) ;
  }
  .mobile-none{
    display: none;
  }
  @media (max-width:920px) {
    .w920{
      display: none;
    }
  }
  @media (max-width:920px) {
    .mobile-draw{
      display: inline ;
    }
  }
</style>