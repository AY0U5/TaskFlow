package com.backend.security.service.impl;

import com.backend.bean.team.TeamUser;
import com.backend.security.bean.Authority;
import com.backend.security.bean.Token;
import com.backend.security.bean.User;
import com.backend.security.dao.TokenDao;
import com.backend.security.dao.UserDao;
import com.backend.security.service.facade.AuthorityService;
import com.backend.security.service.facade.UserService;
import com.backend.security.ws.dto.AuthRequest;
import com.backend.service.facade.client.team.TeamUserClientService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import static com.backend.security.common.AuthorityNames.*;

@Service
public class UserServiceImpl implements UserService {

    private final UserDao dao;
    private final AuthorityService authorityService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;
    private final TokenDao tokenDao;
    private final TeamUserClientService teamUserClientService;

    public UserServiceImpl(
            UserDao dao,
            AuthorityService authorityService,
            PasswordEncoder passwordEncoder,
            AuthenticationManager authenticationManager,
            JwtService jwtService,
            TokenDao tokenDao,
            TeamUserClientService teamUserClientService
    ) {
        this.dao = dao;
        this.authorityService = authorityService;
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.jwtService = jwtService;
        this.tokenDao = tokenDao;
        this.teamUserClientService = teamUserClientService;
    }


    @Override
    public User findByUsername(String username) {
        return dao.findByUsername(username);
    }

    @Override
    public boolean existsByLogName(String logName) {
        return dao.existsByLogName(logName);
    }

    @Override
    public List<User> findAll() {
        return dao.findAll();
    }

    @Override
    public User save(User user) {
        Authority userAuthority = authorityService.findByName(USER);
        if (userAuthority == null) {
            throw new IllegalStateException("Role USER was not initialized");
        }
        List<Authority> authorities = new ArrayList<>();
        authorities.add(userAuthority);
        user.setAuthorities(authorities);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setEnabled(Boolean.TRUE);
        user.setAccountNonExpired(Boolean.TRUE);
        user.setAccountNonLocked(Boolean.TRUE);
        user.setCredentialsNonExpired(Boolean.TRUE);
        return dao.save(user);
    }

    @Override
    public Token authenticate(AuthRequest request){
        var authenticate = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()
                )
        );
        var claims = new HashMap<String, Object>();
        var user = ((User) authenticate.getPrincipal());
        claims.put("fullName", user.getFirstName() + " " + user.getLastName());
        String token = jwtService.generateToken(claims, user);
        Token tok = new Token();
        tok.setJwt(token);
        tok.setUser(user);
        tok.setCreatedAt(LocalDateTime.now());
        tok.setExpiredAt(LocalDateTime.now().plusHours(1));
        tokenDao.save(tok);
        return tok;
    }

    @Override
    @Transactional
    public void deleteByLogName(String logName) {
        List<TeamUser> byUserLogName = teamUserClientService.findByUserLogName(logName);
        if (byUserLogName != null) {
            for (TeamUser teamUser : byUserLogName) {
                teamUserClientService.deleteTeamUser(teamUser);
            }
        }
        dao.deleteByLogName(logName);
    }
}
