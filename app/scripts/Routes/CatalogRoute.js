Webster.CatalogRoute = Webster.AbstractRoute.extend({
    setupController: function() {
        console.log('catalog route');
        console.log(Webster.Socket.get('online'));
//        Webster.MessageProcessor.processOutgoing({'type': 'Catalog/Backend_Category', 'action': 'get'});
    }
});