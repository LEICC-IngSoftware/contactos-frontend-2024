import { createApp } from 'vue'
import router from "./router"
import App from './App.vue'


import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

const app = createApp(App)
//Utilizar enrutador
app.use(router)
//Montar aplicación en div con id app
app.mount('#app')
