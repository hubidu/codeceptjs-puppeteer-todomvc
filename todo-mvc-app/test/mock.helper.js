let Helper = codecept_helper;


class CustomHelper extends Helper {

    async abortImages() {
       let client = this.helpers['Puppeteer'];
       let page = client.page

    //    console.log(page)

       await page.setRequestInterception(true);
       page.on('request', request => {
        console.log('Got request', request.url())
        if (request.resourceType() === 'image')
           request.abort();
        else
           request.continue();
        });
    }
}

module.exports = CustomHelper;