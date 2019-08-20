<template>
    <div class="shopcar-wrap">
        <div class="shopcar-header">
            <v-header :title="homeTitle"/>
        </div>
        <div class="shopcar-content"></div>
         <div class="shopcar-footer">
            <v-tarBar/>
        </div>
    </div>
</template>

<script>
import TabBar from '@/components/tabBar.vue'
import Header from '@/components/header.vue'
export default {
  components: {
    'v-tarBar': TabBar,
    'v-header': Header
  },
  data () {
    return {
      homeTitle: '购物车'
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
    .shopcar-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: rgb(215, 217, 218);
        .shopcar-content {
            flex: 1;
        }
    }
</style>
