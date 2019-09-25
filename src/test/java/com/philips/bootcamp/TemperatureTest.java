/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import com.philips.bootcamp.service.Temperature;

public class TemperatureTest {
  Temperature temperature = new Temperature();
  @Test
  public void temperatureValue96_notCritical() {
    final boolean actual = temperature.checkRange(96);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue97_notCritical() {
    final boolean actual = temperature.checkRange(97);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue98_notCritical() {
    final boolean actual = temperature.checkRange(98);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue985_notCritical() {
    final boolean actual = temperature.checkRange(98.5f);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue995_Critical() {
    final boolean actual = temperature.checkRange(99.5f);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue1005_Critical() {
    final boolean actual = temperature.checkRange(100.5f);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue103_Critical() {
    final boolean actual = temperature.checkRange(103);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue104_Critical() {
    final boolean actual = temperature.checkRange(104);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue105_Critical() {
    final boolean actual = temperature.checkRange(105);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue106_Critical() {
    final boolean actual = temperature.checkRange(106);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue107_Critical() {
    final boolean actual = temperature.checkRange(107);
    assertEquals(true, actual);
  }

  @Test
  public void alertMessageValue985_noAlertMessage() {
    final String actual = temperature.alertMessage(98.5f);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue995_noAlertMessage() {
    final String actual = temperature.alertMessage(99.5f);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue1005_alertFever() {
    final String actual = temperature.alertMessage(100.5f);
    assertEquals("Critical Temperature value: Fever", actual);
  }

  @Test
  public void alertMessageValue103() {
    final String actual = temperature.alertMessage(103);
    assertEquals("Critical Temperature value: Fever", actual);
  }

  @Test
  public void alertMessageValue104_alertHyperpyrexia() {
    final String actual = temperature.alertMessage(104);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }

  @Test
  public void alertMessageValue105_alertHyperpyrexia() {
    final String actual = temperature.alertMessage(105);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }

  @Test
  public void alertMessageValue106_alertHyperpyrexia() {
    final String actual = temperature.alertMessage(106);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }

  @Test
  public void alertMessageValue107_alertHyperpyrexia() {
    final String actual = temperature.alertMessage(107);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }
}