package com;

import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

/**
 * Created by khanguyen on 4/26/17.
 */
public class Utils {
    public static String apiKey = "AIzaSyAKlU73elTZY5ZxcOVGqPhPxP8zxB2SNOo";
    public static String apiPlaceTextSearchUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyAKlU73elTZY5ZxcOVGqPhPxP8zxB2SNOo&";
    public static String apiPlaceDetailSearchUrl = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyAKlU73elTZY5ZxcOVGqPhPxP8zxB2SNOo&";
    public static String apiPhotoUrl = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&key=AIzaSyAKlU73elTZY5ZxcOVGqPhPxP8zxB2SNOo&photoreference=";
    public static String query = "query=";
    public static String key = "key=";
    public static String and = "&";
    public static String place_id = "place_id=";
    private static RestTemplate restTemplate = new RestTemplate();
    private static final String RANDOM_PASSWORD_CHARS =
            "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    private static final int RANDOM_PASSWORD_LENGTH = 12;

    public static String generateRandomString() {
        StringBuilder password = new StringBuilder();
        for (int i = 0; i < RANDOM_PASSWORD_LENGTH; i++) {
            int charIndex = (int) (Math.random() * RANDOM_PASSWORD_CHARS.length());
            char randomChar = RANDOM_PASSWORD_CHARS.charAt(charIndex);
            password.append(randomChar);
        }
        return password.toString();
    }

    public static String getJsonFromGetRequest(String url) {
        return restTemplate.getForObject(url, String.class);
    }
}
