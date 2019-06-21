import {
    Selector
} from 'testcafe';
import {
    platActions
} from '../shared/helper.js';
import {
    platActionsTF
} from '../shared/helper.js';
import {
    platActionsAlly
} from '../shared/helper.js';
import {
    platActionsWhsIi
} from '../shared/helper.js';
import {
    ciLogin
} from '../shared/helper.js';
import {
    fxLogin
} from '../shared/helper.js';
import {
    tfLogin
} from '../shared/helper.js';
import {
    allyLogin
} from '../shared/helper.js';
import {
    whsLogin
} from '../shared/helper.js';
import {
    iiLogin
} from '../shared/helper.js';
import {
    platActionsFxf
} from '../shared/helper.js';
import {
    fxfLogin
} from '../shared/helper.js';

import Page from '../shared/pageObject';
import Platform from '../shared/platform';

const plat = new Platform();
const page = new Page();


fixture('WT CI Test')
    .page(page.ciURL);
test('CI Platform', async t => {
    await ciLogin(t);
    await platActions(t);
});


fixture('WT Forex.com Test')
    .page(page.fxURL);
test('WT Forex.com Platform', async t => {
    await fxLogin(t);
    await platActions(t);
});

fixture('WT TradFair Test')
    .page(page.tfURL);
test('WT TradFair Platform', async t => {
    await tfLogin(t);
    await platActionsTF(t);
});

fixture('WT Ally Test')
    .page(page.allyURL);
test('WT Ally Platform', async t => {
    await allyLogin(t);
    await platActionsAlly(t);
});

fixture('WT WHS Test')
    .page(page.whsURL);
test('WT WHS Platform', async t => {
    await whsLogin(t);
    await platActionsWhsIi(t);
});

fixture('WT II Test')
    .page(page.iiURL);
test('WT II Platform', async t => {
    await iiLogin(t);
    await platActionsWhsIi(t);
});


fixture('WT GTX Test')
    .page(page.gtxURL);
test('WT GTX Platform', async t => {

    await t
    console.log(await plat.versionNum.innerText)

});


fixture('WT FXFlat Test')
    .page(page.fxfURL);
test('FXFlat Platform', async t => {
    await fxfLogin(t);
    await platActionsFxf(t);
});
