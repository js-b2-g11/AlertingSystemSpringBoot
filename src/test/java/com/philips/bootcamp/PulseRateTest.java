/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import com.philips.bootcamp.service.PulseRate;

public class PulseRateTest {
  PulseRate pulseRate = new PulseRate();;
  @Test
  public void pulseRateValue39_critical() {
    final boolean actual = pulseRate.checkRange(39);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue40_critical() {
    final boolean actual = pulseRate.checkRange(40);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue41_notCritical() {
    final boolean actual = pulseRate.checkRange(41);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue59_notCritical() {
    final boolean actual = pulseRate.checkRange(59);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue60_notCritical() {
    final boolean actual = pulseRate.checkRange(60);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue61_notCritical() {
    final boolean actual = pulseRate.checkRange(61);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue99_notCritical() {
    final boolean actual = pulseRate.checkRange(99);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue100_notCritical() {
    final boolean actual = pulseRate.checkRange(100);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue101_notCritical() {
    final boolean actual = pulseRate.checkRange(101);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue219_notCritical() {
    final boolean actual = pulseRate.checkRange(219);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue220_Critical() {
    final boolean actual = pulseRate.checkRange(220);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue221_Critical() {
    final boolean actual = pulseRate.checkRange(221);
    assertEquals(true, actual);
  }

  @Test
  public void alertMessageValue39_BelowHealthyHeartRate() {
    final String actual = pulseRate.alertMessage(39);
    assertEquals("Critical PulseRate value: Below healthy resting heart rate.", actual);
  }

  @Test
  public void alertMessageValue40_noAlertMessage() {
    final String actual = pulseRate.alertMessage(40);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue41_noAlertMessage() {
    final String actual = pulseRate.alertMessage(41);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue99_noAlertMessage() {
    final String actual = pulseRate.alertMessage(99);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue100_noAlertMessage() {
    final String actual = pulseRate.alertMessage(100);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue101_AcceptableHeartRatIfDuringExercise_NotAcceptableIfRestingHeartRate() {
    final String actual = pulseRate.alertMessage(101);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue219_AcceptableHeartRatIfDuringExercise_NotAcceptableIfRestingHeartRate() {
    final String actual = pulseRate.alertMessage(219);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue220_AcceptableHeartRatIfDuringExercise_NotAcceptableIfRestingHeartRate() {
    final String actual = pulseRate.alertMessage(220);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue221_AbnormallyHighHeartRate() {
    final String actual = pulseRate.alertMessage(221);
    assertEquals("Critical PulseRate level: Abnormally high heart rate.", actual);
  }
}