package com.chalang.hackathon.dto;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class StatsDTO {
  private double marketCap;
  private double pbRatio;
  private double peRatio;
  private double divYield;
  private double bookValue;
  private double epsTtm;
  private double roe;
  private double industryPe;
  private String cappedType;
  private double dividendYieldInPercent;
  private double faceValue;
  private double returnOnAssets;
  private double operatingProfitMargin;
  private double netProfitMargin;
  private double evToSales;
  private double evToEbitda;
  private double earningsYield;
  private double sectorPb;
  private double sectorDivYield;
  private double sectorRoe;
  private double sectorRoce;
  private double priceToOcf;
  private double priceToFcf;
  private double roic;
  private double pePremiumVsSector;
  private double pbPremiumVsSector;
  private double divYieldVsSector;
  private double sectorPe;
  private double priceToSales;
  private double pegRatio;

  // Getters and setters
  // You can generate them automatically using your IDE or write them manually if needed
}

