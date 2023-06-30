import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getAllStudentMarks(studentId: number) {
    try {
      return await this.prisma.studentMarks.findMany({
        where:{
          studentId: studentId
        },
        include: {
          subject: true,
        }
      })
    } catch (error) {
      return 'something was wrong'
    }
  }

  async updateStudentMark(markId: number, newMark: number, newFactor: number){
    try {
      return await this.prisma.studentMarks.update({
        where:{
          id: markId
        },
        data: Object.entries({
          mark: newMark,
          factor: newFactor
        }).reduce((a,[k,v]) => (v == null || isNaN(v) ? a : (a[k]=v, a)), {}),
        include: {
          subject: true
        }
      })
    } catch (error) {
      console.log(error);
      
      return 'something was wrong'
    }
  }
}
