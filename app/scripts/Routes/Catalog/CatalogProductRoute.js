Webster.CatalogProductRoute = Webster.AbstractRoute.extend({
    setupController: function(controller, model){
        var productId = model.id;
        if(typeof productId !== 'undefined' && productId !== 'undefined'){
            console.log('oida');
            Webster.MessageProcessor.processOutgoing({'type': 'catalog/product', 'action': 'edit', 'content': {'product_id': productId}});
        } else {
            console.log('mann');
            Webster.MessageProcessor.processOutgoing({'type': 'catalog/product', 'action': 'edit'});
            Webster.Session.set('product', Webster.Product.create());
        }
        console.log('catalog product route');
    }
});