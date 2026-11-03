const base = require('@playwright/test');

exports.customtest = base.test.extend(
{
testDataForOrder :   {
     username : "yournewuser@example.com",
     password : "YourPassword123!",
     productName : "ZARA COAT 3"

 }

}



)