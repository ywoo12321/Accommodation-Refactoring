package refactor.kamsung.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter @Setter
public class User {

    @Id @GeneratedValue
    @Column(name = "member_id")
    private Long id;

    private String nickname;
    private String password;

    private Address address;

    private List<Like> likes = new ArrayList<>();

    private UserPrefer userPrefer;

}
