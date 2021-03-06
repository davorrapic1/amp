/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { LinkUpdateManyWithoutUsersInput } from "./LinkUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { OptionUpdateManyWithoutUsersInput } from "./OptionUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LinkUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LinkUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LinkUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  links?: LinkUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => OptionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => OptionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => OptionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  options?: OptionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
