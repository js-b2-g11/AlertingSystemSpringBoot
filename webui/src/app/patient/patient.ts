export class Patient {
    patientId: string;
    bedId: number;
    name: string;
    age: number;
    gender: string;
    temperatureAlert: boolean;
    spo2Alert: boolean;
    pulseRateAlert: boolean;

    public constructor(patientId:string, bedId: number, name: string, age: number,
        gender: string, temperature_alert: boolean, spo2_alert: boolean, pulse_rate_alert: boolean) {
            this.patientId = patientId;
            this.bedId = bedId;
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.temperatureAlert = temperature_alert;
            this.spo2Alert = spo2_alert;
            this.pulseRateAlert = pulse_rate_alert;
    }
}