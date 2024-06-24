/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AiAnalysisWhereUniqueInput } from "./AiAnalysisWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AiAnalysisUpdateInput } from "./AiAnalysisUpdateInput";

@ArgsType()
class UpdateAiAnalysisArgs {
  @ApiProperty({
    required: true,
    type: () => AiAnalysisWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AiAnalysisWhereUniqueInput)
  @Field(() => AiAnalysisWhereUniqueInput, { nullable: false })
  where!: AiAnalysisWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AiAnalysisUpdateInput,
  })
  @ValidateNested()
  @Type(() => AiAnalysisUpdateInput)
  @Field(() => AiAnalysisUpdateInput, { nullable: false })
  data!: AiAnalysisUpdateInput;
}

export { UpdateAiAnalysisArgs as UpdateAiAnalysisArgs };
