package com.bugbashers.stockscreener.model;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Stocks {

    private Integer id;
    private String name;

    private Double price;
}