package refactor.kamsung.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "user_prefer")
public class UserPrefer {

    @Id
    @GeneratedValue
    @Column(name = "user_prefer_id")
    private Long id;

    @OneToOne(mappedBy = "userPrefer", fetch = FetchType.LAZY)
    private User user;

    private Weight weight;

    public void setUserPrefer(User user) {
        List<Like> likes = user.getLikes();
        int natural = 0;
        int modern = 0;
        int industrial = 0;
        int asia = 0;

        for (int i = 0; i < likes.size(); i++) {
            natural += likes.get(i).getLodging().getWeight().getNatural();
            modern += likes.get(i).getLodging().getWeight().getModern();
            industrial += likes.get(i).getLodging().getWeight().getIndustrial();
            asia += likes.get(i).getLodging().getWeight().getAsia();
        }

        Weight weight = new Weight(natural, modern, industrial, asia);
        this.weight = weight;
    }

    public static UserPrefer createUserPrefer(User user) {
        UserPrefer userPrefer = new UserPrefer();
        userPrefer.setUser(user);
        userPrefer.setUserPrefer(user);
        return userPrefer;
    }

    // 선호 지역, 월별 선호도는 후에 추가
}
