const { DashboardPage } = require("./DashboardPage")

const {LoginPage} =require("./LoginPage")

class POManager
{
constructor(page)
{
    this.page = page;
    this.LoginPage = new LoginPage(page)
    this.DashboardPage = new DashboardPage(page)

}

getLoginPage()
{
   return this.LoginPage
}

getDashboardPage()
{
    return this.DashboardPage;
}

}

module.exports = { POManager };