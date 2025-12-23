package com.backend.security.ws.converter;

import com.backend.security.bean.Authority;
import com.backend.security.ws.dto.AuthorityDto;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Component;

@Component
public class AuthorityConverter {

    public Authority toBean(AuthorityDto dto){
        if (dto == null) {
            return null;
        }
        Authority authority = new Authority();
        BeanUtils.copyProperties(dto,authority);
        return authority;
    }

    public AuthorityDto toDto(Authority bean){
        if (bean == null) {
            return null;
        }
        AuthorityDto authorityDto = new AuthorityDto();
        BeanUtils.copyProperties(bean,authorityDto);
        return authorityDto;
    }
}
