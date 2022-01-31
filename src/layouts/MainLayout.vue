<template>
  <q-layout view="hhh lpR lff">

    <q-header reveal elevated class="bg-grad text-white" height-hint="5">
      <q-toolbar>
        <q-toolbar-title class="text-h4 flex justify-center q-pa-lg">
          Accraf-store
        </q-toolbar-title>

        <q-list dense class="row" style="height:40px;">

          <q-item clickable to="/mypay" class="borrad">
          
            <q-item-section class=" text-subtitle1" >
              Мои покупки
            </q-item-section>
          </q-item>

          <q-item clickable to="/signin" class="borrad">
            <q-item-section class=" text-subtitle1" >
              Войти
            </q-item-section>
          </q-item>

          <q-item clickable to="/register" class="borrad">
            <q-item-section class=" text-subtitle1">
              Зарегестрироваться
            </q-item-section>
          </q-item>

        </q-list>

        <q-btn dense flat round icon="menu" @click="toggleRightDrawer" />
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

    <q-drawer v-model="rightDrawerOpen" side="right" overlay bordered class="bg-gray shadow-8 ">
      <div class="webscroll">
        <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Все товары
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          FACEBOOK: С ПЗРД+ 
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          FACEBOOK: РЕКЛАМA 
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          FACEBOOK: АВТОРЕГ
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Бизнес Менеджеры Facebook Максимум траста.
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Верифицированный BM
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Логи Фб/Adwords
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Google билл 350$
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Крипто - Биржи
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          VK Аккаунт [АВТОРЕГ] ДОСТУП ТОЛЬКО У ВАС!!!
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          РЕТРИВ (Вконтакте, VK)
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Gmail
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Канал Youtube
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Почты
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          АККАУНТЫ INSTAGRAM
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Аккаунты Авито
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Разное
        </q-item-section>
      </q-item>

      <q-item clickable>
        <q-item-section class="q-pa-md text-subtitle1" >
          Без категории
        </q-item-section>
      </q-item>
      </div>
      
      
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

    return {
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .bg-grad{
    background: linear-gradient(315deg, hsla(217, 100%, 50%, 0.7) 55%, hsla(186, 100%, 69%, 1) 100%);
  }
  .borrad{
    border-radius: 5px;
  }
</style>