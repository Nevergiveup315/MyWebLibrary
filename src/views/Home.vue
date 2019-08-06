<template>
  <div class="home-wrap">
    <div class="home-header">
      <v-header :title="homeTitle"/>
    </div>
    <div class="home-content">
      <cube-button @click="showPicker">Picker</cube-button>
      <h3 class="home-title">致我们伟大的祖国</h3>
      <p class="home-content">黎明驱走了黑暗，日出带来了光芒，祖国的光辉好似阳光，照亮了我们的前程，指明了我们前进的方向，带领全国各族人民从贫穷走向富裕，从胜利走向辉煌。</p>

      <p class="home-content">中华人民共和国国旗旗面为红色象征革命。旗上的五颗五角星及其相互关系象征共产党领导下的革命人民大团结。星用黄色是为着在红地上显出光明，四颗小五角星各有一角正对着大星的中心点，表示围绕着一个中心而团结。每逢国庆，去天安门广场看升国旗是无数人心中的梦想。因此，利用国庆长假去北京游玩的人们，通常会赶早来到天安门广场看国旗班的军人升旗，以表达对祖国的无比热爱，看着五星红旗徐徐升起，心中的激动无以言表。每年10月1日是我国的国庆节，我国于1999年修订发布《全国年节及纪念日放假办法》，将国庆节与相邻的周六、日组合为7天的国庆长假，被称之为“国庆黄金周”，用放假的形式，让老百姓共同感受国庆的欢乐。</p>

      <p class="home-content">回首这70年，中华人民走得每一步都是步履蹒跚，每一步都付出了巨大牺牲。这70年，中华人民永远忘不了，抗美援朝战场上精神与钢铁的较量;忘不了，我驻南斯拉夫大使馆的悲愤与耻辱;忘不了，南沙群岛护我主权时对手的无耻与卑劣;这牺牲包含了所有的付出，既有先烈的浴血、也有我辈的拼搏，所有的一切，都离不开大家的团结奋进，离不开大家不惧牺牲，勇往直前的精神。</p>

      <p class="home-content">但是如今中国经过几十年来的艰苦建设，已取得了“乘长风，破万里浪”的迅猛发展:《辉煌中国》之《圆梦工程》透过港珠澳大桥、胡麻岭隧道、郑万铁路、复兴号、上海洋山港自动化码头、中国移动互联网等一个个超级工程，领略五年来一张张中国基础建设的大网，如何编织起人民走向幸福、美好的希望版图，托举起中华民族伟大复兴的中国梦。</p>

      <p class="home-content">无论你的家乡在哪里?无论你最想去到哪个地方?祖国到处都是“诗和远方”。我们牢记着祖国的风风雨雨，也奋力创造更美好的生活!</p>
    </div>
    <div class="home-footer">
      <v-tarBar/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
// const column1 = [{ text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' },
//   { text: '幽鬼', value: '幽鬼' }, { text: '禽兽', value: '禽兽' }]
import TabBar from '@/components/tabBar.vue'
import Header from '@/components/header.vue'
export default {
  name: 'home',
  components: {
    'v-tarBar': TabBar,
    'v-header': Header
  },
  data () {
    return {
      column1: [{ text: '剧毒', value: '剧毒' }, { text: '蚂蚁', value: '蚂蚁' },
        { text: '幽鬼', value: '幽鬼' }, { text: '禽兽', value: '禽兽' }, { text: '姓名', value: 'killMan' }],
      homeTitle: '不忘初心，牢记使命！'
    }
  },
  methods: {
    showPicker () {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [this.column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      this.$createDialog({
        type: 'warn',
        content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
        icon: 'cubeic-vip'
      }).show()
    },
    cancelHandle () {
      this.$createToast({
        type: 'correct',
        txt: '取消选择',
        time: 1000
      }).show()
    }
  }
}
</script>
<style lang="less" scoped>
  .home-wrap {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: rgb(215, 217, 218);
    .home-header {
      height: 2.4rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }
    .home-content {
      flex: 1;
      overflow-x: hidden;
      .home-title {
        padding: .8rem 0;
        text-align: center;
        font-weight: 600;
        background-color: rgb(7, 247, 247);
      }
      .home-content {
        line-height: 1.2;
        padding: 0 .3rem;
        text-indent: 2em;
      }
      .home-content:last-child{
        margin-bottom: 1rem;
      }
    }
  }
</style>
