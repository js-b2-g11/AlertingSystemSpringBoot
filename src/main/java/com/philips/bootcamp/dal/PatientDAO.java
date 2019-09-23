/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.dal;

import java.util.List;
import com.philips.bootcamp.domain.Patient;

public interface PatientDAO {
  Patient add(Patient patient);

  Patient findById(String patientId);

  List<Patient> findAll();

  void deleteById(String patientId);

  int findBedId(String patientId);

  void alarmSwitch(String vital, boolean isCritical, String patientId);

  String findPatientId(int bedId);
}
