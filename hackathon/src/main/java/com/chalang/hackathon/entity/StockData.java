package com.chalang.hackathon.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "stocks")
@Getter
@Setter
public class StockData {

  @Id
  @Column(name = "id")
  public String searchId;
  public String isin;
  public String growwContractId;
  public String companyName;
  public String companyShortName;
  public Integer industryCode;
  public Integer bseScriptCode;
  public String nseScriptCode;
  public Integer yearlyHighPrice;
  public Double yearlyLowPrice;
  public Double closePrice;
  public Long marketCap;

  @Column(length = 500)
  public String livePriceDto;
}
/*
*
*     {
      "isin": "INE335Y01020",
      "growwContractId": "GSTK542830",
      "companyName": "Indian Railway Catering & Tourism Corporation",
      "companyShortName": "IRCTC",
      "searchId": "indian-railway-catering-tourism-corpn-ltd",
      "industryCode": 105,
      "bseScriptCode": 542830,
      "nseScriptCode": "IRCTC",
      "yearlyHighPrice": 1049,
      "yearlyLowPrice": 564.55,
      "closePrice": 1014.65,
      "marketCap": 81160000000000,
      "livePriceDto": {
        "type": "LIVE_PRICE",
        "symbol": "IRCTC",
        "tsInMillis": 1712312976,
        "open": 998,
        "high": 1010.95,
        "low": 993.85,
        "close": 998.15,
        "ltp": 1002.95,
        "dayChange": 4.800000000000068,
        "dayChangePerc": 0.4808896458448198,
        "lowPriceRange": 898.35,
        "highPriceRange": 1097.95,
        "volume": 1970844,
        "totalBuyQty": 1027,
        "totalSellQty": 0,
        "oiDayChange": 0,
        "oiDayChangePerc": 0,
        "lastTradeQty": 1,
        "lastTradeTime": 1712293176
      }
    }*/