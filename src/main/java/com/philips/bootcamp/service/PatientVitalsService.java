/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp.service;

public interface PatientVitalsService {
  boolean isCritical(float value);
  String alertMessage(float value);
}