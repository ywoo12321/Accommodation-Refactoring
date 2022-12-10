package refactor.kamsung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.User;
import refactor.kamsung.repository.UserRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    //회원가입
    @Transactional
    public Long join(User user) {

        validateDuplicateUser(user);  // (중복 회원 검증 --> 회원 닉네임)
        userRepository.save(user);
        return user.getId();
    }

    private void validateDuplicateUser(User user) {
        List<User> users = userRepository.findByName(user.getNickname());
        if (!users.isEmpty()) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }  // return --> "isUnique" : True(Bool)
    }
}
