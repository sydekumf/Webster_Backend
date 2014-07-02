Webster.CatalogProductController = Ember.ObjectController.extend({
    product: function(){
        if(Webster.Session.get('product')){
            return Webster.Session.get('product');
        }
    }.property('Webster.Session.product'),

    categories: function(){
        var categories = Webster.Session.get('categories');
        var product = this.get('product');
        if(categories && product){
            for(i = 0; i < categories.length; i++){
                if(jQuery.inArray(product.id, categories[i].products) >= 0){
                    categories[i].checked = true;
                } else {
                    categories[i].checked = false;
                }
            }
            return categories;
        }
    }.property('Webster.Session.categories'),

    actions: {
        save: function(){
            Webster.MessageProcessor.processOutgoing({'type': 'catalog/backend_product', 'action': 'save', 'content': {
                'product': this.get('product'),
                'categories': this.get('categories')
            }});

            this.transitionToRoute('catalog.products');

//            Webster.MessageProcessor.processOutgoing({'type': 'catalog/backend_product', 'action': 'save', 'content': {
//
//            }});
//
//
//
//            var categories = Webster.Session.get('categoryCollection');
//            var productId = this.get('product').id;
//
//            if(productId){
//                for(i = 0; i < categories.length; i++){
//                    var productIds = categories[i].products;
//
//                    if(categories[i].checked){
//                        productIds.push(productId);
//                    } else {
//                        for(j = 0; j < productIds.length; j++){
//                            if(productIds[j] == productId){
//                                productIds.splice(j, 1);
//                            }
//                        }
//                    }
//                    categories[i].products = jQuery.unique(productIds);
//                    Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Category', 'action': 'save', 'content': {
//                        'id': categories[i].id,
//                        'name': categories[i].name,
//                        'products': categories[i].products,
//                        'active': categories[i].active
//                    }});
//                }
//            }
//
//            productCategories = Ember.A();
//            for(i = 0; i < categories.length; i++){
//                if(categories[i].checked){
//                    productCategories.push(categories[i].id);
//                }
//            }
//
//            Webster.MessageProcessor.processOutgoing({'type': 'Catalog\\Product', 'action': 'save', 'content': {
//                'id': productId,
//                'name': this.get('product').name,
//                'description': this.get('product').description,
//                'price': this.get('product').price,
//                'inventory': this.get('product').inventory,
//                'image': this.get('product').image,
//                'active': this.get('product').active,
//                'categories': productCategories
//            }});
        }
    }
});