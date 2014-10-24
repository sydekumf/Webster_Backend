Webster.CatalogProductsRoute = Webster.AbstractRoute.extend({
    setupController: function(controller){
        Webster.MessageProcessor.processOutgoing({'type': 'catalog/product', 'action': 'index'});
        console.log('catalog product route');
    }
});