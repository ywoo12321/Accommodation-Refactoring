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
@Getter
@Setter
public class Lodging {

    @Id
    @GeneratedValue
    @Column(name = "lodging_id")
    private Long id;

    private String name;

    private Address address;

    private List<Like> likes = new ArrayList<>();

    private Weight weight;

    private String mainImg;
    private String subImg1;
    private String subImg2;
    private String subImg3;

}
