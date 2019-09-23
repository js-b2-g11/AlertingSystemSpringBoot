/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.dal;

import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.philips.bootcamp.domain.Patient;
import com.philips.bootcamp.utils.Values;

@Transactional
@Repository
public class PatientDAOClass implements PatientDAO{
  @PersistenceContext
  EntityManager em;

  @Override
  public Patient add(Patient patient) {
    em.persist(patient);
    return patient;
  }

  @Override
  public Patient findById(String patientId) {
    return em.find(Patient.class, patientId);
  }

  @Override
  public List<Patient> findAll() {
    return em.createQuery("select p from Patient p").getResultList();
  }

  @Override
  public void deleteById(String patientId) {
    em.createQuery("delete from Patient p where p.id = :idParam").setParameter(Values.PATIENT_ID, patientId).executeUpdate();
  }

  @Override
  public int findBedId(String patientId) {    
    return (int) em.createQuery("select p.bedId from Patient p where p.id = :idParam").setParameter(Values.PATIENT_ID, patientId).getSingleResult();
  }
  
  public String findPatientId(int bedId) {
    return (String) em.createQuery("select p.id from Patient p where p.bedId =:bedIdParam").setParameter(Values.BED_ID, bedId).getSingleResult();   
  }

  @Override
  public void alarmSwitch(String vital, boolean isCritical, String patientId) {
    if(vital.equals("temperature")) {
      em.createQuery("update Patient p set p.temperatureAlert = :isCritical where p.id = :idParam").setParameter(Values.PATIENT_ID, patientId).setParameter(Values.IS_CRITICAL, isCritical).executeUpdate();
    } else if(vital.equals("spo2")) {
      em.createQuery("update Patient p set p.spo2Alert = :isCritical where p.id = :idParam").setParameter(Values.PATIENT_ID, patientId).setParameter(Values.IS_CRITICAL, isCritical).executeUpdate();
    } else if(vital.equals("pulseRate")) {
      em.createQuery("update Patient p set p.pulseRateAlert = :isCritical where p.id = :idParam").setParameter(Values.PATIENT_ID, patientId).setParameter(Values.IS_CRITICAL, isCritical).executeUpdate();
    }
  }
}
