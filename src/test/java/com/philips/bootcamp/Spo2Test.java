/*
 * The copyright of this file belongs to Koninklijke Philips N.V., 2019.
 */
package com.philips.bootcamp;

import static org.junit.Assert.assertEquals;
import org.junit.Test;
import com.philips.bootcamp.service.Spo2;

public class Spo2Test {
  Spo2 spo2 = new Spo2();

  @Test
  public void spo2Value96_notCritical() {
    final boolean actual = spo2.checkRange(96);
    assertEquals(false, actual);
  }

  @Test
  public void spo2Value95_notCritical() {
    final boolean actual = spo2.checkRange(95);
    assertEquals(false, actual);
  }

  @Test
  public void spo2Value94_notCritical() {
    final boolean actual = spo2.checkRange(94);
    assertEquals(false, actual);
  }

  @Test
  public void spo2Value91_notCritical() {
    final boolean actual = spo2.checkRange(91);
    assertEquals(false, actual);
  }

  @Test
  public void spo2Value90_Critical() {
    final boolean actual = spo2.checkRange(90);
    assertEquals(true, actual);
  }

  @Test
  public void spo2Value89_Critical() {
    final boolean actual = spo2.checkRange(89);
    assertEquals(true, actual);
  }

  @Test
  public void spo2Value71_Critical() {
    final boolean actual = spo2.checkRange(71);
    assertEquals(true, actual);
  }

  @Test
  public void spo2Value70() {
    final boolean actual = spo2.checkRange(70);
    assertEquals(true, actual);
  }

  @Test
  public void spo2Value69_Critical() {
    final boolean actual = spo2.checkRange(69);
    assertEquals(true, actual);
  }

  @Test
  public void alertMessageValue69_alertMessageLackOfOxygen() {
    final String actual = spo2.alertMessage(69);
    assertEquals("Critical Spo2 reading: Extreme lack of oxygen, ischemic diseases may occur.", actual);
  }

  @Test
  public void alertMessageValue70_alertMessageHypoxemia() {
    final String actual = spo2.alertMessage(70);
    assertEquals("Critical Spo2 reading: Hypoxemia. Unhealthy and unsafe level.", actual);
  }

  @Test
  public void alertMessageValue71_alertMessageHypoxemia() {
    final String actual = spo2.alertMessage(71);
    assertEquals("Critical Spo2 reading: Hypoxemia. Unhealthy and unsafe level.", actual);
  }

  @Test
  public void alertMessageValue89_alertMessageHypoxemia() {
    final String actual = spo2.alertMessage(89);
    assertEquals("Critical Spo2 reading: Hypoxemia. Unhealthy and unsafe level.", actual);
  }

  @Test
  public void alertMessageValue90_alertMessageHypoxemia() {
    final String actual = spo2.alertMessage(90);
    assertEquals("Critical Spo2 reading: Hypoxemia. Unhealthy and unsafe level.", actual);
  }

  @Test
  public void alertMessageValue91_noAlertMessage() {
    final String actual = spo2.alertMessage(91);
    assertEquals("", actual);
  }
}
