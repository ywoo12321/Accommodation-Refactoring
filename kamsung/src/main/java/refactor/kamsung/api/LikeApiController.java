package refactor.kamsung.api;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import refactor.kamsung.domain.Like;
import refactor.kamsung.domain.LikeStatus;
import refactor.kamsung.repository.LikeRepository;
import refactor.kamsung.service.LikeService;

import javax.validation.Valid;
import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class LikeApiController {

    private final LikeRepository likeRepository;
    private final LikeService likeService;

    // 좋아요 클릭시 추가인지 취소인지 따로 or 같이?
    @PostMapping ("/api/like")
    public CreateLikeResponse clickLike(@RequestBody @Valid CreateLikeRequest request) {
        Like newLike;
        Long userId = request.getUserId();
        Long lodgingId = request.getLodgingId();
        LikeStatus likeStatus = request.getLikeStatus();
        if (likeStatus == LikeStatus.LIKE) {
            Like like = likeService.getLikeByUserLodging(userId, lodgingId);
            likeService.cancelLike(like.getId());
            newLike = like;
        }
        else {
            Long likeId = likeService.like(userId, lodgingId);
            newLike = likeRepository.findOne(likeId);
        }

        return new CreateLikeResponse(newLike);
    }

    @Data // 좋아요 클릭시 요청 DTO
    static class CreateLikeRequest {
        private Long userId;
        private Long lodgingId;
        private LikeStatus likeStatus;
    }

    @Data // 좋아요 클릭시 응답 DTO
    static class CreateLikeResponse {
        private LikeStatus likeStatus;
        private LocalDateTime likeDate;
        private String nickname;
        private String lodgingName;

        public CreateLikeResponse(Like like) {
            likeStatus = like.getLikeStatus();
            likeDate = like.getLikeDate();
            nickname = like.getUser().getNickname();
            lodgingName = like.getLodging().getName();
        }
    }

    @Data // 좋아요 조회용 DTO
    static class LikeDto {
        private Long likeId;
        private String nickname;
        private String lodgingName;
        private LocalDateTime likeDate;
        private LikeStatus likeStatus;

        public LikeDto(Like like) {
            likeId = like.getId();
            nickname = like.getUser().getNickname();
            lodgingName = like.getLodging().getName();
            likeDate = like.getLikeDate();
            likeStatus = like.getLikeStatus();
        }

    }
}
