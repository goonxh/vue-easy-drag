<template>
    <div id="app">
        <vue-easy-drag :w="100"
                       :h="100"
                       :l="50"
                       :t="50"
                       :pw="pw"
                       :ph="ph"
                       onselectstart="return false;">
            <div>#1</div>
        </vue-easy-drag>
        <vue-easy-drag :w="50"
                       :h="50"
                       :l="200"
                       :t="50"
                       :pw="pw"
                       :ph="ph"
                       onselectstart="return false;">
            <div>#2</div>
        </vue-easy-drag>
        <vue-easy-drag :w="50"
                       :h="50"
                       :l="200"
                       :t="250"
                       :pw="pw"
                       :ph="ph"
                       @windowResize="windowResize"
                       onselectstart="return false;">
            <div>#3</div>
        </vue-easy-drag>
    </div>
</template>

<script>
    import vueEasyDrag from '../components/vue-easy-drag.vue';

    export default {
        name: 'app',
        data() {
          return {
              pw: null,  // 父元素宽度
              ph: null,  // 父元素高度
          }
        },
        components: {
            vueEasyDrag,
        },
        methods: {
            windowResize(pw, ph) {
                this.pw = pw;
                this.ph = ph;
            }
        }
    }
</script>

<style lang="scss">
    #app {
        width: 50vw;
        height: 50vh;
        border: 1px solid #111;
        position: relative;
        padding: 20px;
        margin: 50px;

        .dragBox {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #123456;
            div{
                width: 100%;
                height: 100%;
                color: #fff;
                display: flex;
                justify-content: center;
                align-content: center;
            }
        }
    }
</style>
