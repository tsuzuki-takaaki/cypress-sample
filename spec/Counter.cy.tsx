import { Counter } from '../src/Counter'

describe('<Counter />', () => {
  context('when component is rendered', () => {
    it('display 0', () => {
      cy.mount(<Counter />)
      cy.get('[id=counter]').should('have.text', 'Count: 0')
    })    
  }) 

  context('when increment button is clicked', () => {
    it('increments counter', () => {
      cy.mount(<Counter/>)
      cy.get('[id=1]').click()
      cy.get('[id=counter]').should('have.text', 'Count: 1')
    })
  })

  context('when decrement button is clicked', () => {
    it('decrements counter', () => {
      cy.mount(<Counter/>)
      cy.get('[id=2]').click()
      cy.get('[id=counter]').should('have.text', 'Count: -1')
    })
  })
})
