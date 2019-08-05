<template>
    <div class="tab-bar-warp">
        <template>
          <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            :inline="inline"
            :showSlider="showSlider"
            @click="clickHandler"
            @change="changeHandler">
          </cube-tab-bar>
      </template>
    </div>
</template>

<script>
export default {
  data () {
    return {
      selectedLabelDefault: 'Home', // 底部栏默认高亮项
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'About',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
        icon: 'cubeic-vip'
      }, {
        label: 'Shopcar',
        icon: 'cubeic-person'
      }],
      inline: false,
      showSlider: true
    }
  },
  methods: {
    clickHandler (label) {
      let self = this
      // self.$router.push({ path: '/' + label })
      // if you clicked home tab, then print 'Home'
      // console.log(label)
      self.routerChanger(label)
      self.selectedLabelDefault = label + ''
    },
    changeHandler (label) {
      // let self = this
      // self.$router.push({ path: '/' + label })
      // if you clicked different tab, this methods can be emitted
      // self.routerChanger(label)
    },
    routerChanger (pathName) {
      let self = this
      self.$router.push({ path: '/' + pathName })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
