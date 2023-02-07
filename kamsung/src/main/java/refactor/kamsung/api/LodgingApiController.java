package refactor.kamsung.api;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.convert.DataSizeUnit;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import refactor.kamsung.domain.Address;
import refactor.kamsung.domain.LikeStatus;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;
import refactor.kamsung.repository.LodgingRepository;
import refactor.kamsung.repository.UserRepository;
import refactor.kamsung.service.LikeService;
import refactor.kamsung.service.LodgingService;
import refactor.kamsung.service.UserService;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class LodgingApiController {

    private final LodgingRepository lodgingRepository;
    private final LodgingService lodgingService;
    private final LikeService likeService;

    @GetMapping("api/lodging/{tag}") // 1.
    public List<TagLodgingDto> getLodgingsByTag(@PathVariable("tag") String tag) {
        List<Lodging> lodgings = lodgingService.findLodgingsByTag(tag);
        List<TagLodgingDto> result = lodgings.stream()
                .map(l -> new TagLodgingDto(l))
                .collect(Collectors.toList());
        return result;
    }

    @GetMapping("api/lodging/") // 2.
    public List<TagLodgingDto> getLodgingsByTag(@RequestBody @Valid LodgingTagRequest request) {
        List<Lodging> lodgings = lodgingService.findLodgingsByTag(request.getTag());
        List<TagLodgingDto> result = lodgings.stream()
                .map(l -> new TagLodgingDto(l))
                .collect(Collectors.toList());
        return result;
    }

    @GetMapping("api/lodging/{lodgingId}") // 숙소 상세페이지(회원용)
    public LodgingDetailDto userLodgingDetail(@PathVariable("lodgingId") Long lodgingId,
                                              @RequestBody @Valid UserIdRequest request) {
        Lodging lodging = lodgingRepository.findOne(lodgingId);
        LodgingDetailDto result = new LodgingDetailDto(lodging);
        LikeStatus likeStatus = likeService.getLikeByUserLodging(lodgingId, request.getId()).getLikeStatus();
        result.setLikeStatus(likeStatus);
        return result;
    }

    @GetMapping("api/lodging/{lodgingId}") // 숙소 상세페이지(회원용)
    public LodgingDetailDto nonUserLodgingDetail(@PathVariable("lodgingId") Long lodgingId) {
        Lodging lodging = lodgingRepository.findOne(lodgingId);
        LodgingDetailDto result = new LodgingDetailDto(lodging);
        LikeStatus likeStatus = LikeStatus.CANCEL;
        result.setLikeStatus(likeStatus);
        return result;
    }

    @Data // 태그 요청 dto
    static class LodgingTagRequest {
        private String tag;
    }
    @Data // 태그별 숙소 이미지, 이름 응답 dto
    static class TagLodgingDto {
        private String lodgingMainImg;
        private String lodgingName;

        public TagLodgingDto(Lodging lodging) {
            lodgingMainImg = lodging.getMainImg();
            lodgingName = lodging.getName();
        }
    }

    @Data
    static class LodgingDetailDto {
        private String lodgingName;
        private List<String> lodgingImgs;
        private Address address;
        private String tag;
        private LikeStatus likeStatus;

        public LodgingDetailDto(Lodging lodging) {
            lodgingName = lodging.getName();
            lodgingImgs = new ArrayList<>();
            lodgingImgs.add(lodging.getSubImg1());
            lodgingImgs.add(lodging.getSubImg2());
            lodgingImgs.add(lodging.getSubImg3());
            address = lodging.getAddress();
            tag = lodging.getWeight().getMain();
        }
    }

    @Data // 유저아이디 요청 dto
    static class UserIdRequest {
        private Long id;
    }
}
