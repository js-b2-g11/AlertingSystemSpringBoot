/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

import com.philips.bootcamp.utils.Values;

public class PulseRate implements PatientVitalsService {

  @Override
  public boolean checkRange(float value) {
    boolean isCritical = false;
    if (value < Values.MIN_PULSE_RATE || value > Values.MAX_PULSE_RATE) {
      isCritical = true;
    }
    return isCritical;
  }

  @Override
  public String alertMessage(float value) {
    String alertMessage = "";
    if (value < Values.MIN_PULSE_RATE) {
      alertMessage  = "Critical PulseRate value: Below healthy resting heart rate.";
    } else if (value > Values.CRITICAL_PULSE_RATE && value <= Values.MAX_PULSE_RATE) {
      alertMessage = "Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.";
    } else if (value > Values.MAX_PULSE_RATE) {
      alertMessage = "Critical PulseRate level: Abnormally high heart rate.";
    }
    return alertMessage;
  }
}