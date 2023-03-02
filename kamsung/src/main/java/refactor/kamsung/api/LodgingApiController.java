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
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
public class LodgingApiController {

    private final LodgingRepository lodgingRepository;
    private final LodgingService lodgingService;
    private final LikeService likeService;


//    @GetMapping("api/lodging") // 메인페이지용 태그별 숙소리스트 (요청필요)
//    public List<BasicLodgingDto> getLodgingsByTag(@RequestBody @Valid LodgingTagRequest request) {
//        List<Lodging> lodgings = lodgingService.findLodgingsByTag(request.getTag());
//        List<BasicLodgingDto> result = lodgings.stream()
//                .map(l -> new BasicLodgingDto(l))
//                .collect(Collectors.toList());
//        return result;
//    }

    @GetMapping("api/lodging/mainpage") // 메인페이지용 태그별 숙소리스트 (요청필요 X)
    public MainPageLodgingDto lodgingForMainPage() {
        List<List<BasicLodgingDto>> lodgings = new ArrayList<>();
        List<Lodging> natural = lodgingService.findLodgingsByTag("natural");
        List<BasicLodgingDto> naturals = natural.stream()
                .map(l -> new BasicLodgingDto(l))
                .collect(Collectors.toList());
        List<Lodging> modern = lodgingService.findLodgingsByTag("modern");
        List<BasicLodgingDto> moderns = modern.stream()
                .map(l -> new BasicLodgingDto(l))
                .collect(Collectors.toList());
        List<Lodging> asia = lodgingService.findLodgingsByTag("asia");
        List<BasicLodgingDto> asias = asia.stream()
                .map(l -> new BasicLodgingDto(l))
                .collect(Collectors.toList());
        List<Lodging> industrial = lodgingService.findLodgingsByTag("industrial");
        List<BasicLodgingDto> industrials = industrial.stream()
                .map(l -> new BasicLodgingDto(l))
                .collect(Collectors.toList());
        lodgings.add(naturals);
        lodgings.add(moderns);
        lodgings.add(asias);
        lodgings.add(industrials);
        MainPageLodgingDto result = new MainPageLodgingDto(lodgings);
        return result;
    }

//    @GetMapping("api/lodging/{lodgingId}/{userId}") // 숙소 상세페이지(회원용) (요청필요)
//    public LodgingDetailDto userLodgingDetail(@PathVariable("lodgingId") Long lodgingId,
//                                              @PathVariable("userId") Long userId,
//                                              @RequestBody @Valid UserIdRequest request) {
//        Lodging lodging = lodgingRepository.findOne(lodgingId);
//        LodgingDetailDto result = new LodgingDetailDto(lodging);
//        LikeStatus likeStatus = likeService.getLikeByUserLodging(request.getId(), lodgingId).getLikeStatus();
//        result.setLikeStatus(likeStatus);
//        return result;
//    }

    @GetMapping("api/lodging/{lodgingId}/{userId}") // 숙소 상세페이지(회원용) (요청필요X)
    public LodgingDetailDto userLodgingDetail(@PathVariable("lodgingId") Long lodgingId,
                                              @PathVariable("userId") Long userId) {
        Lodging lodging = lodgingRepository.findOne(lodgingId);
        LodgingDetailDto result = new LodgingDetailDto(lodging);
        LikeStatus likeStatus = likeService.getLikeByUserLodging(userId, lodgingId).getLikeStatus();
        result.setLikeStatus(likeStatus);
        return result;
    }

    @GetMapping("api/lodging/{lodgingId}") // 숙소 상세페이지(비회원용)
    public LodgingDetailDto nonUserLodgingDetail(@PathVariable("lodgingId") Long lodgingId) {
        Lodging lodging = lodgingRepository.findOne(lodgingId);
        LodgingDetailDto result = new LodgingDetailDto(lodging);
        LikeStatus likeStatus = LikeStatus.CANCEL;
        result.setLikeStatus(likeStatus);
        return result;
    }

    @GetMapping("api/search") // 검색
    public List<BasicLodgingDto> searchLodging(@RequestBody @Valid SearchRequest request) {
        String keyword = request.getKeyword();
        List<Lodging> lodgings = lodgingService.findOneByName(keyword);
        if (lodgings.size() == 0) {
            List<String> keywordList = Arrays.stream(keyword.split(" ")).collect(Collectors.toList());
            if (keywordList.size() == 2) {
                lodgings = lodgingService.findBySecondAddress(keywordList.get(1));
            }
            else {
                lodgings = lodgingService.findByFirstAddress(keywordList.get(0));
                if (lodgings.size() == 0) {
                    lodgings = lodgingService.findBySecondAddress(keywordList.get(0));
                }
            }
            List<BasicLodgingDto> result = lodgings.stream()
                    .map(l -> new BasicLodgingDto(l))
                    .collect(Collectors.toList());
            return result;
        }
        else {
            List<BasicLodgingDto> result = lodgings.stream()
                    .map(l -> new BasicLodgingDto(l))
                    .collect(Collectors.toList());
            return result;
        }

    }

    @Data // 태그 요청 dto
    static class SearchRequest {
        private String keyword;
    }
    @Data // 태그 요청 dto
    static class LodgingTagRequest {
        private String tag;
    }
    @Data // 태그별 숙소 이미지, 이름 응답 dto
    static class BasicLodgingDto {
        private String lodgingMainImg;
        private String lodgingName;
        private Long lodgingId;
        public BasicLodgingDto(Lodging lodging) {
            lodgingMainImg = lodging.getMainImg();
            lodgingName = lodging.getName();
            lodgingId = lodging.getId();
        }
    }

    @Data // 태그별 숙소 이미지, 이름 응답 dto
    static class MainPageLodgingDto {
        private List<BasicLodgingDto> natural;
        private List<BasicLodgingDto> modern;
        private List<BasicLodgingDto> asia;
        private List<BasicLodgingDto> industrial;
        public MainPageLodgingDto(List<List<BasicLodgingDto>> lodgings) {
            natural = lodgings.get(0);
            modern = lodgings.get(1);
            asia = lodgings.get(2);
            industrial = lodgings.get(3);
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
