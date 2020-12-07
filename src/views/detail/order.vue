<template>
  <div class="order-box">
      <div class="menu-box">
        <ul v-if="listShow">
            <li v-for="(item,index) in productList" :key="index" class="menu-list">{{item.name}}</li>
        </ul>
      </div>
      <div class="prod-box">
        <ul>
            <li class="cate-list" v-for="(item,index) in productList" :key="index">
                <div class="cate-title">{{item.name}}</div>
                <ul>
                    <li class="prod-list" v-for="prod in item.content" :key="prod.id">
                        <div class="prod-img-box">
                            <img :src="prod.img" alt="">
                        </div>
                        <div class="prod=info">
                            <div class="name">{{prod.name}}</div>
                            <div class="sale"><span class="num">月销{{prod.num}}</span><span>赞{{prod.up}}</span></div>
                            <div class="price">￥{{prod.price}}</div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'


export default {
    computed:{
        ...mapState('product',['productList'])
    },
    data() {
        return {
            listShow: false
        }
    },
    mounted (){
        this.init();
    },
   methods:{
       init(){
           return new Promise((resolve) =>{
               this.$store.dispatch('product/getProdList',this.$route.query.id)
               resolve()
           }).then (() =>{
               this.listShow = true
               console.log(this.$store.state['product']['productList'])
           })
       }
            
   }
}
</script>

<style lang="scss" scoped>
.order-box{
    display: flex;
    .menu-box{
        width:1,6rem;
        flex:0 0 1.6rem;
        background:#f5f5f5;
        height:calc(100vh - 94px);
        .menu-list{
            color:#2c3e50;
            font-size: 0.5rem;
            padding:0.18rem 0.24rem 0.44rem;
            line-height:2rem;
            white-space: nowrap;
            &.active{
                color:#f00;
            }
        }
    }
    .prod-box{
        flex:1;
        min-width: 0;
        background:#fff;
        height:calc(100vh - 94px);
        .cate-list{
            padding:0 0.2rem;
            .cate-title{
                height:0.72rem;
                line-height:0.72rem;
            }
            .prod-list{
                display:flex;
                margin-bottom: 0.4rem;
                .prod-img-box{
                    width: 76.8px;
                    height:76.8px;
                    img{
                        width: 100%;
                    } 
                }
                .prod-info{
                    flex:1;
                    .name{
                        font-size:0.32rem;
                        color:#333;
                        font-weight:bold;
                        line-height:0.45rem;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        margin-bottom:0.04rem;
                    }
                    .sale{
                        color:#666;
                        font-size:11px;
                        margin-bottom:0.06rem;
                        .num{
                            margin-right:0.2rem;
                        }
                    }
                    .price{
                        color:#fb4e44;
                        font-size:0.36rem;
                    }
                }
                
            }
        }
    }
}

</style>