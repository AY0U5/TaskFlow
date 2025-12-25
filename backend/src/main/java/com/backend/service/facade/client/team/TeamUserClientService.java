package com.backend.service.facade.client.team;

import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;

public interface TeamUserClientService {
    TeamUser addOwner(Team team);
}
