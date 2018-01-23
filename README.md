# Amazon-test---selenium

Install Node.js - https://nodejs.org/en/

Install Java jdk - http://www.oracle.com/technetwork/java/javase/downloads/jdk9-downloads-3848520.html

On the command prompt run the command – ‘webdriver-manager update’.

After that we need to start the webdriver manager with the command – ‘webdriver-manager start’.

Go to C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example on the command prompt

Here we have file conf.js which we can run to test which will check selenium server is running and run the example test.

After that we need to install notepad ++ and copy the amazontest.js file from GitHub https://github.com/karthiknaik9252/Amazon-test---selenium-/blob/master/amazontest.js To C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example.

On the path - > C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example. Changes the config parameter in the conf.js file as below

From specs: ['example.js'], to specs: ['amazontest.js'],

Now on the node.js command prompt go to the path - > C:\Users\User\AppData\Roaming\npm\node_modules\protractor\example. execute the command – ‘Protractor conf.js
