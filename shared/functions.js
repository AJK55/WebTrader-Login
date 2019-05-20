import {
    Selector
} from 'testcafe'
import {
    ClientFunction
} from 'testcafe';

import Platform from './platform';
const plat = new Platform();


export default class Functions {
    constructor() {
        this.browserscroll = ClientFunction(function (a, b) {
            window.scrollBy(a, b)
        });

    }
}
