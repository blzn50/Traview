package com.places;

import org.apache.mahout.cf.taste.common.TasteException;
import org.apache.mahout.cf.taste.impl.model.jdbc.MySQLJDBCDataModel;
import org.apache.mahout.cf.taste.impl.model.jdbc.ReloadFromJDBCDataModel;
import org.apache.mahout.cf.taste.impl.neighborhood.NearestNUserNeighborhood;
import org.apache.mahout.cf.taste.impl.recommender.GenericUserBasedRecommender;
import org.apache.mahout.cf.taste.impl.similarity.LogLikelihoodSimilarity;
import org.apache.mahout.cf.taste.model.DataModel;
import org.apache.mahout.cf.taste.model.JDBCDataModel;
import org.apache.mahout.cf.taste.neighborhood.UserNeighborhood;
import org.apache.mahout.cf.taste.recommender.RecommendedItem;
import org.apache.mahout.cf.taste.recommender.UserBasedRecommender;
import org.apache.mahout.cf.taste.similarity.UserSimilarity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

/**
 * Created by khanguyen on 5/6/17.
 */
@Component
public class Recommender {
    @Autowired
    private DataSource dataSource;

    public List<RecommendedItem> getRecommendedItems() {
        return recommendedItems;
    }

    public void setRecommendedItems(List<RecommendedItem> recommendedItems) {
        this.recommendedItems = recommendedItems;
    }

    //    DataModel dataModel = new MySQLJDBCDataModel(dataSource, "review", "user_id", "mahout_place_id", "rating", "time");
//    UserSimilarity userSimilarity = new LogLikelihoodSimilarity(dataModel);
//    List<RecommendedItem> recommendedItems = new ArrayList<>();
//    UserNeighborhood userNeighborhood;
//        try {
//        userNeighborhood = new NearestNUserNeighborhood(10, userSimilarity, dataModel);
//        UserBasedRecommender recommender = new GenericUserBasedRecommender(dataModel, userNeighborhood, userSimilarity);
//        recommendedItems = recommender.recommend(2, 3);
//
//    } catch (TasteException e) {
//        e.printStackTrace();
//    }
//        for (RecommendedItem recommendation : recommendedItems) {
//        System.out.println(recommendation);
//    }
    private List<RecommendedItem> recommendedItems = new ArrayList<>();
    private UserBasedRecommender recommender;
    @PostConstruct
    public void buildingRecommender() {
        DataModel dataModel;
        JDBCDataModel dm = new MySQLJDBCDataModel(dataSource, "review", "user_id", "mahout_place_id", "rating", "time");
        try {
            dataModel = new ReloadFromJDBCDataModel(dm);
        } catch (TasteException e) {
            e.printStackTrace();
            return;
        }
        UserSimilarity userSimilarity = new LogLikelihoodSimilarity(dataModel);
        UserNeighborhood userNeighborhood;
        try {
            userNeighborhood = new NearestNUserNeighborhood(10, userSimilarity, dataModel);
            recommender = new GenericUserBasedRecommender(dataModel, userNeighborhood, userSimilarity);
//            recommendedItems = recommender.recommend(2, 4);
        } catch (TasteException e) {
            e.printStackTrace();
        }
//        System.out.println("post construct");
//        for (RecommendedItem recommendation : recommendedItems) {
//            System.out.println(recommendation);
//        }
//        System.out.println("time 1 ");
//        try {
//            recommendedItems = recommender.recommend(3, 4);
//        } catch (TasteException e) {
//            e.printStackTrace();
//        }
//        for (RecommendedItem recommendation : recommendedItems) {
//            System.out.println(recommendation);
//        }
//        System.out.println("time 2 ");
    }
    @Bean(name = "userBasedRecommender")
    public UserBasedRecommender userBasedRecommender() {
        return recommender;
    }
//    public List getResult(long userid) {
//        try {
//            return recommender.recommend(userid, 4);
//        } catch (Exception e) {
//            e.printStackTrace();
//            return new ArrayList<>();
//        }
//    }
}
