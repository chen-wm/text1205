<template>
  <div class="cart-container">
      <div class="cart-box">
          <div class="cart-icon active" >
              <span class="iconfont icongouwuche "></span>
              <span class="num"></span>
          </div>
          <div class="cart-price active" >
              <div class="price">￥30</div>
              <div class="deliver">另需配送费￥20</div>
          </div>
          <div class="cart-buy active" >$15元起送</div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.cart-container{
    position: fixed;
    left: 0;
    bottom: 0;
    height:50px;
    background:#3b3b3c;
    width:100%;
    .cate-box{
        display:flex;
        .cart-icon{
            height:50px;
            width:50px;
            position:absolute;
            left:-10px;
            top:-10px;
            background:#656565;
            text-align:center;
            border-radius:50%;
            line-height:50px;
            .num{
                position:absolute;
                right:0;
                top:0;
                width:30px;
                height:30px;
                background:#fb4e44;
                color: #fff;
                line-height:30px;
                text-align: center;
                border-radius:50%;
                transform:scale(0.5) translate(50%,-50%);
            }
            .icongouwuche{
                font-size:28px;
                color:#c4c4c4;
            }
            &.active{
                background:#f8c74c;
                .icon-gouwuche{
                    background:#333;
                }
            }
        }
        .cart-price{
            padding-left:70px;
            flex:1;
            color:#999;
            .price{
                display:none;
            }
            .deliver{
                line-height:50px;
                font-size: 7px;

            }
            &.active{
                .price{
                    display:block;
                    font-size:24px;
                    color:#fff;
                    line-height:33px;
                }
                .deliver{
                    font-size:11px;
                    line-height:16px;
                }
            }
        }
        .cart-buy{
            width:108px;
            color:#999;
            font-size:14px;
            font-weight:bold;
            text-align:center;
            line-height:50px;
            &.active{
            background:#f8c74e;
            font-size:18px;
            color:#333;
            font-weight:normal;
        }
        }
        
    }

}

</style>