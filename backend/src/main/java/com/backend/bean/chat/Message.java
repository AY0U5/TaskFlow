package com.backend.bean.chat;

import com.backend.security.bean.User;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import java.time.LocalDateTime;

@Entity
public class Message {

    @Id
    @SequenceGenerator(name = "message_sequence", sequenceName = "message_sequence", allocationSize = 1)
    @GeneratedValue(generator = "message_sequence",strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(length = 10000)
    private String content;
    @OneToOne
    private User sender;
    @CreatedDate
    @Column(updatable = false, nullable = false)
    private LocalDateTime createdDate;
    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime lastModifiedDate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getSender() {
        return sender;
    }

    public void setSender(User sender) {
        this.sender = sender;
    }

    public LocalDateTime getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDateTime createdDate) {
        this.createdDate = createdDate;
    }

    public LocalDateTime getLastModifiedDate() {
        return lastModifiedDate;
    }

    public void setLastModifiedDate(LocalDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
    }
}
