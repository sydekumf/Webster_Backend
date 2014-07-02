Webster.CatalogProductsRoute = Webster.AbstractRoute.extend({
    setupController: function(controller){
        Webster.MessageProcessor.processOutgoing({'type': 'catalog/backend_product', 'action': 'index'});
        console.log('catalog product route');
    }
});