import {
    Selector
} from 'testcafe';
import Page from './pageObject';

const page = new Page();

fixture('WT CI Test')
    .page(page.ciURL);



test('CI Platform', async t => {

    //await t
    //  .click(Selector('#ifelite-login > div > main > cityindex-login > div > div.cityindex-tabs > div.cityindex-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'))
    await t
        .typeText(page.ciUserField, page.userName)
    //await t
    //  .click(Selector('#c-password'))
    await t
        .typeText(page.ciPassField, page.password)
    await t
        .click(page.ciSubmit)

    console.log(await page.versionNum.innerText)

});


fixture('WT Forex.com Test')
    .page(page.fxURL);



test('CI Platform', async t => {

    await t
        .click(page.fxContinue)
    await t
        .click(page.fxUserClick)
    await t
        .typeText(page.fxUserField, page.userName)
    await t
        .click(page.fxPassClick)
    await t
        .typeText(page.fxPassField, page.password)
    await t
        .click(page.fxSubmit)

    console.log(await page.versionNum.innerText)

});
