# vue2-cron

基于element-ui 的cron组件

### 预览
[预览](https://yimou6.github.io/vue2-cron)

### 安装 
> npm install vue2-cron

### 使用
```vue
<template>
  <vue2-cron v-model="cronText"></vue2-cron>
</template>
<script>
import Vue2Cron from 'vue2-cron'
export default {
  components: { Vue2Cron },
  data() {
    return {
      cronText: ''
    }  
  }
}
</script>
```

