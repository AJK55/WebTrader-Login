import {
    Selector
} from 'testcafe'


fixture('WT CI Test')
    .page('https://trade.loginandtrade.com/cityindex/#/');



test('CI Platform', async t => {

    await t
        .click(Selector('#ifelite-login > div > main > cityindex-login > div > div.cityindex-tabs > div.cityindex-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'))
    await t
        .typeText(Selector('#ifelite-login > div > main > cityindex-login > div > div.cityindex-tabs > div.cityindex-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'), 'DA918641')
    await t
        .click(Selector('#c-password'))
    await t
        .typeText(Selector('#c-password'), 'password')
    await t
        .click(Selector('#ifelite-login > div > main > cityindex-login > div > div.cityindex-tabs > div.cityindex-tabs-content > div > div:nth-child(1) > form > div:nth-child(4) > div > input'))

    console.log(await Selector('body > div.version').innerText)

});


fixture('WT Forex.com Test')
    .page('https://www.forex.com/en-uk/account-login/');



test('CI Platform', async t => {

    await t
        .click(Selector('body > div.remodal-wrapper > div > div > div > div.modal__content > div > div:nth-child(1) > a'))
    await t
        .click(Selector('body > main > div.description > section > div > div > div:nth-child(1) > div > div > div > form > div:nth-child(4) > div > label'))
    await t
        .typeText(Selector('#platformUsername'), 'DA918641')
    await t
        .click(Selector('body > main > div.description > section > div > div > div:nth-child(1) > div > div > div > form > div:nth-child(5) > div:nth-child(1) > label'))
    await t
        .typeText(Selector('#platformPassword'), 'password')
    await t
        .click(Selector('#formSubmit'))

    console.log(await Selector('body > div.version').innerText)

});
