/// <reference types='cypress' />
import 'cypress-file-upload';

describe('Student Registration page', () => {
  before(() => {
    cy.visit('/');
  });

  it('should register new user', () => {
    cy.get('#firstName').type('Vitalii');
    cy.get('#lastName').type('Hulaievych');
    cy.get('#userEmail').type('test@gmail.com');
    cy.get('[value=Male]').click();
    cy.get('#userNumber').type('123456789');
    cy.get('#dateOfBirthInput').click();

    cy.get('.react-datepicker__month-select').select(1);
    cy.get('.react-datepicker__year-select').select('1996');
    cy.get('[aria-label="Choose Monday, February 12th, 1996"').click();

    cy.get('#subjectsInput').type('Subject');
    cy.get('#hobbies-checkbox-1').click();

    cy.get('#uploadPicture').attachFile('image.avif');

    cy.get('#currentAddress').type('Any address');

    cy.get('#react-select-3-input').click();
    cy.get('#react-select-3-option-2').click();

    cy.get('#react-select-4-input').click();
    cy.get('#react-select-4-option-1').click();

    cy.get('#submit').click();

    cy.contains(
      '#example-modal-sizes-title-lg',
      'Thanks for submitting the form'
    ).should('exist');
  });
});
