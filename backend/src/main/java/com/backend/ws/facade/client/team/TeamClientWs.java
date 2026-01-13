package com.backend.ws.facade.client.team;

import com.backend.bean.team.Team;
import com.backend.bean.team.TeamUser;
import com.backend.service.facade.client.team.TeamClientService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teams")
public class TeamClientWs {

    private final TeamClientService service;

    public TeamClientWs(TeamClientService service) {
        this.service = service;
    }

    @PostMapping("/addMember")
    public Team addMember(@RequestBody TeamUser teamUser) {
        return service.addMember(teamUser.getTeam(), teamUser.getUser());
    }
}
