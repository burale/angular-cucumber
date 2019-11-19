import { browser, by, element } from 'protractor';

export class AppPage {

  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root a')).getText() as Promise<string>;
  }

  goToLogin() {
    return element(by.css('app-root a')).click() as Promise<void>;
  }

  getHomeTitle() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  fillUsername() {
      return element(by.css('app-root #username')).sendKeys('johnhdsajhfhkjfasdjhsjhfjhfjknfkjfklj') as Promise<void>;
  }

  fillPassword() {
      return element(by.css('app-root #password')).sendKeys('1234sjhdsajhdfjkhdsajkhfsjdsjhkdsjhkdsjh') as Promise<void>;
  }

  submitForm() {
    return element(by.css('app-root #submitBtn')).click() as Promise<void>;
  }

}
