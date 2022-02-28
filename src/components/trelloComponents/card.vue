<template>
    <q-card
                transition-show="jump-down"
                transition-hide="jump-up"
                class="card q-card custom_transition q-ma-sm q-my-sm" 
                v-for="(task , index) in tasks" 
                :key="index"
                :style='{transform: `translate(${105 * index}%)` + `${task.scale ? nonScale : defScale}`}'
                >
                <q-badge color="primary" >
                    {{task.time}}
                </q-badge>
               
                <q-btn flat class="custom_btn q-pa-sm" @click="sure = !sure ; del = task; i = index" rounded icon="delete"  size="12px"/>
                
                <q-card-section class="flex">
                    <div class="text-h6 word q-mr-sm">{{task.header}}</div>

                    <q-btn
                    title="Подробнее"
                    color="grey"
                    round
                    flat
                    dense
                    :icon="task.info ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                    @click="task.info = !task.info"
                    />
                    
                </q-card-section>

                <q-slide-transition>
                        <div v-show="task.info">
                            <q-card-section class="q-pa-none q-pl-lg q-pr-sm word">
                                <div class="text-subtitle2 word">{{task.desription}}</div>
                            </q-card-section>
                            
                        </div>
                </q-slide-transition>

                <q-card-section class="word" v-for="(subTask , index) in task.subTasks" :key="index">
                    <div class="sub_header row justify-between items-center">
                        <div class="text-subtitle2">{{subTask.header}}</div>
                        <div class="group">
                            <q-btn flat rounded size="10px" class="q-pa-sm" color="primary" icon="delete"
                            @click="sub = task; deleteSubTask(subTask) ; "  />

                            <q-btn flat rounded size="10px" class="q-pa-sm" color="primary"
                            :icon="subTask.info ? 'keyboard_arrow_up' : 'keyboard_arrow_down'"
                             @click="subTask.info = !subTask.info" />
                        </div>
                    </div>
                    <q-slide-transition>
                        <div v-show="subTask.info">
                            <q-card-section class="word q-pa-none q-pl-sm">
                                <div class="img" :style="{'background-color': `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`}"></div>
                                <div class="text-subtitle2 word">{{subTask.desription}}</div>
                            </q-card-section>
                        </div>
                </q-slide-transition>
                </q-card-section>

                <q-card-actions horisontal align="right">
                    <q-btn flat rounded label="Добавить задачу" @click="addSubTasks = !addSubTasks; sub = task "/>
                </q-card-actions>
            </q-card>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    setup(){
        return{
            defScale: `scale(0)`,
            nonScale: `scale(1)`,
        }
    },
    props:{
        tasks:{
            type: Array
        },
        
    },
    methods:{
        addSubTask(){
            if(!this.descr.required && !this.head.required && this.descr.val !== '' && this.head.val !== ''){
                this.sub.subTasks.push({
                    header : this.head.val,
                    desription : this.descr.val, 
                    imgURL : this.img,
                    info : false,
                    time : new Date(Date.now()).toLocaleString()
                }) 
                this.addSubTasks = false;
                this.descr.val = ''
                this.head.val = ''
            }
           
        },
        deleteSubTask(sub){
            this.sub.subTasks = this.sub.subTasks.filter(t => t !== sub)
        },
    }
}
</script>