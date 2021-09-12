describe('Cost Center service test', () => {
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

    it('Should Insert String Number field', async () => {
        Shared.Login();
        await sleep(1000);
        //access modules
        driver.findElement(
            By.xpath(
                "//*[@id=\"root\"]/div/div/div/div[1]/div/div/div/div[2]/div/div[1]/div/span/button")
            ).click();
        await sleep(1000);
      
        driver.findElement(
            By.xpath("/html/body/div/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/a[3]")
        ).click();
        
        driver.findElement(
            By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[1]/button")
        ).click();		
		
        
        var cost = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[2]/div/div/div[1]/div/input"));
        await cost.sendKeys('teste de string')

        var name = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[2]/div/div/div[2]/div/input"));
		await name.sendKeys("apenas outro teste");
		driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[3]/button[2]")).click();
    }, 1000)

    it('Should create a CostCenter', async () => {
        Shared.Login();
        await sleep(1000);
        //access modules
        driver.findElement(
            By.xpath(
                "//*[@id=\"root\"]/div/div/div/div[1]/div/div/div/div[2]/div/div[1]/div/span/button")
            ).click();
        await sleep(1000);
      
        driver.findElement(
            By.xpath("/html/body/div/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/a[3]")
        ).click();
        
        driver.findElement(
            By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[1]/button")
        ).click();		
		
        
        var cost = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[2]/div/div/div[1]/div/input"));
        await cost.sendKeys('2')

        var name = driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[2]/div/div/div[2]/div/input"));
		await name.sendKeys("apenas mais um teste");
		driver.findElement(By.xpath("/html/body/div[3]/div[3]/div/div/div[3]/button[2]")).click();
    }, 10000)

    it('Should Delete a cost Center', async () => {
        Shared.Login();
        await sleep(1000);
        driver.findElement(
            By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/div/div/div[2]/div/div[1]/div/span/button")
        ).click();
		driver.findElement(By.xpath("/html/body/div/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/a[3]")).click();
		
        driver.findElement(
            By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[3]/div[2]/div/div/table/tbody/tr[1]/td[3]/div/button[1]")
        ).click();
        await sleep(1000);
    }, 10000)

    it('Should edit CostCenter Service', () => {
        Shared.Login();
        await sleep(1000)
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/div/div/div[2]/div/div[1]/div/span/button")).click();
        driver.findElement(By.xpath("//*[@id=\"root\"]/div/div/div/div[1]/div/div/div/div[2]/div/div[1]/div/span/button")).click();
		
        
        driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[3]/div[2]/div/div/table/tbody/tr[1]/td[3]/div/button[2]")).click();
        var cost =  driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[3]/div[2]/div/div/table/tbody/tr[1]/td[1]/div/div/input"));
		cost.clear();
		cost.sendKeys("12345");
 
        var name = driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[3]/div[2]/div/div/table/tbody/tr[1]/td[2]/div/div/input"));
		name.clear();
		name.sendKeys("teste");

        driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div[1]/div/div/div/main/div/div/div/div/div/div/div[3]/div[2]/div/div/table/tbody/tr[1]/td[3]/div/button[1]")).click();
		
    }, 10000)
    
} )
 