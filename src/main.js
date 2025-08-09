import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from '@/app.vue';
import router from '@/router';
import vuetify from '@/plugins/vuetify';
import countryFlag from 'vue-country-flag-next';
import { loadFonts } from '@/plugins/webfontloader';
import messages from '@/plugins/snippetloader';
import '@/assets/main.css';

const app = createApp(App);
const i18n = createI18n({
    locale: 'de-DE',
    fallbackLocale: 'de-DE',
    messages
});

app.use(router)
    .use(vuetify)
    .use(i18n);
app.component('country-flag', countryFlag);

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

