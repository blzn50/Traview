package com.review.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.Calendar;

/**
 * Created by khanguyen on 4/28/17.
 */
@Entity
@Table(name = "review")
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int review_id;
    private String user_id;
    private String place_id;
    private String user_comment;
    private int rating;
    private Date time;
    public int getReview_id() {
        return review_id;
    }

    public void setReview_id(int review_id) {
        this.review_id = review_id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getPlace_id() {
        return place_id;
    }

    public void setPlace_id(String place_id) {
        this.place_id = place_id;
    }

    public String getUser_comment() {
        return user_comment;
    }

    public void setUser_comment(String user_comment) {
        this.user_comment = user_comment;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public Review() {

    }

    public Review(String user_id, String place_id, String user_comment, int rating) {
        this.user_id = user_id;
        this.place_id = place_id;
        this.user_comment = user_comment;
        this.rating = rating;
        this.time = new Date(Calendar.getInstance().getTime().getTime());
    }

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    @Override
    public String toString() {
        return user_id + " " + place_id + "\n" + user_comment + "\n" + rating + " " + time.toString();
    }
}
