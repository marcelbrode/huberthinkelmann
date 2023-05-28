import { createRouter, createWebHashHistory } from 'vue-router';

/**------------- Load views ------------**/
const routeComponents = {};
const views = require.context('@/views/', true, /Route\.vue$/i);
views.keys().forEach((filePath) => {
    const name = filePath.match(/\/([\w/_-]+)Route/)[1];
    const path = `/${name !== 'home' ? name : ''}`;
    const fileName = filePath.match(/\/([\w/_-]+Route\.vue)/)[1];
    const component = () => import(`@/views/${fileName}`);

    routeComponents[name] = {
        path, name, component
    };
});

const routeOrder = [
    'home', 'about', 'services', 'contact'
];

const router = createRouter({
    history: createWebHashHistory(),
    routes:  routeOrder.map(route => routeComponents[route])
});

export default router;
