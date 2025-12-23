package com.backend.security.ws.converter;

import com.backend.security.bean.Authority;
import com.backend.security.bean.User;
import com.backend.security.ws.dto.AuthorityDto;
import com.backend.security.ws.dto.UserDto;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;


@Component
public class UserConverter {

    private final AuthorityConverter authorityConverter;

    public UserConverter(AuthorityConverter authorityConverter) {
        this.authorityConverter = authorityConverter;
    }

    public User toBean(UserDto dto){
        if (dto == null) {
            return null;
        }
        User user = new User();
        BeanUtils.copyProperties(dto,user);
        user.setAuthorities(dto.getAuthorities().stream().map(authorityConverter::toBean).toList());
        return user;
    }

    public UserDto toDto(User bean){
        if (bean == null) {
            return null;
        }
        UserDto userDto = new UserDto();
        BeanUtils.copyProperties(bean,userDto);
        //userDto.setAuthorities(bean.getAuthorities().stream().map(authorityConverter::toDto).toList());
        return userDto;
    }
}
