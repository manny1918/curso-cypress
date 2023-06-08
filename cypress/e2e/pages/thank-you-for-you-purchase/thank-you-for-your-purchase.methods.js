import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods {
  static clickOnOkButton() {
    ThankYouForYourPurchaseElements.buttons.ok.click();
  }

  static verifyGreenCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
  }
}
