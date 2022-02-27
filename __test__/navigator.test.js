const puppeteer = require('puppeteer')

describe('Mi primer test en puppeteer', () => {
    it('deberia abrir y cerrar el navegador', async () => {
        const browser = await puppeteer.launch({
            headless: false,
        })
        const page = await browser.newPage()
        await page.goto('https://www.google.com')
        await browser.close()
    })
})
