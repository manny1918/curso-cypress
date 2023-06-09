import { CommomPageData } from "../pages/common-page/common-page.data";
import { CommonPageMethods } from '../pages/common-page/common-page.methods';
import { SignupMethods } from '../pages/signup/signup.methods';
import { Logger } from '../util/logger';

describe(CommomPageData.testSuites.registroYAutenticacion, () => {
  it("Registro de usuario válido", () => {
    Logger.stepNumber(1)
    Logger.step('Navegar a la página de inicio')
    CommonPageMethods.navigateToDemoBlaze();

    Logger.stepNumber(2)
    Logger.step('Hacer clic en "Sign up" en la barra de navegación')
    CommonPageMethods.clickOnSignupOption();

    Logger.stepNumber(3)
    Logger.step('Completar todos los campos obligatorios con información válida')
    SignupMethods.insertUsername('dhfgjkdhgjfgj')
    SignupMethods.insertPassword('dhfgjkdhgjfgj')

    Logger.stepNumber(4)
    Logger.step('Hacer clic en "Sign up" para registrar el usuario')
    SignupMethods.clickOnSignupButton();
    Logger.verification('Verificar que se muestre el mensaje "Sign up successful"')
    SignupMethods.verifySignupSuccesfulMessageIsDisplayed();
  });
});
