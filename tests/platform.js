import {
    Selector
} from 'testcafe';

export default class Platform {
    constructor() {

        this.platformVersion = [
            this.versionNum = Selector('body > div.version')
        ];

        this.platform = [
            this.contactUs = Selector('body > app-root > div > div.mercury__header > app-header > div.right > div.icon-bar > app-feedback > div > span'),
            this.notification = Selector('body > app-root > div > div.mercury__header > app-header > div.right > div.icon-bar > div.toggle-help > span'),
            this.iconBut = Selector('body > app-root > div > div.mercury__header > app-header > div.right > div.icon-bar > app-user-menu > div > i'),
            this.browseMkts = Selector('body > app-root > div > div.mercury__body > div > app-workspace-header > div.workspace__item.workspace__item--active > div > span'),
            this.logOut = Selector('body > app-root > div > div.mercury__header > app-header > div.right > div.icon-bar > app-user-menu > div > div > ul > li.user-menu__list-item.link--log-out > a')
        ];

        this.markets = [
            this.popular = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li.markets-tags__item.ng-star-inserted.markets-tags__item--active'),
            this.bonds = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(2)'),
            this.trendMkts = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(3)'),
            this.commodites = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(4)'),
            this.equities = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(5)'),
            this.fx = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(6)'),
            this.indicies = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(7)'),
            this.interstRates = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(8)'),
            this.iShares = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(9)'),
            this.metals = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(10)'),
            this.options = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(11)'),
            this.sectors = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(12)'),
            this.fxMetals = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(13)'),
            this.crypto = Selector('body > app-root > div > div.mercury__body > div > app-workspace > div > app-full-screen-panel > div > app-browse > div > app-markets-tags > div > ul > li:nth-child(14)')

        ];

    }
}
