/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmailUpdateManyWithoutAiAnalysesInput } from "./EmailUpdateManyWithoutAiAnalysesInput";
import {
  ValidateNested,
  IsOptional,
  IsEnum,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { EnumAiAnalysisSentiment } from "./EnumAiAnalysisSentiment";
import { TaskWhereUniqueInput } from "../../task/base/TaskWhereUniqueInput";

@InputType()
class AiAnalysisUpdateInput {
  @ApiProperty({
    required: false,
    type: () => EmailUpdateManyWithoutAiAnalysesInput,
  })
  @ValidateNested()
  @Type(() => EmailUpdateManyWithoutAiAnalysesInput)
  @IsOptional()
  @Field(() => EmailUpdateManyWithoutAiAnalysesInput, {
    nullable: true,
  })
  emails?: EmailUpdateManyWithoutAiAnalysesInput;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  keyTasks?: InputJsonValue;

  @ApiProperty({
    required: false,
    enum: EnumAiAnalysisSentiment,
  })
  @IsEnum(EnumAiAnalysisSentiment)
  @IsOptional()
  @Field(() => EnumAiAnalysisSentiment, {
    nullable: true,
  })
  sentiment?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  summary?: string | null;

  @ApiProperty({
    required: false,
    type: () => TaskWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TaskWhereUniqueInput)
  @IsOptional()
  @Field(() => TaskWhereUniqueInput, {
    nullable: true,
  })
  task?: TaskWhereUniqueInput | null;
}

export { AiAnalysisUpdateInput as AiAnalysisUpdateInput };
