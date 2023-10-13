package com.example.application.services;

import com.example.application.entity.Survey;
import com.example.application.repository.SurveyRepository;
import dev.hilla.BrowserCallable;
import dev.hilla.crud.ListRepositoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.vaadin.flow.server.auth.AnonymousAllowed;

@BrowserCallable
@AnonymousAllowed
@Service
public class SurveyService extends ListRepositoryService<Survey, Long, SurveyRepository> {
    private SurveyRepository repository;

    @Autowired
    public SurveyService(final SurveyRepository repository) {
        super(repository);
        this.repository = repository;
    }

    public void createSurvey(final Survey survey) {
        repository.save(survey);
    }
}
