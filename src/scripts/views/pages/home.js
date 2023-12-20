import TheRestaurantDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <div class="tag">
          <h2 class="titleOne">Latest</h2>
          <h2 class="titleTwo">RESTAURANT</h2>
          <h2 class="titleThree">List of the best restaurants in Indonesia.</h2>
          <hr class="divider">
        </div>
        <div id="restaurant" class="restaurant">
      </div>
    `;
  },

  async afterRender() {
    const restaurant = await TheRestaurantDbSource.ListRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
