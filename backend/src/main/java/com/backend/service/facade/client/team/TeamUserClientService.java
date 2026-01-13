package com.backend.service.facade.client.team;

import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;
import com.backend.security.bean.User;

import java.util.List;

public interface TeamUserClientService {
    TeamUser addOwner(Team team);

    TeamUser addMember(Team team, User user);

    TeamUser addManager(Team team, User user);

    List<TeamUser> findByUserLogName(String logName);

    void deleteTeamUser(TeamUser teamUser);
}
