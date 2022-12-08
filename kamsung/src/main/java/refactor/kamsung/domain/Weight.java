package refactor.kamsung.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Weight {

    private String main;
    private String natural;
    private String modern;
    private String industrial;
    private String asia;

    protected Weight() {}

    public Weight(String main, String natural, String modern, String industrial, String asia) {
        this.main = main;
        this.natural = natural;
        this.modern = modern;
        this.industrial = industrial;
        this.asia = asia;
    }
}
