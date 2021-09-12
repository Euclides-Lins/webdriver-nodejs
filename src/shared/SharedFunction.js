const {
    Builder,
    By,
    Key,
    until
} = require('selenium-webdriver');

 const Login = async () => {
    await driver.get("http://200.129.168.9:21016");
    var login = await driver.findElement(By.id("nome_user"));
    var password = await driver.findElement(By.id("outlined-pass"));
    await password.sendKeys("alguma-senha-ai-bixo")
    await login.sendKeys("nucleo_dnaz", Key.ENTER);
}

module.exports = Login;