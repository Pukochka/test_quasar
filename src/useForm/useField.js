import {reactive, ref, watch} from 'vue'

export function useField(field){
    
    const valid = ref(true);
    const value = ref(field.value);
    const err = reactive({});
    
    const edit = val => {
        valid.value = true
        Object.keys(field.validators ?? {}).map(name => {
            const isValid = field.validators[name](value.value)
            err[name] = !isValid;
            if(!isValid){
                valid.value = false
            }
        })
    }
    edit(value.value)

    watch(value, edit)
   

    return{value , valid, err }
}