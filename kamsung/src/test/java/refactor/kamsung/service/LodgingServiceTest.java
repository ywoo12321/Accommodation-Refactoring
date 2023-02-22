package refactor.kamsung.service;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.repository.LodgingRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class LodgingServiceTest {

    @PersistenceContext
    EntityManager em;

    @Autowired
    LodgingRepository lodgingRepository;
    @Autowired
    LodgingService lodgingService;

    @Test
    public void Db_연동후_조회_테스트() throws Exception {

        //given
        Lodging lodging1 = lodgingService.findOne((long)2);
        Lodging lodging2 = lodgingService.findOne((long)7);

        //when

        //then
        Assertions.assertEquals(lodging1.getWeight().getNatural(), 2);
        Assertions.assertEquals(lodging1.getWeight().getMain(), "asia");
        Assertions.assertEquals(lodging1.getName(), "가을담");
        Assertions.assertEquals(lodging1.getAddress().getFirstAddress(), "경상");
        Assertions.assertEquals(lodging2.getWeight().getNatural(), 59);
        Assertions.assertEquals(lodging2.getWeight().getMain(), "natural");
        Assertions.assertEquals(lodging2.getName(), "고운");
        Assertions.assertEquals(lodging2.getAddress().getFirstAddress(), "서울");
    }

    @Test
    public void 태그별_숙소_조회_테스트() throws Exception {

        //given
        List<Lodging> lodgings = lodgingService.findLodgingsByTag("asia");

        //when

        //then
        for (Lodging lodging: lodgings) {
            Assertions.assertEquals(lodging.getWeight().getMain(), "asia");
        }
        System.out.println(lodgings.size());
    }
}
