package com.backend.security.ws.ws;

import com.backend.security.bean.Token;
import com.backend.security.bean.User;
import com.backend.security.service.facade.UserService;
import com.backend.security.ws.converter.TokenConverter;
import com.backend.security.ws.converter.UserConverter;
import com.backend.security.ws.dto.AuthRequest;
import com.backend.security.ws.dto.TokenDto;
import com.backend.security.ws.dto.UserDto;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth")
public class UserWs {

    private final UserService service;
    private final UserConverter converter;
    private final TokenConverter tokenConverter;

    public UserWs(
            UserService service,
            UserConverter converter,
            TokenConverter tokenConverter
    ) {
        this.service = service;
        this.converter = converter;
        this.tokenConverter = tokenConverter;
    }

    @GetMapping("/username/{username}")
    public ResponseEntity<UserDto> findByUsername(@PathVariable String username) {
        User byUsername = service.findByUsername(username);
        if (byUsername == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        UserDto dto = converter.toDto(byUsername);
        return new ResponseEntity<>(dto, HttpStatus.OK);
    }

    @GetMapping("/exist/logName/{logName}")
    public ResponseEntity<Boolean> existsByLogName(@PathVariable String logName) {
        Boolean bool = service.existsByLogName(logName);
        return new ResponseEntity<>(bool,HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<List<UserDto>> findAll() {
        List<User> all = service.findAll();
        if (all == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        List<UserDto> list = all.stream().map(converter::toDto).toList();
        return new ResponseEntity<>(list,HttpStatus.OK);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> save(@RequestBody @Valid UserDto dto) {
        User bean = converter.toBean(dto);
        User save = service.save(bean);
        UserDto saved = converter.toDto(save);
        return new ResponseEntity<>(saved,HttpStatus.OK);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<TokenDto> authenticate(@RequestBody @Valid AuthRequest request) {
        Token authenticate = service.authenticate(request);
        TokenDto dto = tokenConverter.toDto(authenticate);
        return new ResponseEntity<>(dto,HttpStatus.OK);
    }

    @DeleteMapping("/username/{username}")
    public ResponseEntity<Void> deleteByUsername(@PathVariable String username) {
        service.deleteByUsername(username);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
