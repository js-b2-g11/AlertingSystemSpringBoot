/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import com.philips.bootcamp.service.PulseRate;

public class PulseRateTest {
  PulseRate pulseRate = new PulseRate();
  @Test
  public void pulseRateValue39() {
    final boolean actual = pulseRate.checkRange(39);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue40() {
    final boolean actual = pulseRate.checkRange(40);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue41() {
    final boolean actual = pulseRate.checkRange(41);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue59() {
    final boolean actual = pulseRate.checkRange(59);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue60() {
    final boolean actual = pulseRate.checkRange(60);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue61() {
    final boolean actual = pulseRate.checkRange(61);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue99() {
    final boolean actual = pulseRate.checkRange(99);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue100() {
    final boolean actual = pulseRate.checkRange(100);
    assertEquals(false, actual);
  }

  @Test
  public void pulseRateValue101() {
    final boolean actual = pulseRate.checkRange(101);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue219() {
    final boolean actual = pulseRate.checkRange(219);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue220() {
    final boolean actual = pulseRate.checkRange(220);
    assertEquals(true, actual);
  }

  @Test
  public void pulseRateValue221() {
    final boolean actual = pulseRate.checkRange(221);
    assertEquals(true, actual);
  }

  @Test
  public void alertMessageValue39() {
    final String actual = pulseRate.alertMessage(39);
    assertEquals("Critical PulseRate value: Below healthy resting heart rate.", actual);
  }

  @Test
  public void alertMessageValue40() {
    final String actual = pulseRate.alertMessage(40);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue41() {
    final String actual = pulseRate.alertMessage(41);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue99() {
    final String actual = pulseRate.alertMessage(99);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue100() {
    final String actual = pulseRate.alertMessage(100);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue101() {
    final String actual = pulseRate.alertMessage(101);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue219() {
    final String actual = pulseRate.alertMessage(219);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue220() {
    final String actual = pulseRate.alertMessage(220);
    assertEquals("Critical PulseRate value: Acceptable if measured during exercise. Not acceptable if resting heartrate.", actual);
  }

  @Test
  public void alertMessageValue221() {
    final String actual = pulseRate.alertMessage(221);
    assertEquals("Critical PulseRate level: Abnormally high heart rate.", actual);
  }
}