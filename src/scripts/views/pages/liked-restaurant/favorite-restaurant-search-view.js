import { createRestaurantItemTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
            <div id="restaurant" class="restaurant"></div>
        `;
  }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  showRestaurant(restaurant = []) {
    this.showFavoriteRestaurant(restaurant);
  }

  showFavoriteRestaurant(restaurant = []) {
    let html;
    if (restaurant.length) {
      html = restaurant.reduce(
        (carry, restaurant) =>
          carry.concat(createRestaurantItemTemplate(restaurant)),
        ''
      );
    } else {
      html = this._getEmptyRestaurantTemplate();
    }
    document.getElementById('restaurant').innerHTML = html;

    document
      .getElementById('restaurant')
      .dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return '<div id="query" class="nothing">Add a new favorite restaurant</div>';
  }
}
export default FavoriteRestaurantSearchView;
