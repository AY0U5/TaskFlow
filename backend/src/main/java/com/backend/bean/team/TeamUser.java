package com.backend.bean.team;

import com.backend.security.bean.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;

@Entity
public class TeamUser {

    @Id
    @SequenceGenerator(
            name = "team_user_sequence",
            sequenceName = "team_user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "team_user_sequence")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnoreProperties({
            "password", "name", "authorities", "enabled", "accountNonExpired",
            "accountNonLocked", "credentialsNonExpired", "teamUsers"
    })
    private User user;
    @ManyToOne
    @JoinColumn(name = "team_id")
    @JsonIgnoreProperties("teamUsers")
    private Team team;
    @Enumerated(EnumType.STRING)
    private Role role;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Team getTeam() {
        return team;
    }

    public void setTeam(Team team) {
        this.team = team;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
