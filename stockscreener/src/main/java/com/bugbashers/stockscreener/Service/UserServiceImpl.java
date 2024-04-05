package com.bugbashers.stockscreener.Service;

import com.bugbashers.stockscreener.dao.UserRepository;
import com.bugbashers.stockscreener.model.Stocks;
import com.bugbashers.stockscreener.model.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository theUserRepository) {
        userRepository = theUserRepository;
    }
    @Override
    public String save(Users user) {

        if(userRepository.findByuserName(user.getUserName()) != null)
            return "This username is already taken";

       if(userRepository.findByemailId(user.getEmailId()) != null)
            return "This emailid is already taken";

       if(user != null){
           userRepository.save(user);
           return "User registered successfully";
       }

       return "User not registered";
    }

    @Override
    public List<Stocks> getStockName() {

        List<Stocks> stocks = new ArrayList<>();
        stocks.add(Stocks.builder().id(1).name("abc").price(12.3).build());
        stocks.add(Stocks.builder().id(2).name("gb").price(12.3).build());
        stocks.add(Stocks.builder().id(3).name("gr").price(12.3).build());
        stocks.add(Stocks.builder().id(4).name("gwrgv").price(12.3).build());
        stocks.add(Stocks.builder().id(5).name("fb").price(12.3).build());
        stocks.add(Stocks.builder().id(6).name("bfbbv").price(12.3).build());
        return stocks;
    }
}
