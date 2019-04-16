import {
    Selector
} from 'testcafe'
import {
    ClientFunction
} from 'testcafe';


export default class Functions {
    constructor() {
        this.browserscroll = ClientFunction(function () {
            window.scrollBy(0, 500)
        });
    }
}
