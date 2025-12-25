package com.backend.service.facade.client.project;

import com.backend.bean.project.Project;

import java.util.List;

public interface ProjectClientService {
    List<Project> findByNameAndTeamIdOrderByCreatedDate(String name, Long teamId);

    void deleteByNameAndTeamId(String name, Long teamId);

    List<Project> findAllByTeamIdOrderByCreatedDate(Long teamId);

    Project createProject(Project project);
}
