export interface IUser {
  donorName: string;
  donorContact: string;
  amount: number;
}

export const userHeaders: string[] = ["Donor Name", "Donor Contact", "Amount"];

export const userData: [string, string, number][] = [
  ["Isabel Tan", "24tani@isyedu.org", 10000.0],
  ["Lin Htet Aung", "24aungl@isyedu.org", 15000.0],
];
