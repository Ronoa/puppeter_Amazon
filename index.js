const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        devtools:true
    });

    const page = await browser.newPage();

    await page.goto('https://www.amazon.es');

    await page.type('#twotabsearchtextbox','libros de javascript')
    await page.click('#nav-search-submit-button')

    await page.waitForSelector('[data-component-type="s-search-result"]')
    await page.waitForTimeout(2000)

    const links = await page.evaluate(()=>{
        const elements = document.querySelectorAll('[data-component-type="s-search-result"] h2 a')
        
        const links = []
        for (const element of elements)
            links.push(element.href)
        return links
    })
     
    const newlinks = links.slice(0, 10)
    const books = []
    for (const enlace of newlinks){ 
        await page.goto(enlace)
        
        await page.waitForSelector('#productTitle')

       const book = await page.evaluate(()=>{
            const temp = {}

            temp.title = document.querySelector('#productTitle').innerText             
            temp.author = document.querySelector('.author a').innerText
            temp.stars = document.querySelector('[data-action="acrStarsLink-click-metrics"] a i').innerText
            
            return temp
        })

        books.push(book)
    }
    
    console.log("Jose ~ file: index.js ~ line 42 ~ books", JSON.stringify(books, null, 2))

   await browser.close();

})();