import { Injectable } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';

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
  async streamVideo(filename: string, res: any) {}
}
