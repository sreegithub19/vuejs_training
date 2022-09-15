/* eslint-disable */
import { createApp } from 'vue'
import ScssApp from './apps/ScssApp.vue'
import SlotApp from './apps/SlotApp.vue'
import App from './apps/App.vue'
import RootComp from './apps/RootComp.vue'
import RouterApp from './apps/RouterApp.vue'
import TeleportApp from './apps/TeleportApp.vue'
import VuexApp from './apps/VuexApp.vue'
import LifeCycle from './apps/LifeCycle.vue'
import router from './router'



//createApp(App).mount('#app')  
//createApp(ScssApp).mount('#app')
//createApp(LifeCycle).mount('#app')
//createApp(SlotApp).mount('#app')   //  warning: runtime-core.esm-bundler.js?d2dd:38 [Vue warn]: Failed to resolve component: SlotComp
//createApp(RootComp).mount('#app')
createApp(RouterApp).use(router).mount('#app')   // warning: runtime-core.esm-bundler.js?d2dd:38 [Vue warn]: Failed to resolve component: router-view
//createApp(TeleportApp).mount('#app')   // error: runtime-dom.esm-bundler.js?2725:36 Uncaught (in promise) TypeError: Cannot read properties of null (reading 'nextSibling')
//createApp(VuexApp).mount('#app')     // error: Uncaught TypeError: Cannot read properties of null (reading 'parentNode')