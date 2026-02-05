package com.backend.service.impl.client.project;

import com.backend.bean.project.Project;
import com.backend.bean.project.ProjectStatus;
import com.backend.bean.team.Team;
import com.backend.dao.project.ProjectDao;
import com.backend.service.facade.client.project.ProjectClientService;
import com.backend.service.facade.client.team.TeamClientService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class ProjectClientServiceImpl implements ProjectClientService {

    private final ProjectDao dao;
    private final TeamClientService teamClientService;

    public ProjectClientServiceImpl(
            ProjectDao dao,
            TeamClientService teamClientService
    ) {
        this.dao = dao;
        this.teamClientService = teamClientService;
    }

    @Override
    public List<Project> findByNameAndTeamIdOrderByCreatedDate(String name, Long teamId) {
        return dao.findByNameAndTeamIdOrderByCreatedDate(name, teamId);
    }

    @Override
    @Transactional
    public void deleteByNameAndTeamId(String name, Long teamId) {
        dao.deleteByNameAndTeamId(name, teamId);
    }

    @Override
    public List<Project> findAllByTeamIdOrderByCreatedDate(Long teamId) {
        return dao.findAllByTeamIdOrderByCreatedDate(teamId);
    }

    @Override
    public Project createProject(Project project) {
        project.setCreatedDate(LocalDateTime.now());
        project.setStatus(ProjectStatus.NOT_STARTED);
        List<Team> teams = new ArrayList<>();
        Team team = teamClientService.initializedTeam();
        teams.add(team);
        project.setTeams(teams);
        return dao.save(project);
    }

    @Override
    public List<Project> findByAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String username = authentication.getName();
    }
}
