// import puppeteer
const puppeteer = require("puppeteer");

// the function to run
async function getTitles() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("http://books.toscrape.com/");

    const titles = await page.evaluate(() =>
        // select all product_pods, which store information for each book
       Array.from(document.querySelectorAll('.product_pod'), (e) => ({
            // within each product_pod, get the title from h3
           title: e.querySelector('h3 a').title,
       }))
    );
    
    // print out the titles in console
    console.log(titles);

    await browser.close();
}

// run the function to get the book titles
getTitles();