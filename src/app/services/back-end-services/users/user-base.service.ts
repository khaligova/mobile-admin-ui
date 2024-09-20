import { LoginResponse } from "./models/responses/login-response";

export abstract class UserBaseService{
   abstract login(secretKey:string):Promise<LoginResponse>;
}