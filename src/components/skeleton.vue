<template>
    <q-skeleton class="q-ma-md" v-bind:style="{height:height}"/>
    <q-skeleton class="q-ma-md" v-bind:style="{height:height}"/>
    <q-skeleton class="q-ma-md" v-bind:style="{height:height}"/>
    <q-skeleton class="q-ma-md" v-bind:style="{height:height}"/>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        height:{
            type: [String],
            required:true
        }
    }
}
</script>