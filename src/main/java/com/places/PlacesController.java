package com.places;

import com.Utils;
import com.account.model.Account;
import com.account.model.AccountRepo;
import com.places.model.Place;
import com.review.model.Review;
import com.review.model.ReviewRepo;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by khanguyen on 4/26/17.
 */
@RestController
public class PlacesController {
    @RequestMapping("/search")
    public ResponseEntity<?> keywordSearch(@RequestParam("keyword") String keyword) {
        List<Place> searchResults = new ArrayList<>();
        String textSearchUrl = Utils.apiPlaceTextSearchUrl + Utils.query + keyword;
        String jsonResponse = Utils.getJsonFromGetRequest(textSearchUrl);
        JSONObject jsonObject = new JSONObject(jsonResponse.trim());
        JSONArray result = jsonObject.getJSONArray("results");
        for (int i = 0; i < result.length(); i++) {
            String placeId = result.getJSONObject(i).getString("place_id");
            String detailSearchUrl = Utils.apiPlaceDetailSearchUrl + Utils.place_id + placeId;
            jsonResponse = Utils.getJsonFromGetRequest(detailSearchUrl);
            JSONObject curResult = new JSONObject(jsonResponse.trim()).getJSONObject("result");
            Place placeDetail = new Place();
            placeDetail.setPlaceId(curResult.getString("place_id"));
            placeDetail.setAddress(curResult.getString("formatted_address"));
            placeDetail.setPlaceName(curResult.getString("name"));
            placeDetail.setType(curResult.getJSONArray("types").getString(0));
            List<String> photoRefs = new ArrayList<>();
            if (curResult.has("photos")) {
                JSONArray photos = curResult.getJSONArray("photos");
                for (int j = 0; j < photos.length(); j++) {
                    photoRefs.add(Utils.apiPhotoUrl + photos.getJSONObject(j).getString("photo_reference"));
                }
                placeDetail.setPhotos(photoRefs);
            }
            searchResults.add(placeDetail);
        }
        return new ResponseEntity<>(searchResults, HttpStatus.OK);
    }
}
