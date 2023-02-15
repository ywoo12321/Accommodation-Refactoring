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

    private User createUser(UserPrefer userPrefer) {
        User user = new User();
//        UserPrefer userPrefer = userPreferRepository.findOne(userPreferId);
        userPrefer.setUser(user);
        user.setUserPrefer(userPrefer);
        em.persist(user);
        return user;
    }

    private Weight createWeight(int natural, int modern, int industrial, int asia) {
        Weight weight = new Weight(natural, modern, industrial, asia);
        return weight;
    }

    private UserPrefer createUserPrefer(Weight weight) {
        UserPrefer userPrefer = new UserPrefer();
        userPrefer.setWeight(weight);
//        userPreferRepository.findOne(userPrefer.getId()).setWeight(weight);
//        userPreferRepository.save(userPrefer);
        return userPrefer;
    }

    @Test
    public void 코사인유사도_높은_Top3_유저() throws Exception { // 총 유저 7명

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
}
