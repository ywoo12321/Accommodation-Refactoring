package refactor.kamsung.domain;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

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

    // 선호 지역, 월별 선호도는 후에 추가
}
