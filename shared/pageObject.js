import {
    Selector
} from 'testcafe';

export default class Page {
    constructor() {

        this.pageURLsEn = [
            this.ciURL = 'https://trade.loginandtrade.com/cityindex/#/',
            this.fxURL = 'https://www.forex.com/en-uk/account-login/',
            this.tfURL = 'https://trade.loginandtrade.com/tradefair/webtrader/',
            this.allyURL = 'https://trade.loginandtrade.com/allyinvest/webtrader/',
            this.whsURL = 'https://trade.loginandtrade.com/whs/webtrader/',
            this.iiURL = 'https://trade.loginandtrade.com/ii/webtrader/',
            this.gtxURL = 'https://trade.loginandtrade.com/dma/DA284758/bb94f2ed-9cea-45db-87dc-e028209da9dc'
        ];

        this.credentials = [
            this.userName = 'june0619@june.com',
            this.fxciPass = 'june0619',
            this.tfUser = 'XX413601',
            this.whsUser = 'XX584846',
            this.iiUser = 'XX956277',
            this.allyUser = 'XX964324',
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

        this.tfObjects = [
            this.tfWTTab = Selector('#brand-webtrader-tab-label'),
            this.tfUserField = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'),
            this.tfPassField = Selector('#c-password'),
            this.tfSubmit = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div:nth-child(4) > div > input')
        ];

        this.allyObjects = [
            this.allyUserField = Selector('#username'),
            this.allyPassField = Selector('#password'),
            this.allySubmit = Selector('#submitButtonField')
        ];

        this.whsObjects = [
            this.whsWTTab = Selector('#brand-webtrader-tab-label'),
            this.whsUserField = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'),
            this.whsPassField = Selector('#c-password'),
            this.whsSubmit = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div:nth-child(4) > div > input')
        ];

        this.iiObjects = [
            this.iiWTTab = Selector('#brand-webtrader-tab-label'),
            this.iiUserField = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div.field.login-field > input'),
            this.iiPassField = Selector('#c-password'),
            this.iiSubmit = Selector('#ifelite-login > div > main > brand-login > div.brand > div.brand-tabs > div.brand-tabs-content > div > div:nth-child(1) > form > div:nth-child(4) > div > input')
        ]

    }
}
