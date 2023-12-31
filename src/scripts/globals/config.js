// Task: websocket??
const CONFIG = {
    KEY: process.env.API_KEY_TMDB,
    BASE_URL: 'https://restaurant-api.dicoding.dev/',
    BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/large/',
    DEFAULT_LANGUAGE: 'en-us',
    CACHE_NAME: 'RestaurantCatalogue',
    DATABASE_NAME: 'restaurant-catalogue-database',
    DATABASE_VERSION: 1,
    OBJECT_STORE_NAME: 'restaurants',
    WEB_SOCKET_SERVER: 'wss://movies-feed.dicoding.dev',
};

export default CONFIG;
