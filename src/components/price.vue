<template>
        <span class="money">{{formatMoney(item.price.amount)}}</span>  {{ formatPrice(item.price.currency)}}
</template>
<script>
export default {
    data(){
        return{

        }
    },
    props:{
        item:{
            type: Object
        }
    },
    methods:{
        formatPrice(data){
        let val = '';
        switch(data){
            case ('RUB'):
            val = '₽';
            break;
            case ('USD'):
            val = '$';
            break;
            case ('EUR'):
            val = '€';
            break;
            case ('UAH'):
            val = '₴';
            break;
            case ('KZT'):
            val = '₸';
            break;              
        }
        return val;
        },
        formatMoney(data){
            const numberValue = Number.prototype.toFixed.call(parseFloat(data) )           
            return numberValue.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
        },
    }
}
</script>
<style lang="scss" scoped>
.money{
    font-size: 20px;
    font-weight: 900;
    color: #333;
}
</style>