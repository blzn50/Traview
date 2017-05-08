package com.review.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by khanguyen on 4/30/17.
 */
@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {

}
