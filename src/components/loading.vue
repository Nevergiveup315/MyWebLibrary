<template>
    <div class="loading-wrap" v-if="isLoading">
        <div class="loading-pattern">
            <cube-loading :size="28"></cube-loading>
        </div>
    </div>
</template>

<script>
export default {
  props: ['isLoading']

}
</script>

<style lang="less" scoped>
    .loading-wrap {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        .loading-pattern {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>
