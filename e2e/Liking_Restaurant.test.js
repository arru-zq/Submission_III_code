const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/Favorite');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  I.seeElement('#query');
  I.see('Add a new favorite restaurant', '.nothing');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Add a new favorite restaurant', '.nothing');
  I.amOnPage('/');
  I.waitForElement('.restaurant__name a', 30);
  I.seeElement('.restaurant__name a');

  const firstResto = locate('.restaurant__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);

  I.click(firstResto);
  I.waitForElement('#likeButton', 30);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  const likedRestoName = await I.grabTextFrom('.restaurant__name');
  assert.strictEqual(firstRestoName, likedRestoName);
});
