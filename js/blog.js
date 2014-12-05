$(function() {

    Parse.$ = jQuery;

    Parse.initialize("Deo1ECOrS6K4PTYNzK5shswZGsGKkuh7N5F4YDkJ", "1dDstVTMqi18grcBzivfTHXx4HWBQe8Q2jijwQuu");

    var Blog = Parse.Object.extend("Blog");
    var Blogs = Parse.Collection.extend({model:Blog});
    var blogs = new Blogs();

    var BlogsView =  Parse.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){
        var collection = { blog: this.collection.toJSON() };
        this.$el.html(this.template(collection));
    }});

    blogs.fetch({
    success: function(blogs) {
        var blogsView = new BlogsView({ collection: blogs });
        blogsView.render();
        $('.main-container').html(blogsView.el);
    },
    error: function(blogs, error) {
        console.log(error);
    }


});

});
