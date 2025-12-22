package com.backend.service.service.facade;

import com.backend.service.bean.Authority;

import java.util.List;

public interface AuthorityService {
    Authority findByName(String name);

    List<Authority> findAll();

    Authority save(Authority authority);
}
