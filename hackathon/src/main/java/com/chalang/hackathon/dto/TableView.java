package com.chalang.hackathon.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class TableView {

  public Double closePrice;
  public Long marketCap;
  public String companyName;
  public String searchId;
  private Double peRatio;
}