package com.backend.service.impl.client.team;

import com.backend.bean.team.Role;
import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;
import com.backend.dao.team.TeamUserDao;
import com.backend.security.bean.User;
import com.backend.service.facade.client.team.TeamUserClientService;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

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

    @Override
    public TeamUser addMember(Team team, User user) {
        TeamUser member = new TeamUser();
        member.setUser(user);
        member.setTeam(team);
        member.setRole(Role.MEMBER);
        return dao.save(member);
    }

    @Override
    public TeamUser addManager(Team team, User user) {
        TeamUser manager = new TeamUser();
        manager.setUser(user);
        manager.setTeam(team);
        manager.setRole(Role.MANAGER);
        return dao.save(manager);
    }

    @Override
    public void deleteTeamUser(TeamUser teamUser) {
        if (teamUser.getRole().equals(Role.OWNER)) {
            throw new IllegalArgumentException("Cannot delete an owner from the team.");
        }
        dao.deleteByUserId(teamUser.getUser().getId());
    }

    @Override
    public List<TeamUser> findByUserLogName(String logName) {
        return dao.findByUserLogName(logName);
    }
}
