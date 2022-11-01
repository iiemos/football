import { createI18n } from 'vue-i18n'

// vite 动态引入所有语言
const files = import.meta.globEager('@/assets/json/**.json') // 同步引入
let messages = {}
for (const key in files) {
  messages[key.split('_')[1].split('.')[0].toLowerCase()] = files[key].default
}
const language = (navigator.language || 'en').toLocaleLowerCase() // 获取浏览器的语言
const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('langCode') || language.split('-')[0] || 'en', // 从缓存里拿，没有就用浏览器语言
  messages,
})

export default i18n
