package com.backend.security.service.facade;

import com.backend.security.bean.Token;
import com.backend.security.bean.User;
import com.backend.security.ws.dto.AuthRequest;

import java.util.List;

public interface UserService {
    User findByUsername(String username);

    User findByEmail(String email);

    Boolean existsByUsername(String username);

    List<User> findAll();

    User save(User user);

    Token authenticate(AuthRequest request);

    void deleteById(Long aLong);
}
