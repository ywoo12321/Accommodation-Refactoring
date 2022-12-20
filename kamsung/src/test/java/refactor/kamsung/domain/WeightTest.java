package refactor.kamsung.domain;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;

import static org.junit.Assert.*;

public class WeightTest {

    private Weight createWeight(int natural, int modern, int industrial, int asia) {
        Weight weight = new Weight(natural, modern, industrial, asia);
        return weight;
    }

    @Test
    public void 숙소_태그() throws Exception {

        //given
        Weight natural = createWeight(100,12,13,14);
        Weight modern = createWeight(1,100,13,14);
        Weight industrial = createWeight(1,12,100,14);
        Weight asia = createWeight(1,12,13,100);

        //when


        //then
        Assertions.assertEquals(natural.getMain(), "natural");
        Assertions.assertEquals(modern.getMain(), "modern");
        Assertions.assertEquals(industrial.getMain(), "industrial");
        Assertions.assertEquals(asia.getMain(), "asia");
    }

}