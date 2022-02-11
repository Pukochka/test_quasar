import {ref , reactive} from 'vue'
import  { useField }  from './useField'

export function useItems( formItem = {}){
    const form = reactive({})

    for(const [key, value] of Object.entries(formItem)){
        
        form[key] = useField(value)
    }

    return form
}