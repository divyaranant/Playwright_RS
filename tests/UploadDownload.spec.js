const { test,expect } = require('@playwright/test');
const ExcelJs = require('exceljs')

async function writeExcelTest(searchText,replaceText,change,filePath)
{

const workbook = new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath)
const worksheet = workbook.getWorksheet('Sheet1');
const output = await readExcel(worksheet,searchText,change)

if (output.row === -1 || output.column === -1)
{
  throw new Error(`Text "${searchText}" was not found in the worksheet.`);
}

const cell = worksheet.getCell(output.row,output.column+change.colChange);
cell.value = replaceText;
await workbook.xlsx.writeFile(filePath);
}

async function readExcel(worksheet,searchText,change)
{
  let output = {row:-1,column:-1};
 worksheet.eachRow( (row,rowNumber) =>
{
  row.eachCell( (cell, colNumber) =>
  {
    //console.log(cell.value);
    if(cell.value === searchText)
    {
      //console.log("Row number", rowNumber);
     // console.log("column number", colNumber)
     output.row=rowNumber
     output.column=colNumber
    }
  })
}
)
return output;
}




test( "upload download excel test", async ({ page }, testInfo) =>
    {
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download')
    await page.getByRole('button', {name:'Download'}).click();
    const download = await downloadPromise;
    const filePath = testInfo.outputPath('download.xlsx');
    await download.saveAs(filePath);
    await writeExcelTest("Mango",350,{rowChange:0,colChange:2},filePath);
    await page.locator("#fileinput").setInputFiles(filePath);
    await expect(page.getByRole('row', {name: /Mango Yellow 350 Summer/})).toBeVisible();
    
        
    });