$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("Deo1ECOrS6K4PTYNzK5shswZGsGKkuh7N5F4YDkJ", "1dDstVTMqi18grcBzivfTHXx4HWBQe8Q2jijwQuu");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

});
