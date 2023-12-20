import LikeButtonPresenter from '../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Show the like button and the restaurant has not been liked before', async () => {
    await TestFactories.likeButtonPresenter({
        id: 1,
    });
    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('Don`t show the unlike button and the restaurant has not been liked before', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('Able to like the restaurant', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // Memastikan restaurant berhasil disukai
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(1);
    expect(restaurant).toEqual({
        id: 1,
    });
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: 1,
      },
    });
    // Tambahkan restaurant dengan ID 1 ke daftar restaurant yang disuka
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka restaurant
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurantIdb.getAllRestaurant()).toEqual([{ id: 1 }]);
    FavoriteRestaurantIdb.deleteRestaurant(1);
  });
});
