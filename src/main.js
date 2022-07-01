import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

const app = createApp(App);
app.use(router)
    .use(vuetify);

loadFonts();

const componentPrefix = 'hu';
    
/**------------- Load components ------------**/
const components = require.context("./components/", true, /\.vue$/i);
components.keys().map((key) => {
    const name = key.match(/\/([\w/_-]+)/)[1].replace(/[/_]/g, "-");
    console.debug("load component " + name);
    const component = components(key);

    return app.component(`${componentPrefix}-${name}`, component.default);
});

app.mount('#app');
