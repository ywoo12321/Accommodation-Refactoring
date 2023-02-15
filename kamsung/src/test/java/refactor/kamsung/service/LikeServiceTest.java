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

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class LikeServiceTest {

    @PersistenceContext
    EntityManager em;

    @Autowired LikeService likeService;
    @Autowired LikeRepository likeRepository;

    private User createUser() {
        User user = new User();
        user.setNickname("원섭");
        user.setAddress(new Address("경기도", "남양주시"));
        em.persist(user);
        return user;
    }

    private Lodging createLodging() {
        Lodging lodging = new Lodging();
        lodging.setName("숙소1");
        em.persist(lodging);
        return lodging;
    }

    private Weight createWeight(int natural, int modern, int industrial, int asia) {
        Weight weight = new Weight(natural, modern, industrial, asia);
        return weight;
    }

    @Test
    public void 좋아요_정보_받아오기() throws Exception {

        //given
        User user = createUser();
        Lodging lodging = createLodging();
        Weight weight = createWeight(1,1,1,1);
        lodging.setWeight(weight);
        Long likeId = likeService.like(user.getId(), lodging.getId());

        //when
       Like like = likeService.getLikeByUserLodging(user.getId(), lodging.getId());

        //then
        Long testId = like.getId();

        //새로 등록한 likeId와 찾은 testId가 일치하는지 확인
        Assertions.assertEquals(likeId, testId);
    }

    @Test
    public void 좋아요_클릭() throws Exception {

        //given
        User user = createUser();
        Lodging lodging = createLodging();
        Weight weight = createWeight(1,1,1,1);
        lodging.setWeight(weight);

        //when
        Long likeId = likeService.like(user.getId(), lodging.getId());

        //then
        Like testLike = likeRepository.findOne(likeId);

        //좋아요 상태 확인
        Assertions.assertEquals(LikeStatus.LIKE, testLike.getLikeStatus());

        //user, lodging에 좋아요 정보 들어가있는지 확인
        Assertions.assertTrue(lodging.getLikes().contains(testLike));
        Assertions.assertTrue(user.getLikes().contains(testLike));
    }

    @Test
    public void 좋아요_취소() throws Exception {

        //given
        User user = createUser();
        Lodging lodging = createLodging();
        Weight weight = createWeight(1,1,1,1);
        lodging.setWeight(weight);
        Long likeId = likeService.like(user.getId(), lodging.getId());

        //when
        likeService.cancelLike(likeId);

        //then
        Like testLike = likeRepository.findOne(likeId);

        //좋아요 상태 변경 확인
        Assertions.assertEquals(LikeStatus.CANCEL, testLike.getLikeStatus());

        //user, lodging에서 좋아요 빠졌는지 확인
        Assertions.assertTrue(!lodging.getLikes().contains(testLike));
        Assertions.assertTrue(!user.getLikes().contains(testLike));
    }

    @Test
    public void 좋아요_클릭시_회원성향() throws Exception {

        //given
        User user = createUser();

        Lodging lodging1 = createLodging();
        Lodging lodging2 = createLodging();
        Weight weight1 = createWeight(1,2,3,4);
        Weight weight2 = createWeight(5,5,5,5);
        lodging1.setWeight(weight1);
        lodging2.setWeight(weight2);

        //when
        Long like1 = likeService.like(user.getId(), lodging1.getId());
        Long like2 = likeService.like(user.getId(), lodging2.getId());

        //then
        Assertions.assertEquals(user.getUserPrefer().getWeight().getNaturals(), 6);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getIndustrial(), 8);
    }

    @Test
    public void 좋아요_취소시_회원성향() throws Exception {

        //given
        User user = createUser();

        Lodging lodging1 = createLodging();
        Lodging lodging2 = createLodging();
        Weight weight1 = createWeight(1,2,3,4);
        Weight weight2 = createWeight(5,5,5,5);
        lodging1.setWeight(weight1);
        lodging2.setWeight(weight2);
        Long like1 = likeService.like(user.getId(), lodging1.getId());
        Long like2 = likeService.like(user.getId(), lodging2.getId());

        //when
        likeService.cancelLike(like1);

        //then
        Assertions.assertEquals(user.getUserPrefer().getWeight().getNaturals(), 5);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getIndustrial(), 5);
    }

    @Test
    public void 좋아요_클릭_취소시_회원태그() throws Exception {

        //given
        User user = createUser();

        Lodging lodging1 = createLodging();
        Lodging lodging2 = createLodging();
        Weight weight1 = createWeight(5,7,9, 11);
        Weight weight2 = createWeight(11,5,10,5);
        lodging1.setWeight(weight1);
        lodging2.setWeight(weight2);
        Long like1 = likeService.like(user.getId(), lodging1.getId());
        Assertions.assertEquals(user.getUserPrefer().getWeight().getMain(), "asia");
        Long like2 = likeService.like(user.getId(), lodging2.getId());
        Assertions.assertEquals(user.getUserPrefer().getWeight().getMain(), "industrial");

        //when
        likeService.cancelLike(like1);

        //then
        Assertions.assertEquals(user.getUserPrefer().getWeight().getMain(), "natural");
    }
}