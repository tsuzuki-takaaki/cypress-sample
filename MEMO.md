## Refs
https://github.com/cypress-io/cypress-realworld-app

## Selector
> There are various ways to select items from the DOM using Cypress. We will use cy.get(), which allows us to pass in a CSS-like selector.

```tsx
  cy.get('span').should('have.text', '0')
```
=> 全てのspanタグに一致する
- attributeあり
```tsx
  cy.get('[id=100]').should('have.text', '0')
```
=> `id="100"`を持つDOMに一致

https://docs.cypress.io/guides/references/best-practices#Selecting-Elements

> Oftentimes we see users run into problems targeting their elements because:
>
> - Your application may use dynamic classes or ID's that change
> - Your selectors break from development changes to CSS styles or JS behavior

> Luckily, it is possible to avoid both of these problems.
> 
> 1. Don't target elements based on CSS attributes such as: id, class, tag
> 2. Don't target elements that may change their textContent
> 3. Add data-* attributes to make it easier to target elements

> Targeting the element above by tag, class or id is very volatile and highly subject to change. You may swap out the element, you may refactor CSS and update ID's, or you may add or remove classes that affect the style of the element.

↑ idとかclassとかで指定するのは良くないらしい(個人的には全然いいと思ってる)

## Assertion
