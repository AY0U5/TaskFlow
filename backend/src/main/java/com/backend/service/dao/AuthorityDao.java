package com.backend.service.dao;

import com.backend.service.bean.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorityDao extends JpaRepository<Authority,Long> {

    Authority findByName(String name);
}
