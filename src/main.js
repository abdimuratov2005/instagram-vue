import { createApp } from 'vue'
import './sass/style.scss'
import App from './App.vue'
import components from './components'
import router from './router/router';
import store from './store/index';


const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .mount('#app')