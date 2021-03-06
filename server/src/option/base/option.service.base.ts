/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Option, User } from "@prisma/client";

export class OptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.OptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionFindManyArgs>
  ): Promise<number> {
    return this.prisma.option.count(args);
  }

  async findMany<T extends Prisma.OptionFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionFindManyArgs>
  ): Promise<Option[]> {
    return this.prisma.option.findMany(args);
  }
  async findOne<T extends Prisma.OptionFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionFindUniqueArgs>
  ): Promise<Option | null> {
    return this.prisma.option.findUnique(args);
  }
  async create<T extends Prisma.OptionCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionCreateArgs>
  ): Promise<Option> {
    return this.prisma.option.create<T>(args);
  }
  async update<T extends Prisma.OptionUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionUpdateArgs>
  ): Promise<Option> {
    return this.prisma.option.update<T>(args);
  }
  async delete<T extends Prisma.OptionDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.OptionDeleteArgs>
  ): Promise<Option> {
    return this.prisma.option.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.option
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
