package com.backend.security.service.impl;

import com.backend.security.bean.Authority;
import com.backend.security.dao.AuthorityDao;
import com.backend.security.service.facade.AuthorityService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorityServiceImpl implements AuthorityService {

    private final AuthorityDao authorityDao;

    public AuthorityServiceImpl(AuthorityDao authorityDao) {
        this.authorityDao = authorityDao;
    }

    @Override
    public Authority findByName(String name) {
        return authorityDao.findByName(name);
    }

    @Override
    public List<Authority> findAll() {
        return authorityDao.findAll();
    }

    @Override
    public Authority save(Authority authority) {
        return authorityDao.save(authority);
    }
}
