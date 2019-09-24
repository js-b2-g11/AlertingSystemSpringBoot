export class Patient {
    patientId: string;
    bedId: number;
    name: string;
    age: number;
    gender: string;
    temperature_alert: boolean;
    spo2_alert: boolean;
    pulse_rate_alert: boolean;

    public constructor(patientId:string, bedId: number, name: string, age: number,
        gender: string, temperature_alert: boolean, spo2_alert: boolean, pulse_rate_alert: boolean) {
            this.patientId = patientId;
            this.bedId = bedId;
            this.name = name;
            this.age = age;
            this.gender = gender;
    }
}