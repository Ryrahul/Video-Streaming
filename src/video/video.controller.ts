import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { buffer } from 'stream/consumers';

@Controller('video')
export class VideoController {
  @Post()
  @UseInterceptors(FilesInterceptor('video'))
  async video(
    @UploadedFiles()
    video: Array<Express.Multer.File>,
  ) {}
}
