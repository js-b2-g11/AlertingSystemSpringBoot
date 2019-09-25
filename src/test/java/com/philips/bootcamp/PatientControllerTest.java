/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp;

import static org.junit.Assert.assertEquals;
import java.util.List;
import org.junit.Test;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.philips.bootcamp.domain.Patient;
import com.philips.bootcamp.service.PatientService;
import com.philips.bootcamp.web.PatientController;

public class PatientControllerTest {

  @Test
  public void dischargeNonExistingPatient() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient0")).thenReturn(null);
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.dischargeAPatient("patient0");
    assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
  }

  @Test
  public void dischargeExistingPatient() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient2")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.dischargeAPatient("patient2");
    assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
  }

  @Test
  public void addNewPatient() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    final Patient p = new Patient("101","hello",12,"male");
    Mockito.when(ps.addNewPatient(p)).thenReturn(null);
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.addAPatient(p);
    assertEquals(HttpStatus.CREATED, response.getStatusCode());
  }

  @Test
  public void monitorVitalsForNonExistingPatient() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient1")).thenReturn(null);
    pc.setService(ps);
    final ResponseEntity<List<String>> response = pc.monitorVitals("patient1", Mockito.mock(Patient.class));
    assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
  }

  @Test
  public void monitorTemperature() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient1")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final Patient patient = new Patient();
    patient.setTemperature(104.0f);
    patient.setSpo2(100.f);
    patient.setPulseRate(45.0f);
    final ResponseEntity<List<String>> response = pc.monitorVitals("patient1", patient);
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Test
  public void monitorspo2() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient1")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final Patient patient = new Patient();
    patient.setTemperature(97.0f);
    patient.setSpo2(30.f);
    patient.setPulseRate(45.0f);
    final ResponseEntity<List<String>> response = pc.monitorVitals("patient1", patient);
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Test
  public void monitorPulseRate() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient1")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final Patient patient = new Patient();
    patient.setTemperature(97.0f);
    patient.setSpo2(100.f);
    patient.setPulseRate(20.0f);
    final ResponseEntity<List<String>> response = pc.monitorVitals("patient1", patient);
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Test
  public void turnOffAlarmForNonExistingPatient() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient0")).thenReturn(null);
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.turnOffAlarm("patient0","temperature");
    assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
  }

  @Test
  public void turnOffTemperatureAlarm() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient2")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.turnOffAlarm("patient2","temperature");
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Test
  public void turnOffSpo2Alarm() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient2")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.turnOffAlarm("patient2","spo2");
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }

  @Test
  public void turnOffPulseRateAlarm() {
    final PatientController pc = new PatientController();
    final PatientService ps = Mockito.mock(PatientService.class);
    Mockito.when(ps.findById("patient2")).thenReturn(Mockito.mock(Patient.class));
    pc.setService(ps);
    final ResponseEntity<Patient> response = pc.turnOffAlarm("patient2","pulseRate");
    assertEquals(HttpStatus.OK, response.getStatusCode());
  }
}
