/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

import java.util.List;
import com.philips.bootcamp.domain.Patient;

public interface PatientService {
  String addNewPatient(Patient toBeAdded);

  Patient findById(String patientId);

  List<Patient> findAll();

  int findBedId(String patientId);

  void alarmSwitch(String vital, boolean isCritical, String patientId);

  void dischargePatient(String patientId);

  String findPatientId(int bedId);

}
