$(function() {

    Parse.$ = jQuery;

    Parse.initialize("Deo1ECOrS6K4PTYNzK5shswZGsGKkuh7N5F4YDkJ", "1dDstVTMqi18grcBzivfTHXx4HWBQe8Q2jijwQuu");

    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({model:Blog});
    var blogs = new Blogs();

    blogs.fetch({
    success: function(blogs) {
        console.log(blogs);
    },
    error: function(blogs, error) {
        console.log(error);
    }
});

});
