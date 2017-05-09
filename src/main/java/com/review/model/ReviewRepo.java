package com.review.model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

/**
 * Created by khanguyen on 4/30/17.
 */
@Repository
public interface ReviewRepo extends JpaRepository<Review, Long> {
    @Query(value = "SELECT place_id FROM review r where r.mahout_place_id =?1", nativeQuery = true)
    String findPlaceIdByHashCode(long mahout_place_id);
}
