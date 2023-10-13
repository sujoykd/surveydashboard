package com.example.application.repository;

import com.example.application.entity.Survey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SurveyRepository extends JpaRepository<Survey, Long> , JpaSpecificationExecutor<Survey> {
}
