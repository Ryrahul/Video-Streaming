import {
  BadRequestException,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Req,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { buffer } from 'stream/consumers';
import { VideoService } from './video.service';
import { Request, Response } from 'express';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}
  @Post()
  @UseInterceptors(FileInterceptor('video'))
  async video(
    @UploadedFile()
    video: Express.Multer.File,
  ) {
    if (!video) {
      throw new BadRequestException('No Video Uploaded');
    }
    const filename = video.originalname;
    await this.videoService.uploadVideo(filename, video.buffer);

    return {
      file: filename,
    };
  }
  @Post(':filename')
  async getVideo(
    @Param() {filename}:{filename: string},
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      await this.videoService.streamVideo(filename, res, req);
    } catch (e) {
      return {
        message: e.message,
      };
    }
  }
}
