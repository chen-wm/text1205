<template>
  <div>
    <van-sticky :offset-top="0">
    <div class="header">
      <input type="text" class="search" placeholder="请输入搜索内容">
    </div>
    </van-sticky>
    <category></category>
    <div class="title">附近商家</div>
    <list></list>
  </div>
  
</template>

<script>
import category from "./category"
import list from "./list"
export default {
  components:{
    category,list
  }
}
</script>

<style lang="scss" scoped>
.header{
    background: #1c1b20;
    padding:0.2rem;
    .search{
    border:none;
    width:100%;
    height:2rem;
    border-radius:0.3rem;
    padding:0 0.3rem; 
    box-sizing:border-box;
    }
}
.title{
  font-size: 0.8rem;
  font-weight: 800;
  height:0.23rem;
  line-height: 0.23rem;
  text-align:center;
  margin:0.15rem 0 0.05rem;
}
.title::after,.title::before{
  content:"";
  height:1px;
  width:30px;
  transform:scaleY(0.5);
  display:inline-block;
  background:#666;
  vertical-align: middle;
}

</style>