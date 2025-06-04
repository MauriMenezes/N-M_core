import { UserRepository } from "./infrastructure/repositories/UserRepositorie";
import { UserServices } from "./infrastructure/services/UserServices";
import { userController } from "./api/controllers/UserController";


const userRepo = new UserRepository();
const UserService = new UserServices(userRepo);
const controllerUser = new userController(UserService);

export {controllerUser}
