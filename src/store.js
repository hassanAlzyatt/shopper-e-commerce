    import{ legacy_createStore  as createStore }from'redux';
    import CartReducer from './Redux/CartFeature/CartRedux';

    export const store=createStore(CartReducer)

