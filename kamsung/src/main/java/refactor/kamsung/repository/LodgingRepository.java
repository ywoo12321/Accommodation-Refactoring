package refactor.kamsung.repository;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.domain.User;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class LodgingRepository {

    private final EntityManager em;

    public void save(Lodging lodging) {
        em.persist(lodging);
    }

    public Lodging findOne(Long id) {
        return em.find(Lodging.class, id);
    }

    public List<Lodging> findAll() {
        return em.createQuery("select l from Lodging l", Lodging.class)
                .getResultList();
    }

    public List<Lodging> findByTag(String main) {
        return em.createQuery("select l from Lodging l where l.weight.main = :main",
                        Lodging.class)
                .setParameter("main", main)
                .getResultList();
    }
}
