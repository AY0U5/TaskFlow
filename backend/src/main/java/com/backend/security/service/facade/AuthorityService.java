package com.backend.security.service.facade;

import com.backend.security.bean.Authority;

import java.util.List;

public interface AuthorityService {
    Authority findByName(String name);

    List<Authority> findAll();

    Authority save(Authority authority);
}
