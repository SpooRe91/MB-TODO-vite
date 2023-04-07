
import App from "../App";
import NavBar from "../Components/NavBar/NavBar";
import { mount } from 'cypress/react18'
import { store } from "../App/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

describe('Rendering the nav bar and showing the form component + filling it up', () => {
    beforeEach(() => {
        mount(
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                    <NavBar />
                </Provider>
            </BrowserRouter>
        )
        cy.viewport(1280, 720);
    });

    it('the nav bar should have All tasks and completed tasks', () => {
        cy.get('[data-cy="container"]').contains('All tasks');
        cy.get('[data-cy="container"]').contains('Completed/Deleted tasks');
    });

    it('should contain the show form button', () => {
        cy.get('[data-cy="showFormButton"]').should('be.visible');
    });

    it('should show the form upon click', () => {
        cy.get('[data-cy="showFormButton"]').click();
        cy.get('[data-cy="form-component"]').should("be.visible").as('formComponent');
    });

    it('should fill out the form and create a new task + show the task added sign', () => {
        cy.get('[data-cy="taskName"]').type('Test-name');
        cy.get('[data-cy="taskBody"]').type('Test-body');
        cy.get('[data-cy="taskOwner"]').type('Test-owner');
        cy.get('[data-cy="taskStart"]').type('2222-12-12');
        cy.get('[data-cy="taskEnd"]').type('2222-12-12');
        cy.get('[data-cy="submit-button"]').click();
        cy.get('[data-cy="added-message"]').should("be.visible");
        cy.get('[data-cy="added-ok-button"]').should("be.visible");
        cy.get('[data-cy="added-ok-button"]').click();
        cy.get('[data-cy="form-component"]').contains('[data-cy="added-message"]').should('not.be.true');
        cy.get('[data-cy="showFormButton"]').click();
        cy.get('[data-cy="app-main"]').contains('[data-cy="form-component"]').should('not.be.true');
    });

    it('should get name already exists, fix error, and submit properly', () => {
        cy.get('[data-cy="showFormButton"]').click();
        cy.get('[data-cy="taskName"]').type('Test-name');
        cy.get('[data-cy="taskBody"]').type('Test-body');
        cy.get('[data-cy="taskOwner"]').type('Test-owner');
        cy.get('[data-cy="taskStart"]').type('2222-12-12');
        cy.get('[data-cy="taskEnd"]').type('2222-12-12');

        cy.get('[data-cy="submit-button"]').click();

        cy.get('[data-cy="error-name-already-exists"]').should('be.visible');
        cy.get('[data-cy="taskName"]').clear();
        cy.get('[data-cy="taskName"]').type('Test-name1');
        cy.get('[data-cy="form-component"]').contains('[data-cy="error-name-already-exists"]').should('not.be.true');

        cy.get('[data-cy="submit-button"]').click();
        cy.get('[data-cy="added-message"]').should("be.visible");
        cy.get('[data-cy="added-ok-button"]').should("be.visible");
        cy.get('[data-cy="added-ok-button"]').click();
        cy.get('[data-cy="form-component"]').contains('[data-cy="added-message"]').should('not.be.true');
        cy.get('[data-cy="showFormButton"]').click();
        cy.get('[data-cy="app-main"]').contains('[data-cy="form-component"]').should('not.be.true');
    });

})