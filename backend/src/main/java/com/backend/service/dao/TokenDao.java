package com.backend.service.dao;

import com.backend.service.bean.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TokenDao extends JpaRepository<Token,Long> {

}
