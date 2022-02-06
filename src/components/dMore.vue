<template>
    <q-dialog>
        <q-card>
            <q-card-section class="row items-center q-pb-none">
            <div class="text-h6">{{desc.design.title}}</div>
            <q-space />
            <q-btn icon="close"  flat round dense v-close-popup />
            </q-card-section>

            <q-card-section style="width:300px; min-height:100px" class="text-subtitle1">
            {{desc.design.rules}}
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<script>

export default {
    data(){
        return{

        }
    },
    
    props:{
        desc:{
            type:Object
        }
    }
    
    
}
</script>