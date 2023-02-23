package refactor.kamsung.service;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.SampleData;
import refactor.kamsung.domain.Like;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;
import refactor.kamsung.repository.UserRepository;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class SampleDataTest {

    @Autowired
    UserRepository userRepository;
    @Autowired
    LodgingService lodgingService;
    @Autowired
    LikeService likeService;

    @Test
    public void 샘플_데이터_조회_및_업데이트_테스트() throws Exception {// 총 유저 5명

        //given
        User user1 =  userRepository.findByName("user1").get(0);
        User user2 =  userRepository.findByName("user2").get(0);
        Lodging lodging1 = lodgingService.findOne((long)1);
        Lodging lodging2 = lodgingService.findOne((long)9);

        //when
        Like like1 = likeService.getLikeByUserLodging(user1.getId(), lodging1.getId());
        Like like2 = likeService.getLikeByUserLodging(user2.getId(), lodging2.getId());

        //then
        Assertions.assertEquals(user1.getUserPrefer().getWeight().getMain(), "modern");
        Assertions.assertEquals(user2.getUserPrefer().getWeight().getMain(), "natural");
        Assertions.assertEquals(user1.getUserPrefer().getWeight().getIndustrial(), 24);
        Assertions.assertEquals(user2.getUserPrefer().getWeight().getIndustrial(), 54);
        Assertions.assertTrue(user1.getLikes().contains(like1));
        Assertions.assertTrue(user2.getLikes().contains(like2));

    }

}
