'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Foundation = new Module('foundation');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Foundation.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Foundation.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Foundation.menus.add({
    title: 'foundation example page',
    link: 'foundation example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Foundation.aggregateAsset('css', 'foundation.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Foundation.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Foundation.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Foundation.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Foundation;
});
