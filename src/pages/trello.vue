<template>
    <div class="col relative">
        
        <div class="area_btn row justify-center q-pa-lg">
            <q-btn flat rounded color="primary" icon="add" title="Добавить" @click="addMainTask = !addMainTask" />
            <q-btn flat rounded color="primary" icon="edit" />
        </div>
        <div v-if="tasks.length == 0" class="flex justify-center text-h3 q-pa-xl">
            Задач пока что нет!
        </div>
        <div ref="cards"  class="area_tasks q-ma-md flex row custom_transition">
            <q-card
                transition-show="jump-down"
                
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
        </div>
    </div>

    <q-dialog v-model="addMainTask" persistent>
        <q-card class="" style="width:310px;"> 
            <div class="flex justify-center q-pt-sm text-h5">Добавить задачу</div>
            <q-card-section class=" ">
                <q-input fullwidth v-model="head.val" type="text" label="Заголовок" />
                <small class="err" v-show="head.required">Минимальное количество символов {{head.minlength}} у вас {{head.val.length}}</small>
            </q-card-section>
            <q-card-section class="">
                <q-input fullwidth v-model="descr.val" type="textarea" label="Описание" />
                <small class="err" v-show="descr.required">Минимальное количество символов {{descr.minlength}} у вас {{descr.val.length}}</small>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Отмена" color="primary" @click="descr.val = '';head.val = ''" v-close-popup />
                <q-btn flat label="Добавить" color="primary" @click="addTask()" />
            </q-card-actions>
        </q-card>
    </q-dialog>

    <q-dialog v-model="addSubTasks" persistent>
        <q-card class="" style="width:310px;">
            <div class="flex justify-center q-pt-sm text-h5">Добавить подзадачу</div>
            <q-card-section class="">
                <q-input fullwidth v-model="head.val" type="text" label="Заголовок" />
                <small class="err" v-show="head.required">Минимальное количество символов {{head.minlength}} у вас {{head.val.length}}</small>
            </q-card-section>
            <q-card-section class="">
                <q-input v-model="descr.val" type="textarea" label="Описание" />
                <small class="err" v-show="descr.required">Минимальное количество символов {{descr.minlength}} у вас {{descr.val.length}}</small>
            </q-card-section>
            <q-card-actions align="right">
                <q-btn flat label="Отмена" color="primary" @click="descr.val = '';head.val = ''" v-close-popup />
                <q-btn flat label="Добавить" color="primary" @click="addSubTask()" />
            </q-card-actions>
        </q-card>
    </q-dialog>

    <q-dialog v-model="sure" persistent>
        <q-card class="q-pa-md">
            <div class="text-h5">Вы уверены, что хотите удалить задачу?</div>
            <q-card-actions align="right">
                <q-btn flat label="Отмена" color="primary"  v-close-popup />
                <q-btn flat label="Да" color="primary" @click="deleteTask($event.target)" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
    
</template>
<script>

import { ref } from 'vue'
export default {
    data(){
        return{

        }
    },
    setup(){
        return{
            tasks:ref([
                {
                    header : 'Сделать веранду',
                    desription : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quas nostrum quasi voluptas dolor at, sit ipsa quod laudantium dolores quia quisquam sunt voluptates vero reprehenderit eos alias numquam ipsum.', 
                    imgURL : 'hgfds',
                    time : new Date(Date.now()).toLocaleString(),
                    info : false,
                    scale : true,
                    subTasks: []
                }
            ]),
            addMainTask:ref(false),
            addSubTasks:ref(false),
            sure:ref(false),
            del:ref(),
            sub:ref(),
            scale:ref(),
            i:ref(),
            defScale: `scale(0)`,
            nonScale: `scale(1)`,
            descr:ref({
                val : '',
                required : ref(false),
                minlength : 10
            }),
            head:ref({
                val : '',
                required : ref(false),
                minlength : 6
            }),
            img: ref(''),
        }
    },
    watch:{
        'head.val'(newVal){
            if(this.addMainTask){
                newVal.length < this.head.minlength ? this.head.required = true : this.head.required = false
            }
            if(this.addSubTasks){
                newVal.length < this.head.minlength ? this.head.required = true : this.head.required = false
            }      
        },
        'descr.val'(newVal){
            if(this.addMainTask){
                newVal.length < this.descr.minlength ? this.descr.required = true : this.descr.required = false
            }
            if(this.addSubTasks){
                newVal.length < this.descr.minlength ? this.descr.required = true : this.descr.required = false
            }
            
        }
    },
    methods:{
        addTask(){
            if( !this.descr.required && !this.head.required && this.descr.val !== '' && this.head.val !== ''){
                this.tasks.push({
                    header : this.head.val,
                    desription : this.descr.val, 
                    imgURL : this.img,
                    info : false,
                    scale : true,
                    subTasks: [],
                    time : new Date(Date.now()).toLocaleString()
                }) 
                this.addMainTask = false
                this.descr.val = ''
                this.head.val = ''
            }
            
        },
        deleteTask(){
            this.tasks[this.i].scale = false
            setTimeout(() => {
                this.tasks = this.tasks.filter(t => t !== this.del)
            }, 300);
        },
        addSubTask(){
            console.log(this.sub)
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
<style lang="scss" scoped>
.img{
    width: 100%;
    height: 100px;
}
.custom{
    &_btn{
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 20;
    }
    &_transition{
        transition: .3s ease all;
    }
}
.card{
    min-width: 300px;
    max-width: 300px;
    position: absolute;
    transition: .3s ease all;
}
.word{
    word-wrap: break-word;
    
}
.area_btn{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    padding: 7px;
    border-radius: 6px;
    background-color: rgba(238, 238, 238, 0.63);
}
.area_tasks{
    &::-webkit-scrollbar{
        background-color: transparent;
        height: 7px;
    }
    &::-webkit-scrollbar-thumb{
        background-color: rgba(173, 166, 166, 0.781);
        border-radius: 5px;
    }
    min-height: 80vh;
    overflow-x: scroll;
    position: relative;
}
.err{
    color: red;
}
.relative{
    position: relative;
}
</style>