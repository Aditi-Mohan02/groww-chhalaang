package com.bugbashers.stockscreener.Service;

import com.bugbashers.stockscreener.model.Stocks;
import com.bugbashers.stockscreener.model.Users;

import java.util.List;

public interface UserService {

    public String save(Users user);

    List<Stocks> getStockName();
}
