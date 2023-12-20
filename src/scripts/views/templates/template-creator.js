import CONFIG from '../../globals/config';

// Create div list restaurant
const createRestaurantItemTemplate = (restaurant) => `
  <div>
    <div class="restaurantsContainer">
      <img class="detailPicture lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      <p>Rating: ${restaurant.rating} ⭐️</p>
      <p>City: ${restaurant.city} 🧭</p>
      <div class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></div>
    </div>
  </div>
`;

// Detail one
const createRestaurantDetailTemplate = (restaurant) => `
  <img class="detailPictureTwo lazyload" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="upperDiv">
    <h3 class="restName">${restaurant.name}</h3><br>

    <h3>Address</h3>
    <p>${restaurant.address}, ${restaurant.city} city</p><br>

    <h3>Categories</h3>
    <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p><br>

    <h3>Description</h3>
    <p>${restaurant.description}</p><br>
  </div>
  <div class="menuDiv">
    <div class="food">
      <h3>Foods</h3><br>
      <ul>${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}</ul><br>
    </div>
    <div class="drink">
      <h3>Drink</h3><br>
      <ul>${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}</ul><br>
    </div>
  </div>

  <div class="customerDiv">
    <h3 class="middleCustomer">Customer Reviews</h3>
    <div class="detailDiv">
    ${restaurant.customerReviews
      .map(
        (review) => `
          <div class="containerCustomer">
            <div class="upperNav">
              <div class="borderContent">
                <p>${review.name}</p>
                <p>${review.date}</p>
                <p>${review.review}</p>
              </div>
            </div>
          </div>
        `,
      )
      .join('')}
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
