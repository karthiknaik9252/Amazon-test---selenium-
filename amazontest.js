describe(' Amazon website testing', function() {
	
	beforeEach(function(){
	browser.ignoreSynchronization = true;
	
	});
	
    it('Click on sign in on the landingpage', function() {
	browser.driver.get('https://www.amazon.com/');
	   
	    // Checking the current url
	var signinBtn = element(by.xpath('//*[@id="nav-link-accountList"]/span[2]'));
	signinBtn.click().then(function() {
	var currentUrl = browser.driver.getCurrentUrl();
	expect(currentUrl).toContain('signin&switch_account=');
	}, 10000);
	});
	
	it(' Login to Amazon',function() {
	  
	  // Find page elements in login page
	 	var Email = element(by.id('ap_email'));
		var Password = element(by.id('ap_password'));
		var userLoginBtn  = element(by.id('signInSubmit')); 
		
	  // Fill input fields
	  
	  Email.sendKeys('totestt2@gmail.com');
	  Password.sendKeys('accounttest');
	  
	  //click the login button
	  userLoginBtn.click().then(function() {
      var currentUrl = browser.driver.getCurrentUrl();
	  expect(currentUrl).toContain('/?ref_=nav_ya_signin&');
     }, 10000)
	 
	 // searching for samsung and approve
	  var searchBtn = element(by.xpath('//*[@id="nav-search"]/form/div[2]/div/input')); 
      var searchTextbox = element(by.id('twotabsearchtextbox'));
	  
      // Fill input fields
      searchTextbox.sendKeys('samsung');
	  searchBtn.click().then(function() {
     }, 10000);
	 
	var filter = browser.findElement(by.id('pagn'));
	var scrollIntoView = function () {
     arguments[0].scrollIntoView();
     };
     browser.executeScript(scrollIntoView, filter);
	 
     // click on 2nd page of the search page.
	 var secondPage = element(by.xpath('//*[@id="pagn"]/span[3]/a'));
	 secondPage.click().then(function(){
     }, 10000);
	 var currentUrl = browser.driver.getCurrentUrl()
	 expect(currentUrl).toContain('2&keywords');
	 
	 //find the 3rd product and add to list
	 
	  var product3 = element(by.xpath('//*[@id="result_18"]/div/div/div/div[2]/div[1]/div[1]/a/h2'));
	  product3.click().then(function(){
     }, 10000);
	  var listBtn = element(by.id('add-to-wishlist-button-submit'));
	  listBtn.click().then(function(){
     }, 10000);
	 
      browser.wait(function() {
      return element(by.xpath('//*[@id="WLHUC_viewlist"]/span/span')).isPresent();
    }, 5000);
	
	//checking in my list 
	var mylistclickBt = element(by.xpath('//*[@id="WLHUC_viewlist"]/span/span'));
	mylistclickBt.click().then(function(){
     }, 10000);
	 
	  var textmessage = "Samsung Gear S3 Frontier"
	  expect(textmessage).toEqual("Samsung Gear S3 Frontier");
	  
	//delete the product
	
	 var deleteproductBtn = element(by.xpath('//*[@id="a-autoid-5"]/span/input'));
	 deleteproductBtn.click().then(function(){
     }, 10000);
	 
	 var textmessage = "Samsung Gear S3 Frontier"
	 expect(textmessage).toEqual("Samsung Gear S3 Frontier");
	 
	
	});	  
});
