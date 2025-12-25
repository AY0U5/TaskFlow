package com.backend.service.impl.client.team;

import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;
import com.backend.dao.team.TeamDao;
import com.backend.service.facade.client.team.TeamClientService;
import com.backend.service.facade.client.team.TeamUserClientService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TeamClientServiceImpl implements TeamClientService {

    private final TeamDao dao;
    private final TeamUserClientService teamUserClientService;

    public TeamClientServiceImpl(
            TeamDao dao,
            TeamUserClientService teamUserClientService
    ) {
        this.dao = dao;
        this.teamUserClientService = teamUserClientService;
    }

    @Override
    public Team initializedTeam() {
        Team team = new Team("Untitled Team");
        dao.save(team);
        List<TeamUser> teamUsers = new ArrayList<>();
        TeamUser owner = teamUserClientService.addOwner(team);
        teamUsers.add(owner);
        team.setTeamUsers(teamUsers);
        return dao.save(team);
    }
}
