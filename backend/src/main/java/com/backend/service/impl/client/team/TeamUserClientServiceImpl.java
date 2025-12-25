package com.backend.service.impl.client.team;

import com.backend.bean.team.Role;
import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;
import com.backend.dao.team.TeamUserDao;
import com.backend.security.bean.User;
import com.backend.service.facade.client.team.TeamUserClientService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class TeamUserClientServiceImpl implements TeamUserClientService {

    private final TeamUserDao dao;

    public TeamUserClientServiceImpl(TeamUserDao dao) {
        this.dao = dao;
    }

    @Override
    public TeamUser addOwner(Team team) {
        TeamUser owner = new TeamUser();
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        owner.setTeam(team);
        owner.setUser(creator);
        owner.setRole(Role.OWNER);
        return dao.save(owner);
    }
}
