package refactor.kamsung.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import refactor.kamsung.domain.UserPrefer;

import javax.persistence.EntityManager;

@Repository
@RequiredArgsConstructor
public class UserPreferRepository {

    private final EntityManager em;

    public void save(UserPrefer userPrefer) {
        em.persist(userPrefer);
    }

    public UserPrefer findOne(Long id) {
        return em.find(UserPrefer.class, id);
    }
}
