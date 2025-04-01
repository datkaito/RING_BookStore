package com.ring.bookstore.dtos.accounts;

import com.ring.bookstore.enums.Gender;

import java.time.LocalDate;
import java.time.LocalDateTime;

public interface IProfile {

    String getName();

    String getEmail();

    String getPhone();

    Gender getGender();

    LocalDate getDob();

    String getImage();

    LocalDateTime getJoinedDate();

    Integer getTotalFollows();

    Integer getTotalReviews();
}
