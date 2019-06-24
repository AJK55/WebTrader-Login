import Platform from '../shared/platform';
import Page from '../shared/pageObject';
import Functions from '../shared/functions';

const plat = new Platform();
const page = new Page();
const func = new Functions();

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
    //.click(plat.crypto)
    await t
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}

export async function platActionsTF(t) {
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
    if (await plat.fx.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(plat.fx)
    await t
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}

export async function platActionsAlly(t) {
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
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}

export async function platActionsFxf(t) {
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
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}

export async function platActionsWhsIi(t) {
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
    //.click(plat.sectors)
    if (await plat.fx.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(plat.fx)
    await t
    console.log(await plat.versionNum.innerText)
    await t
        .click(plat.iconBut)
        .click(plat.logOut)
}



export async function ciLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.webTraderTab)
        .click(page.ciUserField)
        .typeText(page.ciUserField, page.ciUser)
        .click(page.ciPassField)
        .typeText(page.ciPassField, page.ciPass)

    if (await page.ciSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.ciSubmit)
}

export async function fxLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.fxContinue)
        .click(page.fxUserClick)
        .typeText(page.fxUserField, page.userName)
        .click(page.fxPassClick)
        .typeText(page.fxPassField, page.fxciPass)

    if (await page.fxSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.fxSubmit)
}

export async function tfLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.tfWTTab)
        .click(page.tfUserField)
        .typeText(page.tfUserField, page.tfUser)
        .click(page.tfPassField)
        .typeText(page.tfPassField, page.password)

    if (await page.tfSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.tfSubmit)
}

export async function allyLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.allyUserField)
        .typeText(page.allyUserField, page.allyUser)
        .click(page.allyPassField)
        .typeText(page.allyPassField, page.password)

    if (await page.allySubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.allySubmit)
}

export async function whsLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.whsWTTab)
        .click(page.whsUserField)
        .typeText(page.whsUserField, page.whsUser)
        .click(page.whsPassField)
        .typeText(page.whsPassField, page.password)

    if (await page.whsSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.whsSubmit)
}

export async function iiLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.iiWTTab)
        .click(page.iiUserField)
        .typeText(page.iiUserField, page.iiUser)
        .click(page.iiPassField)
        .typeText(page.iiPassField, page.password)

    if (await page.iiSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.iiSubmit)
}

export async function fxfLogin(t) {
    // Note that it's an async function.
    // Also it necessary to pass a test controller object `t` as an argument to execute actions
    await t
        .click(page.fxfWTTab)
        .click(page.fxfUserField)
        .typeText(page.fxfUserField, page.fxfUser)
        .click(page.fxfPassField)
        .typeText(page.fxfPassField, page.password)

    if (await page.fxfSubmit.visible === false) {
        await func.browserscroll(0, 500)
    }
    await t
        .click(page.fxfSubmit)
}
