package com.bugbashers.stockscreener.dao;

import com.bugbashers.stockscreener.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Users, Integer> {
    Users findByuserName(String userName);

    Users findByemailId(String userName);
}
