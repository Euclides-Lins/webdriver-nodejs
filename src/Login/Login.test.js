
describe('Login service test', () => {
    let Shared = require('../shared/SharedFunction.js')
    const {
        Builder,
        By,
        Key,
        until
    } = require('selenium-webdriver');
    var driver

    beforeEach(() => {
        driver = new Builder()
            .forBrowser('firefox')
            .build()
    });
 
    afterEach(() => {
        driver.quit()
    });

    it('Should Login in application by pressing Enter after inserting matricula and password', async () => {
        Shared.Login()
    }, 10000)

    it('Should Login in application by Clicking Login Button after inserting matricula and password', async () => {
        await driver.get("http://200.129.168.9:21016");
        var login = await driver.findElement(By.id("nome_user"));
        var password = await driver.findElement(By.id("outlined-pass"));
        await password.sendKeys("alguma-senha-ai-bixo")
        await login.sendKeys("nucleo_dnaz");
        await driver.findElement(By.xpath("//*[@id=\"App\"]/div/div[2]/div/form/div[2]/button")).click();
    }, 10000)

    it('Should logout user', async () => {
        Shared.Login();
        //user loggedin
        driver.findElement(By.xpath("//*[@id=\"profile-icon\"]")).click();
		driver.findElement(By.xpath("/html/body/div[3]/div[3]/ul/li[2]")).click();	
        // user logged out
    }, 10000) 

    it('Should required matricula Field', async () => {
        await driver.get("http://200.129.168.9:21016");
        var login = await driver.findElement(By.id("nome_user"));
        var password = await driver.findElement(By.id("outlined-pass"));
        await login.sendKeys("nucleo_dnaz");
    }, 10000)
    
    it('Should required Password Field', async () => {
        await driver.get("http://200.129.168.9:21016");
        var login = await driver.findElement(By.id("nome_user"));
        var password = await driver.findElement(By.id("outlined-pass"));
        await password.sendKeys("alguma-senha-ai");
    }, 10000)

})