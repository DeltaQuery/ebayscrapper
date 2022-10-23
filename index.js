const { chromium } = require("@playwright/test")
const { sendMail } = require("./nodemailer")

async function checkStock () {
    const browser = await chromium.launch()
    const page = await browser.newPage()
    await page.goto("https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=1001+spikes+videogame&_sacat=0")

    async function isSelectorExists(selector) {
        return await page.$(selector).catch(() => null) !== null
      }
    
      const result = await isSelectorExists("ul.srp-results > li:first-child > div > div > h3")
      if(!result) {
        console.log("Spikes 1001 está EN VENTA!")
        sendMail()
      }
      if(result) console.log("Spikes 1001 no está listado.")

    await browser.close()
}

checkStock()

//https://www.ebay.com/sch/i.html?_from=R40&_trksid=m570.l1313&_nkw=1001+spikes+videogame&_sacat=0
//https://www.ebay.com/sch/i.html?_nkw=pokemon&_trksid=p2380057.m4084.l1313
