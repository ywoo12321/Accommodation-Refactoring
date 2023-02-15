package refactor.kamsung.domain;

import org.junit.Test;
import org.junit.jupiter.api.Assertions;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;

public class UserPreferTest {

    private Weight createWeight(int natural, int modern, int industrial, int asia) {
        Weight weight = new Weight(natural, modern, industrial, asia);
        return weight;
    }

    private User createUser() {
        User user = new User();
        return user;
    }

    private Lodging createLodging() {
        Lodging lodging = new Lodging();
        return lodging;
    }

    private Like createLikeForTest(int natural, int modern, int industrial, int asia) {
        Lodging lodging = createLodging();
        User user = createUser();
        Weight weight = createWeight(natural, modern, industrial, asia);

        lodging.setWeight(weight);

        Like like = new Like();
        like.setUser(user);
        like.setLodging(lodging);

        return like;
    }

    @Test
    public void 회원_숙소_가중치합_테스트() throws Exception {

        //given
        User user = createUser();
        List<Like> userlikes = new ArrayList<>();
        Like like1 = createLikeForTest(1,2,3,4);
        Like like2 = createLikeForTest(7,4,2,6);
        Like like3 = createLikeForTest(15,23,53,32);
        Like like4 = createLikeForTest(1,2,2,1);

        //when
        userlikes.add(like1);
        userlikes.add(like2);
        userlikes.add(like3);
        userlikes.add(like4);
        user.setLikes(userlikes);
        UserPrefer userPrefer = UserPrefer.createUserPrefer(user);

        //then
        Assertions.assertEquals(userPrefer.getWeight().getNaturals(), 24);
        Assertions.assertEquals(userPrefer.getWeight().getModern(), 31);
        Assertions.assertEquals(userPrefer.getWeight().getIndustrial(), 60);
        Assertions.assertEquals(userPrefer.getWeight().getAsia(), 43);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getNaturals(), 24);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getModern(), 31);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getIndustrial(), 60);
        Assertions.assertEquals(user.getUserPrefer().getWeight().getAsia(), 43);
    }

    @Test
    public void 회원성향_태그() throws Exception {

        //given
        User user1 = createUser();
        User user2 = createUser();
        List<Like> userlikes1 = new ArrayList<>();
        List<Like> userlikes2 = new ArrayList<>();
        Like like1 = createLikeForTest(1,2,3,4);
        Like like2 = createLikeForTest(7,4,2,6);
        Like like3 = createLikeForTest(15,23,53,32);
        Like like4 = createLikeForTest(1,2,2,1);

        //when
        userlikes1.add(like1);
        userlikes1.add(like2);
        userlikes2.add(like3);
        userlikes2.add(like4);
        user1.setLikes(userlikes1);
        user2.setLikes(userlikes2);
        UserPrefer.createUserPrefer(user1);
        UserPrefer.createUserPrefer(user2);

        //then
        Assertions.assertEquals(user1.getUserPrefer().getWeight().getMain(), "asia");
        Assertions.assertEquals(user2.getUserPrefer().getWeight().getMain(), "industrial");
    }

}