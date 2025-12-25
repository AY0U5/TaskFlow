package com.backend.dao.project;

import com.backend.bean.project.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface ProjectDao extends JpaRepository<Project,Long> {

    @Query("SELECT p FROM Project p JOIN p.teams t WHERE p.name = :name AND t.id = :teamId ORDER BY p.createdDate DESC")
    List<Project> findByNameAndTeamIdOrderByCreatedDate(String name,Long teamId);
    @Query("SELECT p FROM Project p JOIN p.teams t WHERE t.id = :teamId ORDER BY p.createdDate DESC")
    List<Project> findAllByTeamIdOrderByCreatedDate(Long teamId);
    @Modifying
    @Query("DELETE FROM Project p WHERE p.name = :name AND :teamId IN (SELECT t.id FROM p.teams t)")
    void deleteByNameAndTeamId(String name,Long teamId);
}
