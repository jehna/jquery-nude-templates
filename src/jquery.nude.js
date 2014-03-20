/*
 * jquery-nude-templates
 * https://github.com/jesseluoto/jquerytempla
 *
 * Copyright (c) 2014 Jesse Luoto
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.nude = function(variables) {
    return this.each(function() {
      // Do something awesome to each selected element.
      $(this).html($.nude($(this).html(), variables));
    });
  };

  // Static method.
  $.nude = function(template, variables) {
    return template.replace(/\[\[(.*?\]?)\]\]/g, function(r,item) {
      
      // Don't allow functions to be executed
      if(/\((.*)\)/g.test(item)) {
        return "";
      }
      
      // Use sandbox so one can't read e.g. window.* variables unintentinally
      var sandbox = variables;
      
      // Evaluate the variable
      var val = null;
      try {
        val = eval("sandbox." + item);
      } catch(e) {
        return "";
      }
      
      // Handle empty values properly
      if (typeof val === "undefined" || val === null) {
          return "";
      }
      
      // All good, return compiled variable
      return val;
    });
  };
  

}(jQuery));
