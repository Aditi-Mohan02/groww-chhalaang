package com.chalang.hackathon.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.Map;
import lombok.Data;
import lombok.ToString;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
@ToString
public class FinancialStatements {
  public String title;
  public Map<String, Double> yearly;
  public Map<String, Double> quarterly;
}
