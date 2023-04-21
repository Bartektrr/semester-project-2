require('dotenv').config()
const {By, Key, until, Builder} = require("selenium-webdriver");
require("chromedriver");

async function test(){ 
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get(process.env.BASE_URL + "/institutions");
    await driver.findElement(By.name("username")).sendKeys("admin@admin.com");
    await driver.findElement(By.name("password")).sendKeys("AbCd0000");
    await driver.findElement(By.tagName("button")).click();
    await driver.wait(until.urlContains("institutions"));
    const rows = await driver.findElements(By.className("row"));
    console.log(rows.length);
    await driver.findElement(By.name("addInstitution")).click();
    await driver.wait(until.alertIsPresent());
    let alert1 = await driver.switchTo().alert();
    await alert1.sendKeys("ABC");
    await alert1.accept();
    await driver.get(process.env.BASE_URL + "/institutions");   
    const rows2 = await driver.findElements(By.className("row"));
    console.log(rows2.length);
    await driver.quit();
}
test()
