<template>
    <div id="box" @click="boxClick"></div>
</template>

<script>
export default {
    created() {
        
    },
    methods: {
        boxClick() {
            console.log('恭喜发财！');
        }
    }
}
</script>

<style lang="scss">
#box {
    width: 120px;
    height: 120px;
    border-radius: 15px;
    background-color: #123456;
    cursor: pointer;
}
</style>
