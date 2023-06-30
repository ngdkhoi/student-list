import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiQuery, ApiTags } from '@nestjs/swagger';
import { StudentService } from './student.service';

@Controller('student')
@ApiTags('student-api')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get('/student-marks')
  @ApiQuery({ name: 'studentId', type: Number, required: true, description: 'View all student\'s mark' })
  async getAllStudentMarks(@Query() req) {
    return await this.studentService.getAllStudentMarks(Number(req.studentId))
  }

  @Post('/update-student-mark')
  @ApiQuery({ name: 'markId', type: Number, required: true, description: 'mark Id' })
  @ApiQuery({ name: 'newMark', type: Number, required: true, description: 'new mark' })
  @ApiQuery({ name: 'newFactor', type: Number, required: false, description: 'new factor' })
  async updateStudentMark(@Query() req) {
    return await this.studentService.updateStudentMark(Number(req.markId), Number(req.newMark), Number(req.newFactor))
  }
}
