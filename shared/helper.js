import Platform from '../shared/platform';

const plat = new Platform();

export async function platActions(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(plat.contactUs)
        .click(plat.contactUs)
        .click(plat.notification)
        .click(plat.notification)
        .click(plat.browseMkts)
        .click(plat.questions)
        .click(plat.manageRisk)
        .click(plat.backRisk)
        .click(plat.questions)
        .click(plat.popular)
        .click(plat.bonds)
        .click(plat.trendMkts)
        .click(plat.commodites)
        .click(plat.equities)
        .click(plat.fx)
        .click(plat.indicies)
        .click(plat.interstRates)
        .click(plat.iShares)
        .click(plat.metals)
        .click(plat.options)
        .click(plat.sectors)
    if (await plat.fxMetals.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(plat.fxMetals)
        .click(plat.crypto)
    await t
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}
