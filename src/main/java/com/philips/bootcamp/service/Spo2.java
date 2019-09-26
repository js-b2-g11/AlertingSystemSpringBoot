/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

import com.philips.bootcamp.utils.Values;

public class Spo2 implements PatientVitalsService {

  @Override
  public boolean isCritical(float value) {
    boolean isCritical = false;
    if (value < Values.MIN_SPO2 || (value >= Values.MIN_SPO2 && value <= Values.MAX_SPO2)) {
      isCritical = true;
    }
    return isCritical;
  }

  @Override
  public String alertMessage(float value) {
    String alertMessage = "";
    if (value >= Values.MIN_SPO2 && value <= Values.MAX_SPO2) {
      alertMessage = "Critical Spo2 reading: Hypoxemia. Unhealthy and unsafe level.";
    } else if (value < Values.MIN_SPO2) {
      alertMessage = "Critical Spo2 reading: Extreme lack of oxygen, ischemic diseases may occur.";
    }
    return alertMessage;
  }
}
