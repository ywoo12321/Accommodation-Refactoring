package refactor.kamsung.service;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.User;
import refactor.kamsung.repository.UserRepository;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class UserServiceTest {

    @Autowired UserService userService;
    @Autowired UserRepository userRepository;

    @Test
    public void 회원가입() throws Exception {

        //given
        User user = new User();
        user.setNickname("wonsub");

        //when
        Long testId = userService.join(user);

        //then
        Assertions.assertEquals(user, userRepository.findOne(testId));

    }

    @Test(expected = IllegalStateException.class)
    public void 중복_회원_예외() throws Exception {

        //given
        User user1 = new User();
        user1.setNickname("wonsub");

        User user2 = new User();
        user2.setNickname("wonsub");

        //when
        userService.join(user1);
        userService.join(user2); //예외발생지점

        //then
        fail("예외 발생 후 fail");
    }

}