package refactor.kamsung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.User;
import refactor.kamsung.domain.UserPrefer;
import refactor.kamsung.repository.UserPreferRepository;
import refactor.kamsung.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserPreferService {

    private final UserPreferRepository userPreferRepository;

    private final UserRepository userRepository;

    @Transactional
    public Long UserPrefer(Long userId) {

        User user = userRepository.findOne(userId);
        UserPrefer userPrefer = UserPrefer.createUserPrefer(user);

        userPreferRepository.save(userPrefer);

        return userPrefer.getId();
    }

    //파라미터값을 유저아이디로할지 유저성향아이디로할지
    @Transactional
    public List<Integer> findWeights(Long userPreferId) {

        UserPrefer userPrefer = userPreferRepository.findOne(userPreferId);

        List<Integer> weightList = new ArrayList<>();

        weightList.add(userPrefer.getWeight().getNatural());
        weightList.add(userPrefer.getWeight().getModern());
        weightList.add(userPrefer.getWeight().getIndustrial());
        weightList.add(userPrefer.getWeight().getAsia());

        return weightList;
    }
}
