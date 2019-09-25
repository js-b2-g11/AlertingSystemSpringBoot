/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

import com.philips.bootcamp.utils.Values;

public class Temperature implements PatientVitalsService {

  @Override
  public boolean checkRange(float value) {
    boolean isCritical = false;
    if (value >= Values.MIN_TEMP) {
      isCritical = true;
    }
    return isCritical;
  }

  @Override
  public String alertMessage(float value) {
    String alertMessage = "";
    if (value > Values.MIN_TEMP && value < Values.CRITICAL_TEMP) {
      alertMessage = "Critical Temperature value: Fever";
    } else if (value >= Values.CRITICAL_TEMP) {
      alertMessage = "Critical Temperature value: Hyperpyrexia";
    }
    return alertMessage;
  }
}
