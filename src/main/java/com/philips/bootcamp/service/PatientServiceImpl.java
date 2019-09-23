/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.philips.bootcamp.dal.PatientDAO;
import com.philips.bootcamp.domain.Patient;

@Service
public class PatientServiceImpl implements PatientService {
  @Autowired
  PatientDAO patientDAO;

  @Override
  public String addNewPatient(Patient toBeAdded) {
    final Patient added = patientDAO.add(toBeAdded);
    return added.getPatientId();
  }

  @Override
  public Patient findById(String patientId) {
    return patientDAO.findById(patientId);
  }

  @Override
  public List<Patient> findAll() {
    return patientDAO.findAll();
  }

  @Override
  public int findBedId(String patientId) {
    return patientDAO.findBedId(patientId);
  }

  @Override
  public void alarmSwitch(String vital, boolean isCritical, String patientId) {
    patientDAO.alarmSwitch(vital, isCritical, patientId);
  }

  @Override
  public void dischargePatient(String patientId) {
    patientDAO.deleteById(patientId);
  }

  @Override
  public String findPatientId(int bedId) {
    return patientDAO.findPatientId(bedId);
  }

}
