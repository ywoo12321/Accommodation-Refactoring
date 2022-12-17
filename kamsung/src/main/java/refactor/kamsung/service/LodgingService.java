package refactor.kamsung.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import refactor.kamsung.domain.Lodging;
import refactor.kamsung.repository.LodgingRepository;

import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class LodgingService {

    private final LodgingRepository lodgingRepository;

    public List<Lodging> findLodgings() {
        return lodgingRepository.findAll();
    } //유저 검색

    public Lodging findOne(Long id) {
        return lodgingRepository.findOne(id);
    } //유저 검색

    public List<Lodging> findLodgingsByTag(String main) {
        return lodgingRepository.findByTag(main);
    }
}
