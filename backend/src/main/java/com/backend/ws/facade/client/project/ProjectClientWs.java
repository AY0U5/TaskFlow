package com.backend.ws.facade.client.project;

import com.backend.bean.project.Project;
import com.backend.service.facade.client.project.ProjectClientService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projects")
public class ProjectClientWs {

    private final ProjectClientService service;

    public ProjectClientWs(
            ProjectClientService service
    ) {
        this.service = service;
    }

    public List<Project> findByNameAndTeamIdOrderByCreatedDate(String name, Long teamId) {
        return service.findByNameAndTeamIdOrderByCreatedDate(name, teamId);
    }

    public void deleteByNameAndTeamId(String name, Long teamId) {
        service.deleteByNameAndTeamId(name, teamId);
    }

    @GetMapping("/team/{teamId}")
    public List<Project> findAllByTeamIdOrderByCreatedDate(@PathVariable Long teamId) {
        return service.findAllByTeamIdOrderByCreatedDate(teamId);
    }

    @PostMapping("/")
    public Project createProject(@RequestBody Project project) {
        return service.createProject(project);
    }
}
