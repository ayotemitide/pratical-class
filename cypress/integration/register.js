describe("User Login", function(){
  it("Successful Login", function(){
    cy.visit("https://www.konga.com/");
  })
  it("Invalid Login", function(){
    cy.get('._12e27_1r3kc > ._7ad32_SD12Y').click();
    cy.wait
    cy.get('#username').type('ayo@.com');
    cy.get('#password').type('qwe2r');
    cy.wait(1000);
    cy.get('.eed68_3IZCC > ._2aac2_3bwnD > ._0a08a_3czMG').click();
    //cy.get(':nth-child(1) > .trig').click();
    //cy.get('[href="/customer/account/index/"]').click();
    //cy.get('#authForm').click();
    //cy.get('#authForm > .-fg1 > :nth-child(1)').click();
    //cy.get('.-fg1 > :nth-child(1) > .lbl').type('a@g.com');
    //cy.get('[disabled]').click({force: true});
    
  })
})