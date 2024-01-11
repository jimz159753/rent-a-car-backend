import { RegisterAuthDto } from "./register-auth.dto";
import { PickType } from "@nestjs/swagger";

export class UpdatePasswordAuthDto extends PickType(RegisterAuthDto, ['password']) { }