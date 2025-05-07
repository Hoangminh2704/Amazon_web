const cart = {
    cartItems: undefined,

    loadFromStorage: function(){
        this.cartItems = JSON.parse(localStorage.getItem('cart-oop'));
        if(!this.cartItems){
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deleveryOptionId: '1'
            },
            {
                
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deleveryOptionId: '2'
            }];
        }
    },
    saveToStorage: function(){
        localStorage.setItem('cart-oop', JSON.stringify(this.cartItems));
    },
    addToCart: function(productId){
        let matchingItem;
        this.cartItems.forEach((item) =>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity +=1;
        }else{
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deleveryOptionId: '1'
            })
        }
    
        saveToStorage();
    },
    removeFromCart(productId){
        const newCart = [];
        this.cartItems.forEach((item)=>{
            if (item.productId != productId){
                newCart.push(item);
            }
        });
    
        this.cartItems = newCart;
    
    
        this.saveToStorage();
    },
    updatedeliveryOption(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((item) =>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        matchingItem.deleveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }


};
cart.loadFromStorage();
const businessCart = {
    cartItems: undefined,

    loadFromStorage: function(){
        this.cartItems = JSON.parse(localStorage.getItem('cart-business'));
        if(!this.cartItems){
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deleveryOptionId: '1'
            },
            {
                
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deleveryOptionId: '2'
            }];
        }
    },
    saveToStorage: function(){
        localStorage.setItem('cart-business', JSON.stringify(this.cartItems));
    },
    addToCart: function(productId){
        let matchingItem;
        this.cartItems.forEach((item) =>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        if(matchingItem){
            matchingItem.quantity +=1;
        }else{
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deleveryOptionId: '1'
            })
        }
    
        saveToStorage();
    },
    removeFromCart(productId){
        const newCart = [];
        this.cartItems.forEach((item)=>{
            if (item.productId != productId){
                newCart.push(item);
            }
        });
    
        this.cartItems = newCart;
    
    
        this.saveToStorage();
    },
    updatedeliveryOption(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((item) =>{
            if(productId === item.productId){
                matchingItem = item;
            }
        });
        matchingItem.deleveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }


};
businessCart.loadFromStorage();
console.log(cart);
console.log(businessCart);
