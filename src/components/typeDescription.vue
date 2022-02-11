<template>
    <q-badge label="Уникальный товар" class="sub-category q-mt-none" v-if="item.type == 1"/>
    <q-badge label="Не уникальный товар" class="sub-category q-mt-none" v-if="item.type == 2"/>
    <q-badge label="Не уникальный файл" class="sub-category q-mt-none" v-if="item.type == 3"/>
    <q-badge label="Уникальный файл" class="sub-category q-mt-none" v-if="item.type == 4"/>
    <q-badge label="Подкатегория" class="sub-category q-mt-none" v-if="item.type == 0"/>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        item:{
            type:Object
        }
    }
}
</script>
<style lang="scss" scoped>
.sub-category{
  background-color: rgb(112, 131, 189);
  font-size: 13px;
}
</style>