package com.chalang.hackathon.controller;


import com.chalang.hackathon.dto.TopStocks;
import com.chalang.hackathon.service.DataStorage;
import com.chalang.hackathon.service.StockScreenerService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))
@Slf4j
public class StockScreener {

  public final DataStorage str;
  public final StockScreenerService service;



  @GetMapping("/hello")
  public String helloWord() {
    return "Hello WOrld";
  }

  @PostMapping("/save")
  public void saveDataToDb(){
    str.saveDataToDb();

  }

  @GetMapping("/top/stocks")
  public TopStocks getTopStocksDetail(){
    return service.getTopStocksDetails();
  }
}
