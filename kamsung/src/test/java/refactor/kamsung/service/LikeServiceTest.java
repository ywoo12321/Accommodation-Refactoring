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

    @Test
    public void 좋아요_클릭() throws Exception {

        //given
        User user = createUser();
        Lodging lodging = createLodging();

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
}