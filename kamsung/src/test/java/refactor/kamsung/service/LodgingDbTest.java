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

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class LodgingDbTest {

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
        Assertions.assertEquals(lodging1.getWeight().getMain(), "한옥");
        Assertions.assertEquals(lodging1.getName(), "가을담");
        Assertions.assertEquals(lodging1.getAddress().getFirstAddress(), "경상");
        Assertions.assertEquals(lodging2.getWeight().getNatural(), 59);
        Assertions.assertEquals(lodging2.getWeight().getMain(), "내츄럴");
        Assertions.assertEquals(lodging2.getName(), "고운");
        Assertions.assertEquals(lodging2.getAddress().getFirstAddress(), "서울");
    }
}
