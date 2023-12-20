Feature('customer Review Check');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('Test Customer Review on home', ({ I }) => {
    I.waitForElement('.restaurant__name a', 30);
    I.seeElement('.restaurant__name a');

    const firstResto = locate('.restaurant__name a').first();
    I.click(firstResto);

    I.waitForElement('.borderContent', 30);
    I.seeElement('.borderContent');
});

Scenario('Test Customer Review on favorite', ({ I }) => {
    I.amOnPage('/#/Favorite');
    I.waitForElement('.restaurant__name a', 30);
    I.seeElement('.restaurant__name a');
    const firstRestaurant = locate('.restaurant__name a').first();
    I.click(firstRestaurant);
    I.waitForElement('.borderContent', 30);
    I.seeElement('.borderContent');
});