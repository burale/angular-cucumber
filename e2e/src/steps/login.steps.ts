import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { async } from 'q';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am on the main page', async () => {
  await page.navigateTo();
});

When('Click Go to Login Form', async () => {
  await page.goToLogin();
});

When('Fill in email', async () => {
  await page.fillUsername();
});

When('Fill in password', async () => {
  await page.fillPassword();
});

When('Click submit button', async () => {
  await page.submitForm();
});

Then('I should be on the home page', async () => {
  expect(await page.getHomeTitle()).to.equal('Home Page');
});
