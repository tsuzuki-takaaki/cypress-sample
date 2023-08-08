import { Counter } from '../src/Counter'

describe('<Counter />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Counter />)
  })

  context('when increment button is clicked', () => {
    it('increments counter', () => {
      cy.mount(<Counter/>)
      cy.get('[id=1]').click()
      cy.get('[id=counter]').should('have.text', 'Count: 1')
    })
  })
})
