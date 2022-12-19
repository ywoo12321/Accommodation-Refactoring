package refactor.kamsung.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import refactor.kamsung.domain.Like;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class LikeRepository {

    private final EntityManager em;

    public void save(Like like) {
        em.persist(like);
    }

    public Like findOne(Long id) {
        return em.find(Like.class, id);
    }

//    public List<Like> findAll(LikeSearch likeSearch);
}
