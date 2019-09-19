/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.web;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.philips.bootcamp.domain.Patient;
import com.philips.bootcamp.service.PatientService;
import com.philips.bootcamp.service.PulseRate;
import com.philips.bootcamp.service.Spo2;
import com.philips.bootcamp.service.Temperature;
import com.philips.bootcamp.utils.Values;

@RestController
public class PatientController {
  PatientService service;

  @Autowired
  public void setService(PatientService service) {
    this.service = service;
  }

  @PostMapping(value = "/api/patient")
  public ResponseEntity<Patient> addAPatient(@RequestBody Patient toBeAdded) {
    try {
      final String id = service.addNewPatient(toBeAdded);
      final HttpHeaders headers = new HttpHeaders();
      headers.setLocation(URI.create("/api/patient/" + id));
      return new ResponseEntity<>(headers, HttpStatus.CREATED);
    } catch (final IllegalArgumentException e) {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

  @GetMapping(value = "/api/patient/bed/{patientId}")
  public int findPatientBed(@PathVariable("patientId") String patientId) {
    return service.findBedId(patientId);
  }

  @GetMapping(value = "/api/patient")
  public List<Patient> displayRecords() {
    return service.findAll();
  }

  @DeleteMapping(value = "/api/patient/{patientId}")
  public ResponseEntity<Patient> dischargeAPatient(@PathVariable("patientId") String patientId) {
    final Patient patient = service.findById(patientId);
    if (patient != null) {
      service.dischargePatient(patientId);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping(value = "/api/patient/{patientId}/vitals")
  public ResponseEntity<List<String>> monitorVitals(@PathVariable("patientId") String patientId,
      @RequestBody Patient Vitals) {
    final Temperature temperatureObj = new Temperature();
    final Spo2 spo2Obj = new Spo2();
    final PulseRate pulseRateObj = new PulseRate();
    final Patient patient = service.findById(patientId);
    final List<String> alerts = new ArrayList<>();
    if (patient != null) {
      if (temperatureObj.checkRange(Vitals.getTemperatureVal())) {
        service.alarmSwitch(Values.TEMPERATURE_PARAM, true, patientId);
        alerts.add(temperatureObj.alertMessage(Vitals.getTemperatureVal()));
      }
      if (spo2Obj.checkRange(Vitals.getSpo2Val())) {
        service.alarmSwitch(Values.SPO2PARAM, true, patientId);
        alerts.add(spo2Obj.alertMessage(Vitals.getSpo2Val()));
      }
      if (pulseRateObj.checkRange(Vitals.getPulseRateVal())) {
        service.alarmSwitch(Values.PULSERATEPARAM, true, patientId);
        alerts.add(pulseRateObj.alertMessage(Vitals.getPulseRateVal()));
      }
      return new ResponseEntity<>(alerts, HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
  }

  @PostMapping(value = "/api/patient/{patientId}/alarm/{vital}")
  public ResponseEntity<Patient> turnOffAlarm(@PathVariable String patientId,
      @PathVariable String vital) {
    final Patient patient = service.findById(patientId);
    if (patient != null) {
      if (vital.equals("temperature")) {
        service.alarmSwitch("temperature", false, patientId);
        return new ResponseEntity<>(HttpStatus.OK);
      } else if (vital.equals("spo2")) {
        service.alarmSwitch("spo2", false, patientId);
        return new ResponseEntity<>(HttpStatus.OK);
      } else if (vital.equals("pulseRate")) {
        service.alarmSwitch("pulseRate", false, patientId);
        return new ResponseEntity<>(HttpStatus.OK);
      }
    }
    return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
  }

}
