<template>
    <div id="app">
        <vue-easy-drag :w="100" 
                       :h="100"
                       :t="250">
        </vue-easy-drag>
    </div>
</template>

<script>
import vueEasyDrag from '../components/vue-easy-drag.vue';
export default {
    name: 'app',
    components: {
        vueEasyDrag,
    },
}
</script>

<style lang="scss">
#app{
    width: 100vh;
    height: 98vh;
    position: relative;
    .dragBox{
        border-radius: 50%; 
        background-color: #123456;
    }
}
</style>
