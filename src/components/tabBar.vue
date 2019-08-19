<template>
    <div class="tab-bar-wrap">
      <ul class="tab-list-wrap">
        <li class="tab-list" v-for="(item, index) in tabList" :key="index" @click="changeRouter(index)" :class="activeIndex == index ?'active-light' : ''">
          <i :class="item.icon" class="icon-font"></i>
          <label for="">{{item.name}}</label>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data () {
    return {
      tabList: [
        { name: '首页', routerName: 'home', icon: 'cubeic-home' },
        { name: '我的', routerName: 'person', icon: 'cubeic-person' },
        { name: '超级会员', routerName: 'vip', icon: 'cubeic-vip' },
        { name: '购物车', routerName: 'shopcar', icon: 'cubeic-mall' }
      ],
      activeIndex: 0
    }
  },
  mounted () {
    // 当前路由对应底部高亮
    if (this.tabListArr.includes(this.$route.name)) {
      this.activeIndex = this.tabListArr.indexOf(this.$route.name)
    };
  },
  computed: {
    tabListArr () {
      return this.tabList.map(item => item.routerName)
    }
  },
  watch: {
    // 当前路由对应底部高亮
    '$route' (to, from) {
      if (this.tabListArr.includes(to.name)) {
        this.activeIndex = this.tabListArr.indexOf(to.name)
      }
    }
  },
  methods: {
    changeRouter (index) {
      let self = this
      // self.activeIndex = index  直接赋值会有问题 路由发生改变了 没高亮
      self.$router.replace({ name: self.tabList[index].routerName })
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-bar-wrap {
    width: 100%;
    background: #fff;
    .tab-list-wrap {
      display: flex;
      .tab-list {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
        padding: .4rem 0;
        label {
          font-size: .8rem;
          margin-top: .2rem;
        }
      }
    }
  }
  .active-light {
    color: rgb(226, 17, 17)
  }
  .icon-font {
    font-size: 1.2rem
  }
</style>
