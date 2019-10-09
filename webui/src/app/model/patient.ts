export class Patient {
    patientId: string;
    bedId: number;
    name: string;
    age: number;
    gender: string;
    temperatureAlert: boolean;
    spo2Alert: boolean;
    pulseRateAlert: boolean;
    alerts: any;

    public constructor(
        patientId: string,
        bedId: number,
        name: string,
        age: number,
        gender: string,
        temperatureAlert: boolean,
        spo2Alert: boolean,
        pulseRateAlert: boolean,
        alerts: any) {
        this.patientId = patientId;
        this.bedId = bedId;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.temperatureAlert = temperatureAlert;
        this.spo2Alert = spo2Alert;
        this.pulseRateAlert = pulseRateAlert;
        this.alerts = alerts;
    }
}
