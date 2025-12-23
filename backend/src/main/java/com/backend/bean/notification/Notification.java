package com.backend.bean.notification;

import com.backend.security.bean.User;
import jakarta.persistence.*;

@Entity
public class Notification {

    @Id
    @SequenceGenerator(name = "notification_seq_gen", sequenceName = "notification_seq", allocationSize = 1)
    @GeneratedValue(generator = "notification_seq_gen",strategy = GenerationType.SEQUENCE)
    private Long id;
    @Column(length = 10000)
    private String message;
    @ManyToOne
    private User recipient;
    @Enumerated(EnumType.STRING)
    private NotificationType notificationType;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public User getRecipient() {
        return recipient;
    }

    public void setRecipient(User recipient) {
        this.recipient = recipient;
    }

    public NotificationType getNotificationType() {
        return notificationType;
    }

    public void setNotificationType(NotificationType notificationType) {
        this.notificationType = notificationType;
    }
}
