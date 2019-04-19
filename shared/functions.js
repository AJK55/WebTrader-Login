import {
    Selector
} from 'testcafe'
import {
    ClientFunction
} from 'testcafe';


export default class Functions {
    constructor() {
        this.browserscroll = ClientFunction(function (a, b) {
            window.scrollBy(a, b)
        });


    }
}
