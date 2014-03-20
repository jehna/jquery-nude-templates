(function($) {

  module('jQuery.nude');

  test('simple varialbe', function() {
    expect(1);
    strictEqual($.nude('[[test]]', {'test': 'should change'}), 'should change', 'should change a simple variable');
  });

  test('bad uses', function() {
    expect(2);
    window.nudefixture = "should not be accessible";
    strictEqual($.nude('[[escape(1337)]]', {}), '', 'should not run functions');
    strictEqual($.nude('[[window.nudefixture]]', {}), '', 'should not access global variables');
  });
  
  
  module('jQuery#nude');

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    var $chainable = $("#qunit-chainable-fixture");
    strictEqual($chainable.nude(), $chainable, 'should be chainable');
  });
  
  test('test cases', function() {
    expect(4);
    // Not a bad test to run on collection methods.
    strictEqual(
      $("#test-template-fixture-1").nude({"nude": "Insert variable here"}).html(),
      $("#test-template-result-1").html(),
      'should compile simple template'
    );
    
    strictEqual(
      $("#test-template-fixture-2").nude({
        "brown": "nude",
        "lazy": "dead"
      }).html(),
      $("#test-template-result-2").html(),
      'should compile two variables (greedy regexp)'
    );
    
    strictEqual(
      $("#test-template-fixture-3").nude({"nude": ["an array", ["nested arrays"]]}).html(),
      $("#test-template-result-3").html(),
      'should work with arrays'
    );
    
    strictEqual(
      $("#test-template-fixture-4").nude({"nested": { "objects": "should work well" }}).html(),
      $("#test-template-result-4").html(),
      'should work with objects'
    );
  });



}(jQuery));
