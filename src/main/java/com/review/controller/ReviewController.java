package com.review.controller;

import com.review.model.Review;
import com.review.model.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by khanguyen on 4/29/17.
 */
@RestController
@RequestMapping("/review")
public class ReviewController {
    @Autowired
    ReviewRepo reviewRepo;
    @RequestMapping("/create")
    public ResponseEntity<?> addReview(@RequestBody Review review){
        try {
            reviewRepo.save(review);
            return new ResponseEntity<>(review, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(review, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
