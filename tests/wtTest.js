import {
    Selector
} from 'testcafe';
import {
    platActions
} from '../shared/helper.js';
import {
    ciLogin
} from '../shared/helper.js';
import {
    fxLogin
} from '../shared/helper.js'
import Page from '../shared/pageObject';
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
