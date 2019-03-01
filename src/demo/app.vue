<template>
    <div id="app">
        <vue-easy-drag :w="100"
                       :h="100"
                       :l="900"
                       :t="400"
                       :z="99"
                       :pw="pw"
                       :ph="ph"
                       onselectstart="return false;">
            <div>#1</div>
        </vue-easy-drag>
        <div class="dragContainer">
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
                           onselectstart="return false;">
                <div>#3</div>
            </vue-easy-drag>
        </div>
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
        created() {

        },
        methods: {
        }
    }
</script>

<style lang="scss">
    *{
        margin: 0;
        padding: 0;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    #app {
        width: 100%;
        height: 100%;
        position: relative;
        .dragContainer {
            width: 800px;
            height: 400px;
            border: 1px solid #111;
            position: relative;
            padding: 20px;
        }
        .dragBox {
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
