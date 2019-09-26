export class Vitals {
    temperature: number;
    spo2: number;
    pulserate: number;

    public constructor(temperature: number, spo2: number, pulserate: number) {
        this.temperature = temperature;
        this.spo2 = spo2;
        this.pulserate = pulserate;
    }
}

