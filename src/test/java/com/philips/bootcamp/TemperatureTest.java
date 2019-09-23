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
  public void temperatureValue96() {
    final boolean actual = temperature.checkRange(96);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue97() {
    final boolean actual = temperature.checkRange(97);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue98() {
    final boolean actual = temperature.checkRange(98);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue985() {
    final boolean actual = temperature.checkRange(98.5f);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue995() {
    final boolean actual = temperature.checkRange(99.5f);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue1005() {
    final boolean actual = temperature.checkRange(100.5f);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue103() {
    final boolean actual = temperature.checkRange(103);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue104() {
    final boolean actual = temperature.checkRange(104);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue105() {
    final boolean actual = temperature.checkRange(105);
    assertEquals(true, actual);
  }

  @Test
  public void temperatureValue106() {
    final boolean actual = temperature.checkRange(106);
    assertEquals(false, actual);
  }

  @Test
  public void temperatureValue107() {
    final boolean actual = temperature.checkRange(107);
    assertEquals(false, actual);
  }

  @Test
  public void alertMessageValue985() {
    final String actual = temperature.alertMessage(98.5f);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue995() {
    final String actual = temperature.alertMessage(99.5f);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue1005() {
    final String actual = temperature.alertMessage(100.5f);
    assertEquals("Critical Temperature value: Fever", actual);
  }

  @Test
  public void alertMessageValue103() {
    final String actual = temperature.alertMessage(103);
    assertEquals("Critical Temperature value: Fever", actual);
  }

  @Test
  public void alertMessageValue104() {
    final String actual = temperature.alertMessage(104);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }

  @Test
  public void alertMessageValue105() {
    final String actual = temperature.alertMessage(105);
    assertEquals("Critical Temperature value: Hyperpyrexia", actual);
  }

  @Test
  public void alertMessageValue106() {
    final String actual = temperature.alertMessage(106);
    assertEquals("", actual);
  }

  @Test
  public void alertMessageValue107() {
    final String actual = temperature.alertMessage(107);
    assertEquals("", actual);
  }
  @Test
  public void alertMessageValue110() {
    final String actual = temperature.alertMessage(110);
    assertEquals("", actual);
  }
}