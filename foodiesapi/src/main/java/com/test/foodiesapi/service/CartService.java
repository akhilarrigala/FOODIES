package com.test.foodiesapi.service;

import com.test.foodiesapi.io.CartRequest;
import com.test.foodiesapi.io.CartResponse;

public interface CartService {

    CartResponse addToCart(CartRequest request);

    CartResponse getCart();

    void clearCart();

    CartResponse removeFromCart(CartRequest request);
}
