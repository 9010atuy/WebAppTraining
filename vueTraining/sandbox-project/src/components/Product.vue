<template>
    <div id="product">
    <ProductHeader/>
    <p>iPhone13 ${{price}}</p>
    <button @click="calcTax">{{label}}</button>
    </div>
</template>
    
<script>
import ProductHeader from './ProductHeader.vue'
export default {
    name: "Product",
    components:{ProductHeader},
    data: () => {
        return {
            price: 790,
            tax: false,
            label: '税込計算'
        }
    },
    methods:{
        calcTax: function() {
            if (this.tax){
                this.price = this.price / 1.08;
                this.tax = false;
                this.label = '税込計算';
            } else {
                this.price = this.price * 1.08;
                this.tax = true;
                this.label = '税抜計算';
            }
        }
    }
}
</script>
    
<style>
     
</style>