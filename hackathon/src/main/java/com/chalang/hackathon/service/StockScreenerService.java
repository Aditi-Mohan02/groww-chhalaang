package com.chalang.hackathon.service;

import com.chalang.hackathon.dto.StockDataDto;
import com.chalang.hackathon.dto.StocksDetail;
import com.chalang.hackathon.dto.TopStocks;
import com.chalang.hackathon.dto.Volume;
import com.chalang.hackathon.entity.StockData;
import com.chalang.hackathon.mapper.MapperClass;
import com.chalang.hackathon.repository.StockRepository;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired}))

public class StockScreenerService {

  public final StockRepository stockRepository;
  public final MapperClass mapperClass;
  public TopStocks getTopStocksDetails() {

    List<StockData> stockData = stockRepository.findAll();

    List<StockDataDto> stocks = mapperClass.toResources(stockData);

    List<Volume> volumn = stocks.stream()
        .sorted(Comparator.comparingDouble(data -> -data.getLivePriceDto().getVolume())).limit(5)
        .map(data -> Volume.builder().volumeValue(data.getLivePriceDto().getVolume()).companyName(data.companyName).build()).collect(
            Collectors.toList());

    List<StocksDetail> gainers = stocks.stream()
        .sorted((a, b) -> {
          double dataA = a.getLivePriceDto().getClose() - a.getLivePriceDto().getOpen();
          double dataB = b.getLivePriceDto().getClose() - b.getLivePriceDto().getOpen();
          return Double.compare(dataB, dataA);
        })
        .limit(5)
        .map(d -> StocksDetail.builder().price(d.getClosePrice()-d.getLivePriceDto().getOpen())
            .dayChangePerc(d.getLivePriceDto().dayChangePerc).companyName(d.companyName).build())
        .collect(Collectors.toList());


    List<StocksDetail> looser = stocks.stream()
        .sorted((a, b) -> {
          double dataA = a.getLivePriceDto().getClose() - a.getLivePriceDto().getOpen();
          double dataB = b.getLivePriceDto().getClose() - b.getLivePriceDto().getOpen();
          return Double.compare(dataA, dataB);
        })
        .limit(5)
        .map(d -> StocksDetail.builder().price(d.getClosePrice()-d.getLivePriceDto().getOpen()).companyName(d.companyName)
            .dayChangePerc(d.getLivePriceDto().dayChangePerc).build())
        .collect(Collectors.toList());
    return TopStocks.builder().volume(volumn).topGainer(gainers).topLooser(looser).build();
  }
}
