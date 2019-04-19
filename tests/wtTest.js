import {
    Selector
} from 'testcafe';
import {
    ClientFunction
} from 'testcafe';
import Page from '../shared/pageObject';
import Platform from '../shared/platform';
import Functions from '../shared/functions';

const page = new Page();
const plat = new Platform();
const func = new Functions();

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
    await t
        .click(plat.contactUs)
    await t
        .click(plat.contactUs)
    await t
        .click(plat.notification)
    await t
        .click(plat.notification)
    await t
        .click(plat.browseMkts)
    await t
        .click(plat.questions)
    await t
        .click(plat.manageRisk)
    await t
        .click(plat.backRisk)
    await t
        .click(plat.questions)
    await t
        .click(plat.popular)
    await t
        .click(plat.bonds)
    await t
        .click(plat.trendMkts)
    await t
        .click(plat.commodites)
    await t
        .click(plat.equities)
    await t
        .click(plat.fx)
    await t
        .click(plat.indicies)
    await t
        .click(plat.interstRates)
    await t
        .click(plat.iShares)
    await t
        .click(plat.metals)
    await t
        .click(plat.options)
    await t
        .click(plat.sectors)
    await t
        .click(plat.fxMetals)
    await t
        .click(plat.crypto)

    console.log(await plat.versionNum.innerText)

    await t
        .click(plat.iconBut)
    await t
        .click(plat.logOut) //logout




});


fixture('WT Forex.com Test')
    .page(page.fxURL);

test('WT Forex.com Platform', async t => {

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

    await func.browserscroll(0, 500)

    await t
        .click(page.fxSubmit)
    await t
        .click(plat.contactUs)
    await t
        .click(plat.contactUs)
    await t
        .click(plat.notification)
    await t
        .click(plat.notification)
    await t
        .click(plat.browseMkts)
    await t
        .click(plat.questions)
    await t
        .click(plat.manageRisk)
    await t
        .click(plat.backRisk)
    await t
        .click(plat.questions)
    await t
        .click(plat.popular)
    await t
        .click(plat.bonds)
    await t
        .click(plat.trendMkts)
    await t
        .click(plat.commodites)
    await t
        .click(plat.equities)
    await t
        .click(plat.fx)
    await t
        .click(plat.indicies)
    await t
        .click(plat.interstRates)
    await t
        .click(plat.iShares)
    await t
        .click(plat.metals)
    await t
        .click(plat.options)
    await t
        .click(plat.sectors)
    await t
        .click(plat.fxMetals)
    await t
        .click(plat.crypto)

    console.log(await plat.versionNum.innerText)

    await t
        .click(plat.iconBut)
    await t
        .click(plat.logOut) //logout


});
