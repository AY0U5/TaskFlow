package com.backend.security.bean;

import jakarta.persistence.*;

@Entity
public class Authority {

    @Id
    @SequenceGenerator(name = "authority_seq_gen", sequenceName = "authority_seq", allocationSize = 1)
    @GeneratedValue(generator = "authority_seq_gen",strategy = GenerationType.SEQUENCE)
    private Long id;
    private String name;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
