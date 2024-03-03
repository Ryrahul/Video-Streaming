import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import { Request, Response } from 'express';

@Injectable()
export class VideoService {
  private readonly uploadDir = './uploads/';
  async uploadVideo(filename: string, video: Buffer) {
    if (!fs.existsSync(this.uploadDir)) {
      fs.mkdirSync(this.uploadDir, { recursive: true });
    }
    const filePath = path.join(this.uploadDir, filename);
    fs.writeFileSync(filePath, video);
  }
  async streamVideo(filename: string, res: Response, req: Request) {
    try {
      const filePath = path.join(this.uploadDir, filename);
      const finalfilepath = filePath + '.mp4';
      const stat = fs.statSync(finalfilepath);
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
        const parts = range.replace(/bytes=/, '').split('-');
        const start = parseInt(parts[0], 10);
        const end = parseInt(parts[1], 10) || fileSize - 1;
        const chunkSize = end - start + 1;
        const video = fs.createReadStream(finalfilepath, { start, end });
        const head = {
          'Content-Range': `bytes ${start}-${end}/${fileSize}`,
          'Accept-Ranges': 'bytes',
          'Content-Length': chunkSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(206, head);
        video.pipe(res);
      } else {
        const head = {
          'Content-Length': fileSize,
          'Content-Type': 'video/mp4',
        };
        res.writeHead(200, head);
        fs.createReadStream(finalfilepath).pipe(res);
      }
    } catch (e) {
      return e.message;
    }
  }
}
