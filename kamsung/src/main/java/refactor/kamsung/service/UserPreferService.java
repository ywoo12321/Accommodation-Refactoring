package refactor.kamsung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.Like;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;
import refactor.kamsung.domain.UserPrefer;
import refactor.kamsung.repository.UserPreferRepository;
import refactor.kamsung.repository.UserRepository;

import java.util.ArrayList;
import java.util.List;

import static java.lang.Math.sqrt;
import static java.util.stream.Collectors.toList;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class UserPreferService {

    private final UserPreferRepository userPreferRepository;
    private final UserRepository userRepository;
    private final LodgingService lodgingService;

    @Transactional
    public Long userPrefer(Long userId) {

        User user = userRepository.findOne(userId);
        UserPrefer userPrefer = UserPrefer.createUserPrefer(user);

        userPreferRepository.save(userPrefer);

        return userPrefer.getId();
    }

    //파라미터값을 유저아이디로할지 유저성향아이디로할지
    @Transactional
    public List<Integer> findWeights(Long userId) {  // 코사인 유사도 구하는데 사용

        UserPrefer userPrefer = userRepository.findOne(userId).getUserPrefer();

        List<Integer> weightList = new ArrayList<>();

        weightList.add(userPrefer.getWeight().getNaturals());
        weightList.add(userPrefer.getWeight().getModern());
        weightList.add(userPrefer.getWeight().getIndustrial());
        weightList.add(userPrefer.getWeight().getAsia());
        weightList.add(userId.intValue());

        return weightList;
    }

    @Transactional
    public List<List<Integer>> findAllWeightsButMe(User user) { // 코사인 유사도 구하는데 사용
        List<User> userList = userRepository.findAllButMe(user);

        List<List<Integer>> result = userList.stream()
                .map(u -> findWeights(u.getId()))
                .collect(toList());

        return result;
    }

    @Transactional
    public List<List<Double>> getUserCosineSimilarities(User user) {
        List<List<Integer>> otherWeights = findAllWeightsButMe(user);
        List<List<Double>> result = new ArrayList<>();
        List<Integer> myWeight = findWeights(user.getId());
        for (List<Integer> weight : otherWeights) {
            List<Double> cosineAndUserId = new ArrayList<>();
            Integer dotProduct = 0;
            double otherNorm = 0;
            double myNorm = 0;
            for (int i=0; i<4; i++) {
                dotProduct += weight.get(i) * myWeight.get(i);
                otherNorm += weight.get(i) * weight.get(i);
                myNorm += myWeight.get(i) * myWeight.get(i);
            }
            double under = Math.sqrt(otherNorm) * Math.sqrt(myNorm);
            double cosineSimilarity = (double) dotProduct / under;
            cosineAndUserId.add(cosineSimilarity);
            cosineAndUserId.add((double) weight.get(4));
            result.add((cosineAndUserId));
        }
        return result;
    }

    @Transactional
    public List<User> getTopThreeUser(User user) {
        List<List<Double>> cosineSimilarities = getUserCosineSimilarities(user);
        List<Double> cosineSimilarityList = new ArrayList<>();
        List<Long> userIdList = new ArrayList<>();
        List<User> result = new ArrayList<>();

        for (List<Double> cosineSimilarityAndUserId : cosineSimilarities) {
            cosineSimilarityList.add(cosineSimilarityAndUserId.get(0));
            long l = cosineSimilarityAndUserId.get(1).longValue();
            userIdList.add(l);
        }

        for (int i = 0; i < 3; i++) {
            int maxIndex = 0;
            for (int j = 1; j < cosineSimilarityList.size(); j++) {
                if (cosineSimilarityList.get(j) > cosineSimilarityList.get(maxIndex)) {
                    maxIndex = j;
                }
            }
            cosineSimilarityList.remove(maxIndex);
            result.add(userRepository.findOne(userIdList.remove(maxIndex)));
        }
        return result;
    }

    @Transactional
    public List<Integer> findLodgingWeights(Lodging lodging) {  // 코사인 유사도 구하는데 사용

        List<Integer> weightList = new ArrayList<>();

        weightList.add(lodging.getWeight().getNaturals());
        weightList.add(lodging.getWeight().getModern());
        weightList.add(lodging.getWeight().getIndustrial());
        weightList.add(lodging.getWeight().getAsia());
        weightList.add(lodging.getId().intValue());

        return weightList;
    }

    @Transactional
    public List<List<Integer>> findAllLodgingWeights() { // 코사인 유사도 구하는데 사용
        List<Lodging> lodgingList = lodgingService.findLodgings();

        List<List<Integer>> result = lodgingList.stream()
                .map(l -> findLodgingWeights(l))
                .collect(toList());

        return result;
    }

    @Transactional
    public List<List<Double>> getLodgingCosineSimilarities(User user) {
        List<List<Integer>> lodgingWeights = findAllLodgingWeights();
        List<List<Double>> result = new ArrayList<>();
        List<Integer> myWeight = findWeights(user.getId());
        for (List<Integer> weight : lodgingWeights) {
            List<Double> cosineAndUserId = new ArrayList<>();
            Integer dotProduct = 0;
            double otherNorm = 0;
            double myNorm = 0;
            for (int i=0; i<4; i++) {
                dotProduct += weight.get(i) * myWeight.get(i);
                otherNorm += weight.get(i) * weight.get(i);
                myNorm += myWeight.get(i) * myWeight.get(i);
            }
            double under = Math.sqrt(otherNorm) * Math.sqrt(myNorm);
            double cosineSimilarity = (double) dotProduct / under;
            cosineAndUserId.add(cosineSimilarity);
            cosineAndUserId.add((double) weight.get(4));
            result.add((cosineAndUserId));
        }
        return result;
    }

    @Transactional
    public List<Lodging> getTopTenLodging(User user) {
        List<List<Double>> cosineSimilarities = getLodgingCosineSimilarities(user);
        List<Double> cosineSimilarityList = new ArrayList<>();
        List<Long> lodgingIdList = new ArrayList<>();
        List<Lodging> result = new ArrayList<>();

        for (List<Double> cosineSimilarityAndLodgingId : cosineSimilarities) {
            cosineSimilarityList.add(cosineSimilarityAndLodgingId.get(0));
            long l = cosineSimilarityAndLodgingId.get(1).longValue();
            lodgingIdList.add(l);
        }

        for (int i = 0; i < 10; i++) {
            int maxIndex = 0;
            for (int j = 1; j < cosineSimilarityList.size(); j++) {
                if (cosineSimilarityList.get(j) > cosineSimilarityList.get(maxIndex)) {
                    maxIndex = j;
                }
            }
            cosineSimilarityList.remove(maxIndex);
            result.add(lodgingService.findOne(lodgingIdList.remove(maxIndex)));
        }
        return result;
    }
}
