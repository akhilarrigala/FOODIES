package com.test.foodiesapi.repository;

import com.test.foodiesapi.entity.OrderEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface OrderRepository extends MongoRepository<OrderEntity, String> {

    List<OrderEntity> findByUserId(String userId);
//    Optional<OrderEntity> findByRazropayOrderId(String razropayOrderId);
    Optional<OrderEntity> findByRazorpayOrderId(String orderId);



}

