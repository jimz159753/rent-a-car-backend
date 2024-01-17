import { RegisterAuthDto } from "./register-auth.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdatePasswordAuthDto extends PartialType(RegisterAuthDto) { }