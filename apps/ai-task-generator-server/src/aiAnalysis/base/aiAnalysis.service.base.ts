/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  AiAnalysis as PrismaAiAnalysis,
  Email as PrismaEmail,
  Task as PrismaTask,
} from "@prisma/client";

export class AiAnalysisServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AiAnalysisCountArgs, "select">
  ): Promise<number> {
    return this.prisma.aiAnalysis.count(args);
  }

  async aiAnalyses(
    args: Prisma.AiAnalysisFindManyArgs
  ): Promise<PrismaAiAnalysis[]> {
    return this.prisma.aiAnalysis.findMany(args);
  }
  async aiAnalysis(
    args: Prisma.AiAnalysisFindUniqueArgs
  ): Promise<PrismaAiAnalysis | null> {
    return this.prisma.aiAnalysis.findUnique(args);
  }
  async createAiAnalysis(
    args: Prisma.AiAnalysisCreateArgs
  ): Promise<PrismaAiAnalysis> {
    return this.prisma.aiAnalysis.create(args);
  }
  async updateAiAnalysis(
    args: Prisma.AiAnalysisUpdateArgs
  ): Promise<PrismaAiAnalysis> {
    return this.prisma.aiAnalysis.update(args);
  }
  async deleteAiAnalysis(
    args: Prisma.AiAnalysisDeleteArgs
  ): Promise<PrismaAiAnalysis> {
    return this.prisma.aiAnalysis.delete(args);
  }

  async findEmails(
    parentId: string,
    args: Prisma.EmailFindManyArgs
  ): Promise<PrismaEmail[]> {
    return this.prisma.aiAnalysis
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .emails(args);
  }

  async getTask(parentId: string): Promise<PrismaTask | null> {
    return this.prisma.aiAnalysis
      .findUnique({
        where: { id: parentId },
      })
      .task();
  }
}