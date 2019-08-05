<template>
  <div class="about-wrap">
    <div class="about-header">
      <v-header :title="homeTitle"/>
    </div>
    <div class="ahout-content">
      <h1 class="about-content-title">很牛逼的人物</h1>
      <p>我出生在一个十分贫苦的家庭，记得小时候，爸爸的生活很无聊，整天只能数钱，妈妈也是，整天都在扫钱。</p>

      <p>我家住在深山中，每次要出去买东西，都相当麻烦，开保时捷要5小时，开奔驰也要4小时; 虽然家里有直升机，但是开到那边很难找到停机位，相当的不方便。</p>

      <p>记得小时候，有一次，因为房间太大，还来不及跑出房间，就尿裤子了。所以，爸爸在我房间放了一台小绵羊机车，好让我能在10分钟以内，冲出1000坪的房间，穿越5公里的走廊，到达800坪的厕所(我常常在走廊迷路。</p>

      <p>爸爸又另外叫人加盖了20间600坪里面有着250坪小厕所的破房间。爸爸说：以后如果尿湿了，直接换房间，如果房间不够或是太小的话，再告诉爸爸，爸爸再叫人来多盖几间，我们的生活很辛苦，你要忍着点!!</p>

      <p>此刻想起来，爸爸真是个善良的人!!</p>

      <p>还记得有一次，家里遭小偷，因为他用炸药炸坏了我爸的保险箱，使得里面的金币不断的往外滚出来，结果竟把那个小偷压死了我觉得那个小偷好可怜。</p>

      <p>妈妈也常常告诉我，我们家生活十分困苦～要我学着吃苦～</p>

      <p>所以我从小养成了刻苦耐劳精神，我将来的志愿，是要找200只会吃钱的怪物，好把家里的钱都吃光，为那些可怜的小偷报仇!!</p>
    </div>
    <div class="about-footer">
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
      homeTitle: '哈哈哈哈哈哈！'
    }
  }
}
</script>
<style lang="less" scoped>
  .about-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(215, 217, 218);
    .about-header {
      height: 2.4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }
    .ahout-content {
      flex: 1;
      overflow-x: hidden;
      .about-content-title {
        padding: 0.4rem 0;
        margin-bottom: .4rem;
        text-align: center;
        font-weight: 600;
        font-size: 1.4rem;
        background-color: rgb(78, 233, 207);
      }
      p {
        text-indent: 2em;
      }
    }
    .about-footer {
      width: 100%;
      padding: .4rem 0;
      background: #fff;
      /* display: flex;
      align-items: center;
      justify-content: space-between; */
    }
  }
</style>
