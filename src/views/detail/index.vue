<template>
  <div>
      <div>
      <sellerHeader :seller="seller"></sellerHeader>
    <van-tabs v-model="active" sticky animated color="yellow">
    <van-tab title="点单">
        <order />
    </van-tab>
    <van-tab title="评价">内容 2</van-tab>
    <van-tab title="商家">内容 3</van-tab>
    </van-tabs>
    <cart></cart>
  </div>
  
  </div>
  

  
</template>

<script>
import {getStoreById} from '@/api/detail'
import sellerHeader from './seller-header'
import order from './order'
import cart from './cart'
export default {
    components:{
        sellerHeader,order,cart
    },
    data(){
        return {
            seller:[],
            active:0,
            
        }
    },
    methods:{
        getStoreMsg(){
        //请求id=this.router.query.id
        getStoreById({id:this.$route.query.id}).then(res =>{
            // console.log(res);
            this.seller = res.data
        });
    }
    },
    created(){
        this.getStoreMsg();
        

    }
}
</script>

<style lang="scss" scoped>

</style>