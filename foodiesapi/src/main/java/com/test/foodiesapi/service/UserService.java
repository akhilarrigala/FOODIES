package com.test.foodiesapi.service;

import com.test.foodiesapi.io.UserRequest;
import com.test.foodiesapi.io.UserResponse;

public interface UserService {
    UserResponse registerUser(UserRequest request);

    String findByUserId();
}
