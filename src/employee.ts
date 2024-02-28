interface Employee{
    id: string;
    name: string;
    division: string;
}



interface Manager extends Employee{
    numberOfEmployees: number;
}