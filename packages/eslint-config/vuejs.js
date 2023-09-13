module.exports = {
  root: true,
  extends: ['./base', 'plugin:vue/vue3-essential'],
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/multi-word-component-names': 'off', // 允许vue文件以一个单词命名
  },
}
