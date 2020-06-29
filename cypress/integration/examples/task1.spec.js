context('Task1', function () {
    beforeEach(function () {
        cy.visit("https://demo.applitools.com/gridHackathonV1.html");
    })

    // https://on.cypress.io/interacting-with-elements

    it('searchBox is shown on desktop', function () {
        cy.get('.custom-search-input input').should('be.visible').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)').should('have.css', 'height', '40px').get('.header-icon_search_custom').should('be.visible');
    })

    it('searchBox is shown on mobile', function () {
        cy.viewport('iphone-6');
        cy.get('.custom-search-input input').should('not.be.visible');
        cy.get('.btn_search_mob').should('be.visible')
    })

    it('searchBox is not shown on tablet', function () {
        cy.viewport('ipad-2');
        cy.get('.custom-search-input input').should('be.visible');
        cy.get('.btn_search_mob').should('not.be.visible')
    })

    it('searchBox is not shown on mobile', function () {
        cy.viewport('iphone-6');
        cy.get('.custom-search-input input').should('not.be.visible');
        cy.get('.btn_search_mob').should('be.visible')
    })

    it('cart icon is displayed correctly on desktop', function () { // cy.viewport('iphone-6');
        cy.get('.dropdown-cart').should('be.visible');
        cy.get('.dropdown-cart strong').should('be.visible').should('have.text', 2)
    })

    it('product amout not displayed on cart icon', function () {
        cy.viewport('iphone-6');
        cy.get('.dropdown-cart').should('be.visible');
        cy.get('.dropdown-cart strong').should('not.be.visible');
    })
})
