Webster.CatalogProductsRoute = Webster.AbstractRoute.extend({
    setupController: function(controller){
        Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Product', 'action': 'get'});
        console.log('catalog product route');
    }
});