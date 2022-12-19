package refactor.kamsung.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

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

    private LikeStatus likeStatus;

    // 연관있는 user와 lodging은 좋아요 눌렀을때 바로 영속될수있게 setter따로 만들어줌
    public void setUser(User user) {
        this.user = user;
        user.getLikes().add(this);
    }

    public void setLodging(Lodging lodging) {
        this.lodging = lodging;
        lodging.getLikes().add(this);
    }

    // Like 생성자
    public static Like createLike(User user, Lodging lodging) {
        Like like = new Like();
        like.setUser(user);
        like.setLodging(lodging);
        like.setLikeStatus(LikeStatus.LIKE);
        like.setLikeDate(LocalDateTime.now()); // 월로 변경
        return like;
    }

    //==비즈니스 로직==//
    // 좋아요 취소
    public void cancel() {
        this.setLikeStatus(LikeStatus.CANCEL);
    }

}
