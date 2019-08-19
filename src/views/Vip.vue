<template>
    <div class="vip-wrap">
        <div class="vip-header">
            <v-header :title="homeTitle"/>
        </div>
        <div class="vip-content"></div>
        <div class="vip-footer">
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
      homeTitle: '超级会员'
    }
  }
}
</script>

<style lang="less" scoped>
    .vip-wrap {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: rgb(215, 217, 218);
        .vip-content {
            flex: 1;
        }
    }
</style>
