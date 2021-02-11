import Favorites from './Favorites'

const exact = true;

const routes = [
    {
        name: 'favorites',
        path: '/favs',
        component: Favorites,
        exact,
    },
];

export default routes;
