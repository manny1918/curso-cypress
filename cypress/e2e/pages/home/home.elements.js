export class HomeElements {
  static get categoriesMenu() {
    return {
      get phones() {
        return cy.contains("a", "Phones");
      },
      get laptops() {
        cy.contains("a", "Laptops");
      },
      get monitors() {
        cy.contains("a", "Monitors");
      },
    };
  }

  static product(productName) {
    return cy.contains("a", productName);
  }
}
