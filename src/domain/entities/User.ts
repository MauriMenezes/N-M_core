export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string
  ) {}

  displayInfo(): string {
    return `User ID: ${this.id}, Name: ${this.name}, Email: ${this.email}`;
  }
}