const fs = require('fs');
describe('test google.com', () => {
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver;
 
    beforeEach(() => {
        driver = new Builder()
            .forBrowser('firefox')
            .build();
    });
 
    afterEach(() => {
        driver.quit();
    });
 
    it('should open google search', async () => {
        await driver.get('http://www.google.com');
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('Google');
            });
    }, 10000);
    it('should open google search and view search results', async () => {
        await driver.get('http://www.google.com');
        var element = await driver.findElement(By.name('q'));
        await element.sendKeys("selenium");
        await driver.wait(until.titleContains("selenium"), 10000);
        driver
            .getTitle()
            .then(title => {
                expect(title).toEqual('selenium - Pesquisa Google');
            });
    }, 10000);
 
    it('should open google search and do image search', async () => {
        await driver.get('http://www.google.com');
        var element = await driver.findElement(By.name('q'));
        await element.sendKeys("selenium", Key.RETURN);
        await driver.wait(until.titleContains("selenium"), 10000);
    }, 10000);
 
});