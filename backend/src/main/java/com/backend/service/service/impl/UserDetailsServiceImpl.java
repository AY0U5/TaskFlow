package com.backend.service.service.impl;

import com.backend.service.bean.User;
import com.backend.service.dao.UserDao;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    private final UserDao dao;

    public UserDetailsServiceImpl(UserDao dao) {
        this.dao = dao;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = dao.findByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User with email: "+email+" not found");
        }
        return user;
    }
}
