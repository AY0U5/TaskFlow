package com.backend.service.facade.client.project;

import com.backend.bean.project.Project;
import com.backend.ws.dto.project.ProjectDto;

import java.util.List;

public interface ProjectClientService {
    List<Project> findByNameAndTeamIdOrderByCreatedDate(String name, Long teamId);

    void deleteByNameAndTeamId(String name, Long teamId);

    List<Project> findAllByTeamIdOrderByCreatedDate(Long teamId);

    Project createProject(Project project);

    List<Project> findByAuthenticatedUser();
}
