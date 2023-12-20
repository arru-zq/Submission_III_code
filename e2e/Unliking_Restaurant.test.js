/* eslint-disable no-undef */
const assert = require('assert');

Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

// fix this
Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant__name a', 30);
  I.seeElement('.restaurant__name a');
  const firstRestaurant = locate('.restaurant__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant__name a', 30);
  I.seeElement('.restaurant__name a');

  const firstlike = locate('.restaurant__name a').first();
  const nameone = await I.grabTextFrom('.restaurant__name a');
  assert.strictEqual(firstRestaurantName, nameone);
  I.click(firstlike);

  I.waitForElement('#likeButton', 30);
  I.seeElement("#likeButton");
  I.click("#likeButton");
  I.amOnPage("/#/favorite");
  I.see('Add a new favorite restaurant', '.nothing');
});
