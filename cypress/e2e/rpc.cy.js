describe('RPS game', () => {
  //before each test
  beforeEach(() => {
  // navigate to the right URL
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  //play with scissors option
  it('play the game with scissors', () => {     
    // check the button is there and click the scissors button
    cy.get('[cy-id ="scissors"]').should('exist').click();
    //check scissors shows up as your choice
    cy.get('#your-choice').should('have.text', 'scissors');
    //check the computer option
    cy.get('#computers-choice').then(($op) => {
       //if the computer option is scissors
      //the result is a tie
      if($op.text().includes('scissors')){
        cy.get('#results').contains('Its a Tie!')
      }
      //if the computer option is rock
      //the computer wins
      else if($op.text().includes('rock')){
        cy.get('#results').contains('Computer Wins')
      }
      //the user wins
      else {
        cy.get('#results').contains('You Win!!')
       }
    })     
  })

  it('play the game with rock', () => {
    // check the button is there and click the rock button
    cy.get('[cy-id ="rock"]').should('exist').click();
    //check rock shows up as your choice
    cy.get('#your-choice').should('have.text', 'rock');
    //check the computer option
    cy.get('#computers-choice').then(($op) => {
       //if the computer option is rock
      //the result is a tie
      if($op.text().includes('rock')){
        cy.get('#results').contains('Its a Tie!')
      }
      //if the computer option is paper
      //the computer wins
      else if($op.text().includes('paper')){
        cy.get('#results').contains('Computer Wins')
      }
      //the user wins
      else {
        cy.get('#results').contains('You Win!!')
       }
    })     
  })

  it('play the game with paper', () => {
    // check the button is there and click the paper button
    cy.get('[cy-id ="paper"]').should('exist').click();
    //check paper shows up as your choice
    cy.get('#your-choice').should('have.text', 'paper');
    //check the computer option
    cy.get('#computers-choice').then(($op) => {
       //if the computer option is paper
      //the result is a tie
      if($op.text().includes('paper')){
        cy.get('#results').contains('Its a Tie!')
      }
      //if the computer option is scissors
      //the computer wins
      else if($op.text().includes('scissors')){
        cy.get('#results').contains('Computer Wins')
      }
      //the user wins
      else {
        cy.get('#results').contains('You Win!!')
       }
    })     
  })
})