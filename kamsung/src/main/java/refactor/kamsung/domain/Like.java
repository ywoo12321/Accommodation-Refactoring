package refactor.kamsung.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "likes")
public class Like {

    @Id @GeneratedValue
    @Column(name = "like_id")
    private Long id;

    private User user;

    private Lodging lodging;

    private LocalDateTime likeDate;

//    private LikeStatus status; 할지 말지 고민중
}
