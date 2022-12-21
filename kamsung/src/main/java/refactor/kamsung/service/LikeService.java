package refactor.kamsung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.Like;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;
import refactor.kamsung.domain.UserPrefer;
import refactor.kamsung.repository.LikeRepository;
import refactor.kamsung.repository.LodgingRepository;
import refactor.kamsung.repository.UserPreferRepository;
import refactor.kamsung.repository.UserRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LikeService {

    private final UserRepository userRepository;
    private final LodgingRepository lodgingRepository;
    private final LikeRepository likeRepository;

    private final UserPreferRepository userPreferRepository;

    private final UserPreferService userPreferService;

    @Transactional
    public void updateUserPrefer(User user) {
        if (user.getUserPrefer() == null) {
            userPreferService.UserPrefer(user.getId());
        } else {
            UserPrefer userPrefer = userPreferRepository.findOne(user.getUserPrefer().getId());
            userPrefer.makeUserPrefer(user);
            user.setUserPrefer(userPrefer);
        }
    }

    //좋아요
    @Transactional
    public Long like(Long userId, Long lodgingId) {

        User user = userRepository.findOne(userId);
        Lodging lodging = lodgingRepository.findOne(lodgingId);

        Like like = Like.createLike(user, lodging);
        updateUserPrefer(user);

        likeRepository.save(like);

        return like.getId();
    }

    //좋아요 취소
    @Transactional
    public void cancelLike(Long likeId) {

        Like like = likeRepository.findOne(likeId);

        like.cancel(); // 취소로직좀더공부

        User user = userRepository.findOne(like.getUser().getId());
        user.getLikes().remove(like);
        Lodging lodging = lodgingRepository.findOne(like.getLodging().getId());
        lodging.getLikes().remove(like);  // 로직 맞는지 테스트, like 엔티티에 넣을지
        updateUserPrefer(user);

    }
}
