import { User } from "../../domain/entities/User";
import { UserRepository } from "../repositories/UserRepositorie";

export class UserServices {
  constructor(private userRepository: UserRepository) {}

  async findByEmail(email: string) {
    return await this.userRepository.findByEmail(email);
  }
  async findById(data: string) {
    return await this.userRepository.findById(data);
  }
  async create(data: User){

    const exist = await this.userRepository.findByEmail(data.email)
    if (!exist){
        return await this.userRepository.create(data);
    }
    return exist;
  }

  
}