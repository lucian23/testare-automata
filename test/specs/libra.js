describe('librabank.ro', () =>{

    it('should load', async () => {
    await browser.url('https://www.librabank.ro/cont-curent-persoane-fizice');
    await expect(browser).toHaveTitle('Cont curent pentru persoane fizice');
    });
    
    it('should contain a Deschide cont online button', async () => {
    const deschideContOnlineButton = await $('.red');
    await expect(deschideContOnlineButton).toBeDisplayed();
    });
    
    it('should a working search', async () => {
    await browser.url('https://www.librabank.ro/Cariere/');
    const searchBox = await $('.searchForm');
    await searchBox.setValue('QA');
});
    

   });
    
    