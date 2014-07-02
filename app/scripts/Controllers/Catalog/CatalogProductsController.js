Webster.CatalogProductsController = Ember.ObjectController.extend({
    products: function(){
        return Webster.Session.get('products');
    }.property('Webster.Session.products'),

    notify: function(){
        return Webster.Session.get('notify');
    }.property('Webster.Session.notify'),

    actions: {
        new: function(){
            this.transitionToRoute('catalog.product');
        }
    }
});