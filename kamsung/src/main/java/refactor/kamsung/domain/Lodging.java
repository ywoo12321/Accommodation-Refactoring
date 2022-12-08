package refactor.kamsung.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
public class Lodging {

    @Id
    @GeneratedValue
    @Column(name = "lodging_id")
    private Long id;

    private String name;

    @Embedded
    private Address address;

    @OneToMany(mappedBy = "lodging", cascade = CascadeType.ALL)
    private List<Like> likes = new ArrayList<>();

    @Embedded
    private Weight weight;

    private String mainImg;
    private String subImg1;
    private String subImg2;
    private String subImg3;

}
