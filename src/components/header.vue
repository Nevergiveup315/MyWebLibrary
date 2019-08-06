<template>
    <div class="header-wrap">
        <div class="back-router" @click="routerBack">
          <i class="cubeic-back"></i>
        </div>
        <div class="title">
          <h3>{{title}}</h3>
        </div>
        <div class="more-service">
          <i class="cubeic-more"></i>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {

    }
  },
  methods: {
    routerBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
    .header-wrap {
      display: flex;
      justify-content: space-around;
      .back-router {
        width: 2rem;
        text-align: center;
      }
      .title {
        margin: 0 1.5rem;
        h3 {
            width: 14rem;
            text-align: center;
            color: yellowgreen;
        }
      }
      .more-service {
        width: 3rem;
        text-align: center;
      }
    }

</style>
