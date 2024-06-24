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
  Email as PrismaEmail,
  AiAnalysis as PrismaAiAnalysis,
} from "@prisma/client";

export class EmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EmailCountArgs, "select">): Promise<number> {
    return this.prisma.email.count(args);
  }

  async emails(args: Prisma.EmailFindManyArgs): Promise<PrismaEmail[]> {
    return this.prisma.email.findMany(args);
  }
  async email(args: Prisma.EmailFindUniqueArgs): Promise<PrismaEmail | null> {
    return this.prisma.email.findUnique(args);
  }
  async createEmail(args: Prisma.EmailCreateArgs): Promise<PrismaEmail> {
    return this.prisma.email.create(args);
  }
  async updateEmail(args: Prisma.EmailUpdateArgs): Promise<PrismaEmail> {
    return this.prisma.email.update(args);
  }
  async deleteEmail(args: Prisma.EmailDeleteArgs): Promise<PrismaEmail> {
    return this.prisma.email.delete(args);
  }

  async getAiAnalysis(parentId: string): Promise<PrismaAiAnalysis | null> {
    return this.prisma.email
      .findUnique({
        where: { id: parentId },
      })
      .aiAnalysis();
  }
}