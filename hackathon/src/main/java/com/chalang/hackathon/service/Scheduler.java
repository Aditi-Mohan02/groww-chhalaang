package com.chalang.hackathon.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))
public class Scheduler {

public final DataStorage dataStorage;
  @Scheduled(fixedRate = 120000) // Run every 2 min
  public void myScheduledTask() {
    dataStorage.saveDataToDb();
  }
}
