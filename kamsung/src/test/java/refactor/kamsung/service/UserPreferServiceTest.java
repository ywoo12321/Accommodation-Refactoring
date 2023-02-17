package refactor.kamsung.service;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.*;
import refactor.kamsung.repository.LikeRepository;
import refactor.kamsung.repository.LodgingRepository;
import refactor.kamsung.repository.UserPreferRepository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserPreferServiceTest {

    @PersistenceContext
    EntityManager em;

    @Autowired
    UserPreferService userPreferService;
    @Autowired
    UserPreferRepository userPreferRepository;
    @Autowired
    LodgingRepository lodgingRepository;

    private User createUser(UserPrefer userPrefer) {
        User user = new User();
        userPrefer.setUser(user);
        user.setUserPrefer(userPrefer);
        em.persist(user);
        return user;
    }

    private Lodging createLodging(Weight weight) {
        Lodging lodging = new Lodging();
        lodging.setWeight(weight);
        lodgingRepository.save(lodging);
        return lodging;
    }

    private Weight createWeight(int natural, int modern, int industrial, int asia) {
        Weight weight = new Weight(natural, modern, industrial, asia);
        return weight;
    }

    private UserPrefer createUserPrefer(Weight weight) {
        UserPrefer userPrefer = new UserPrefer();
        userPrefer.setWeight(weight);
        return userPrefer;
    }

    @Test
    public void 코사인유사도_높은_Top3_유저() throws Exception { // 총 유저 8명

        //given
        Weight weightMain = createWeight(13,53,20,9);
        UserPrefer userPreferMain = createUserPrefer(weightMain);
        User userMain = createUser(userPreferMain);
        Weight weight1 = createWeight(49,1,50,10);
        UserPrefer userPrefer1 = createUserPrefer(weight1);
        User user1 = createUser(userPrefer1);
        Weight weight2 = createWeight(10,30,32,34);
        UserPrefer userPrefer2 = createUserPrefer(weight2);
        User user2 = createUser(userPrefer2);
        Weight weight3 = createWeight(15,15,50,25);
        UserPrefer userPrefer3 = createUserPrefer(weight3);
        User user3 = createUser(userPrefer3);
        Weight weight4 = createWeight(35,50,5,39);
        UserPrefer userPrefer4 = createUserPrefer(weight4);
        User user4 = createUser(userPrefer4);
        Weight weight5 = createWeight(9,10,10,70);
        UserPrefer userPrefer5 = createUserPrefer(weight5);
        User user5 = createUser(userPrefer5);
        Weight weight6 = createWeight(40,0,4,56);
        UserPrefer userPrefer6 = createUserPrefer(weight6);
        User user6 = createUser(userPrefer6);
        Weight weight7 = createWeight(12,52,19,10);
        UserPrefer userPrefer7 = createUserPrefer(weight7);
        User user7 = createUser(userPrefer7);

        //when
        List<User> top3User = userPreferService.getTopThreeUser(userMain);

        //then
        Assertions.assertTrue(top3User.contains(user7));
        System.out.println(top3User);
    }

    @Test
    public void 코사인유사도_높은_Top10_숙소() throws Exception { // 총 숙소 20개

        //given
        Weight userWeight = createWeight(13,53,20,9);
        UserPrefer userPrefer = createUserPrefer(userWeight);
        User user = createUser(userPrefer);

        Weight weight1 = createWeight(15,25,35,40);
        Lodging lodging1 = createLodging(weight1);
        Weight weight2 = createWeight(20,20,15,40);
        Lodging lodging2 = createLodging(weight2);
        Weight weight3 = createWeight(25,30,30,30);
        Lodging lodging3 = createLodging(weight3);
        Weight weight4 = createWeight(30,0,0,70);
        Lodging lodging4 = createLodging(weight4);
        Weight weight5 = createWeight(35,70,0,0);
        Lodging lodging5 = createLodging(weight5);
        Weight weight6 = createWeight(40,10,10,41);
        Lodging lodging6 = createLodging(weight6);
        Weight weight7 = createWeight(45,0,23,34);
        Lodging lodging7 = createLodging(weight7);
        Weight weight8 = createWeight(50,16,13,12);
        Lodging lodging8 = createLodging(weight8);
        Weight weight9 = createWeight(55,10,10,50);
        Lodging lodging9 = createLodging(weight9);
        Weight weight10 = createWeight(60,50,10,10);
        Lodging lodging10 = createLodging(weight10);
        Weight weight11 = createWeight(65,10,50,10);
        Lodging lodging11 = createLodging(weight11);
        Weight weight12 = createWeight(70,40,30,10);
        Lodging lodging12 = createLodging(weight12);
        Weight weight13 = createWeight(75,10,30,10);
        Lodging lodging13 = createLodging(weight13);
        Weight weight14 = createWeight(80,10,10,20);
        Lodging lodging14 = createLodging(weight14);
        Weight weight15 = createWeight(85,10,0,0);
        Lodging lodging15 = createLodging(weight15);
        Weight weight16 = createWeight(90,0,10,10);
        Lodging lodging16 = createLodging(weight16);
        Weight weight17 = createWeight(95,40,43,10);
        Lodging lodging17 = createLodging(weight17);
        Weight weight18 = createWeight(5,30,20,40);
        Lodging lodging18 = createLodging(weight18);
        Weight weight19 = createWeight(0,12,24,68);
        Lodging lodging19 = createLodging(weight19);
        Weight weight20 = createWeight(10,10,10,10);
        Lodging lodging20 = createLodging(weight20);

        //when
        List<Lodging> top10Lodging = userPreferService.getTopTenLodging(user);

        //then
        Assertions.assertTrue(top10Lodging.contains(lodging5));
        Assertions.assertTrue(top10Lodging.contains(lodging3));
        Assertions.assertTrue(top10Lodging.contains(lodging20));
        Assertions.assertTrue(top10Lodging.contains(lodging10));
        Assertions.assertTrue(top10Lodging.contains(lodging18));
        Assertions.assertTrue(top10Lodging.contains(lodging12));
        Assertions.assertTrue(top10Lodging.contains(lodging1));
        Assertions.assertTrue(top10Lodging.contains(lodging2));
        Assertions.assertTrue(top10Lodging.contains(lodging17));
        Assertions.assertTrue(top10Lodging.contains(lodging8));
    }
}
