#                  vue-easy-drag
![](https://ws1.sinaimg.cn/large/006tKfTcgy1g0n6akip1ng316x0magym.gif)

```js
npm i --save vue-easy-drag
```

### In your project:

```js
import vueEasyDrag from 'vue-easy-drag';
Vue.component('vue-easy-drag', vueEasyDrag);
```

Use the component: 

```vue
<template>
    <div id="app">
        <div class="dragContainer">
            <vue-easy-drag :w="50"
                           :h="50"
                           :l="200"
                           :t="50">
                <div>#1</div>
            </vue-easy-drag>
        </div>
    </div>
</template>
```



## Demo

[demo](https://goonxh.github.io/vue-easy-drag/)



