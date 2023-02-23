package refactor.kamsung;

import refactor.kamsung.domain.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.persistence.EntityManager;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.service.LikeService;
import refactor.kamsung.service.UserService;

@Component
@RequiredArgsConstructor
public class SampleData {

    private final SampleDataService sampleDataService;

    @PostConstruct
    public void makeSampleData() {
        sampleDataService.makeUser1();
        sampleDataService.makeUser2();
        sampleDataService.makeUser3();
        sampleDataService.makeUser4();
        sampleDataService.makeUser5();
    }

    @Component
    @Transactional
    @RequiredArgsConstructor
    static class SampleDataService {

        private final EntityManager em;

        private final LikeService likeService;

        private User createUser(String nickname, String password, String firstAddress, String secondAddress) {
            User user = new User();
            user.setNickname(nickname);
            user.setPassword(password);
            user.setAddress(new Address(firstAddress, secondAddress));
            return user;
        }

        public void makeUser1() {
            User user = createUser("user1", "user1", "경기도", "남양주");
            em.persist(user);
            Long userId = user.getId();
            likeService.like(userId, (long)1);
            likeService.like(userId, (long)2);
            likeService.like(userId, (long)3);
            likeService.like(userId, (long)4);
            likeService.like(userId, (long)5);
        }

        public void makeUser2() {
            User user = createUser("user2", "user2", "경기도", "구리");
            em.persist(user);
            Long userId = user.getId();
            likeService.like(userId, (long)6);
            likeService.like(userId, (long)7);
            likeService.like(userId, (long)8);
            likeService.like(userId, (long)9);
            likeService.like(userId, (long)10);
        }

        public void makeUser3() {
            User user = createUser("user3", "user3", "경기도", "일산");
            em.persist(user);
            Long userId = user.getId();
            likeService.like(userId, (long)11);
            likeService.like(userId, (long)12);
            likeService.like(userId, (long)13);
            likeService.like(userId, (long)14);
            likeService.like(userId, (long)15);
        }

        public void makeUser4() {
            User user = createUser("user4", "user4", "경기도", "의정부");
            em.persist(user);
            Long userId = user.getId();
            likeService.like(userId, (long)16);
            likeService.like(userId, (long)17);
            likeService.like(userId, (long)18);
            likeService.like(userId, (long)19);
            likeService.like(userId, (long)20);
        }

        public void makeUser5() {
            User user = createUser("user5", "user5", "서울시", "성북구");
            em.persist(user);
            Long userId = user.getId();
            likeService.like(userId, (long)21);
            likeService.like(userId, (long)22);
            likeService.like(userId, (long)23);
            likeService.like(userId, (long)24);
            likeService.like(userId, (long)25);
        }
    }
}
