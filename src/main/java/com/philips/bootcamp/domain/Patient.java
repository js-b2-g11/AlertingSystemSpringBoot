/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Transient;

@Entity
public class Patient {
  @Id
  @Column(name = "patient_id")
  private String patientId;
  @Column
  private String name;
  @Column
  private int age;
  @Column
  private String gender;
  @Column(name = "temperature_alert")
  private boolean temperatureAlert;
  @Column(name = "spo2_alert")
  private boolean spo2Alert;
  @Column(name = "pulserate_alert")
  private boolean pulseRateAlert;
  @Column(name = "bed_id")
  private int bedId;
  @Transient
  private float temperature;
  @Transient
  private float spo2;
  @Transient
  private float pulseRate;

  public Patient() {

  }

  public Patient(String patientId, String name, int age, String gender) {
    super();
    this.patientId = patientId;
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  public String getPatientId() {
    return patientId;
  }

  public void setPatientId(String patientId) {
    this.patientId = patientId;
  }

  public float getTemperatureVal() {
    return temperature;
  }

  public float getSpo2Val() {
    return spo2;
  }

  public float getPulseRateVal() {
    return pulseRate;
  }

  public void setTemperature(float temperatureVal) {
    this.temperature = temperatureVal;
  }

  public void setSpo2(float spo2Val) {
    this.spo2 = spo2Val;
  }

  public void setPulseRate(float pulseRateVal) {
    this.pulseRate = pulseRateVal;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public int getBedId() {
    return bedId;
  }

  public void setBedId(int bedId) {
    this.bedId = bedId;
  }

  public boolean isTemperatureAlert() {
    return temperatureAlert;
  }

  public void setTemperatureAlert(boolean temperatureAlert) {
    this.temperatureAlert = temperatureAlert;
  }

  public boolean isSpo2Alert() {
    return spo2Alert;
  }

  public void setSpo2Alert(boolean spo2Alert) {
    this.spo2Alert = spo2Alert;
  }

  public boolean isPulseRateAlert() {
    return pulseRateAlert;
  }

  public void setPulseRateAlert(boolean pulseRateAlert) {
    this.pulseRateAlert = pulseRateAlert;
  }

  @Override
  public String toString() {
    return "Patient [patientId=" + patientId + ", name=" + name + ", age=" + age + ", gender="
        + gender + ", temperature=" + temperature + ", spo2=" + spo2 + ", pulseRate=" + pulseRate
        + "]";
  }
}
