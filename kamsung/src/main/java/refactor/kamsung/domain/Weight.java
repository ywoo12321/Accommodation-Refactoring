package refactor.kamsung.domain;

import lombok.Getter;

import javax.persistence.Embeddable;

@Embeddable
@Getter
public class Weight {

    private String main;
    private int natural;
    private int modern;
    private int industrial;
    private int asia;

    protected Weight() {}

    public Weight(int natural, int modern, int industrial, int asia) {
        this.natural = natural;
        this.modern = modern;
        this.industrial = industrial;
        this.asia = asia;
        if (natural > modern && natural > industrial &&  natural > asia) {
            this.main = "natural";
        }
        if (modern > natural && modern > industrial &&  modern > asia) {
            this.main = "modern";
        }
        if (industrial > modern && industrial > natural &&  industrial > asia) {
            this.main = "industrial";
        }
        if (asia > modern && asia > natural &&  asia > industrial) {
            this.main = "asia";
        } // 메인태그 구하는 로직 나중에 수정
          // 가장 높은 가중치값이 여러개일때 어떻게할지
    }
}
