package com.backend.dao.team;

import com.backend.bean.team.TeamUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TeamUserDao extends JpaRepository<TeamUser,Long> {

    void deleteByUserId(Long userId);

    List<TeamUser> findByUserId(Long userId);

    List<TeamUser> findByUserLogName(String username);
}
