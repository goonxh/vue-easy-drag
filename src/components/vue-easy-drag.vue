<template>
    <div id="box" @click="boxClick">
        <p>{{text}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
        }
    },
    created() {
        
    },
    methods: {
        boxClick() {
            this.text = '恭喜发财！';
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
