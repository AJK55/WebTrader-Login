import {
    Selector
} from 'testcafe';
import {
    ClientFunction
} from 'testcafe';
import {
    platActions
} from '../shared/helper.js';

import Page from '../shared/pageObject';
import Platform from '../shared/platform';
import Functions from '../shared/functions';

const page = new Page();
const plat = new Platform();
const func = new Functions();


fixture('WT CI Test')
    .page(page.ciURL);

test('CI Platform', async t => {

    await t
        .click(page.webTraderTab)
    await t
        .click(page.ciUserField)
    await t
        .typeText(page.ciUserField, page.userName)
    await t
        .click(page.ciPassField)
    await t
        .typeText(page.ciPassField, page.password)

    if (await page.ciSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }

    await t
        .click(page.ciSubmit)

    await platActions(t);

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

    if (await page.fxSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.fxSubmit)

    await platActions(t);



});
