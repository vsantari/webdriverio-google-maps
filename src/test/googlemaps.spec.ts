import GoogleMaps from 'src/pages/GoogleMaps';


describe('Google Maps', () => {

  //  it('Open google maps', async () => {          
  //      browser.url('https://www.google.com/maps')
   //     $('#searchboxinput').addValue('Cebu City')
  //      browser.keys('Enter')      
  //  }); 

    it('Open google maps', async () => {    
        browser.url('http://localhost:4000/')   
        GoogleMaps.dismissButton.click();
        browser.pause(3000)
        GoogleMaps.marker.click();           
    }); 
    
    it('latitude  and longitude', async () => {       
        browser.url('http://localhost:4000/') 
        browser.pause(3000)     
        
        GoogleMaps.dismissButton.click();  
        GoogleMaps.latitude.clearValue();
        GoogleMaps.logitude.clearValue();
        GoogleMaps.latitude.addValue(20);
        GoogleMaps.logitude.addValue(20);
        GoogleMaps.submitButton.click();
        browser.pause(3000)
        GoogleMaps.dismissButton.click();  
        GoogleMaps.marker.click();           
    });  
        
 


})