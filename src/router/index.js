import { createRouter, createWebHashHistory } from 'vue-router';

const routeComponents = {};

/**------------- Load views ------------**/
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

console.log('routeComponents', routeComponents);

const routes = [
    routeComponents.home,
    routeComponents.about
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
