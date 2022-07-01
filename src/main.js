import { createApp } from 'vue';
import App from '@/app.vue';
import router from '@/router';

const app = createApp(App);
app.use(router);

/**------------- Load components ------------**/
const components = require.context("./components/", true, /\.vue$/i);
components.keys().map((key) => {
    const name = key.match(/\/([\w/_-]+)/)[1].replace(/[/_]/g, "-");
    console.debug("load component " + name);
    const component = components(key);

    return app.component(name, component.default);
});

/**------------- Load views ------------**/
const views = require.context("./views/", true, /\.vue$/i);
views.keys().map((key) => {
    const name = key.match(/\/([\w/_-]+)/)[1].replace(/[/_]/g, "-");
    console.debug("load component " + name);
    const component = views(key);

    return app.component(name, component.default);
});

app.mount('#app');