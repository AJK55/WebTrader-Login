import {
    Selector
} from 'testcafe';

export default class Page {
    constructor() {

        this.pageURLsEn = [
            this.ciURL = 'https://trade.loginandtrade.com/cityindex/#/',
            this.fxURL = 'https://www.forex.com/en-uk/account-login/'
        ];

        this.credentials = [
            this.userName = 'DA918641',
            this.password = 'password'

        ];

        this.ciObjects = [
            this.webTraderTab = Selector('#brand-webtrader-tab-label'),
            this.ciPassField = Selector('#c-password'),
            this.ciUserField = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'),
            this.ciSubmit = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div:nth-child(4) > div > input')

        ];

        this.fxObjects = [
            this.fxContinue = Selector('body > div.remodal-wrapper > div > div > div > div.modal__content > div > div:nth-child(1) > a'),
            this.fxUserClick = Selector('body > main > div.description > section > div > div > div:nth-child(1) > div > div > div > form > div:nth-child(4) > div > label'),
            this.fxUserField = Selector('#platformUsername'),
            this.fxPassClick = Selector('body > main > div.description > section > div > div > div:nth-child(1) > div > div > div > form > div:nth-child(5) > div:nth-child(1) > label'),
            this.fxPassField = Selector('#platformPassword'),
            this.fxSubmit = Selector('#formSubmit')
        ];



    }
}
