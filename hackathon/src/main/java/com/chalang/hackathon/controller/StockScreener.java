package com.chalang.hackathon.controller;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))
@Slf4j
public class StockScreener {


  @GetMapping("/hello")
  public String helloWord() {
    return "Hello WOrld";
  }
}
