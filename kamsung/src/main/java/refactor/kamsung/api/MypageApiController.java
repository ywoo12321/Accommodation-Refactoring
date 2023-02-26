package refactor.kamsung.api;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import refactor.kamsung.domain.Like;
import refactor.kamsung.domain.LikeStatus;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;
import refactor.kamsung.service.LikeService;
import refactor.kamsung.service.LodgingService;
import refactor.kamsung.service.UserPreferService;
import refactor.kamsung.service.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class MypageApiController {

    private final UserPreferService userPreferService;
    private final LodgingService lodgingService;
    private final LikeService likeService;
    private final UserService userService;

    @Data
    @AllArgsConstructor
    static class MypageLikeListResponse {
        private String lodgingImg;
        private String lodgingName;

        public MypageLikeListResponse(Like like) {
            lodgingImg = like.getLodging().getMainImg();
            lodgingName = like.getLodging().getName();
        }
    }

    @GetMapping("/api/mypage/like/{id}") // 찜리스트
    public List<MypageLikeListResponse> likeList(@PathVariable("id") Long userId) {
        User user = userService.findOne(userId);
        List<Like> likes = user.getLikes();
        List<Like> likeLikes = new ArrayList<>();
        for (Like like: likes) {
            if (like.getLikeStatus() == LikeStatus.LIKE) {
                likeLikes.add(like);
            }
        }

        List<MypageLikeListResponse> result = likeLikes.stream()
                .map(l -> new MypageLikeListResponse(l))
                .collect(Collectors.toList());
        return result;
    }
}
