export interface CreateFormDto {
  // Ficha de identificación
  name: string;
  fatherName: string;
  motherName: string;
  sex: string;
  civilState: string;
  birthDate: number;
  placeOfBirth: string;
  schooling: string;
  religion: string;
  address: string;
  phone: number;
  emergencyContactName: string;
  emergencyContactNumber: number;
  bloodGroup: string;
}
