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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lodging_id")
    private Lodging lodging;

    private LocalDateTime likeDate;

//    private LikeStatus status; 할지 말지 고민중

    public void setUser(User user) {
        this.user = user;
        user.getLikes().add(this);
    }

    public void setLodging(Lodging lodging) {
        this.lodging = lodging;
        lodging.getLikes().add(this);
    }
}
