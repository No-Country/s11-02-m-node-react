import {
  ConflictException,
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import {
  ApiBody,
  ApiConflictResponse,
  ApiConsumes,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('cloudinary')
@Controller('cloudinary')
export class CloudinaryController {
  constructor(private cloudinaryService: CloudinaryService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      description: 'Image to upload',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Image uploaded successfully',
    schema: {
      type: 'object',
      properties: {
        urlImg: {
          type: 'string',
          format: 'url',
        },
        message: {
          type: 'string',
        },
      },
    },
  })
  async uploadImage(@UploadedFile() file: Express.Multer.File) {
    const urlImg = (await this.cloudinaryService.uploadFile(file)).secure_url;
    return { urlImg, message: 'Image uploaded successfully' };
  }
  @Post('uploads')
  @UseInterceptors(FilesInterceptor('file[]', 5))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      description: 'Images to upload (max 5 files)',
      properties: {
        files: {
          type: 'array',
          items: {
            type: 'string',
            format: 'binary',
          },
        },
      },
    },
  })
  @ApiOkResponse({
    description: 'Images uploaded successfully',
    schema: {
      type: 'object',
      properties: {
        urlsImages: {
          type: 'array',
          items: {
            type: 'string',
            format: 'url',
          },
        },
        message: {
          type: 'string',
        },
      },
    },
  })
  @ApiConflictResponse({ description: 'Max 5 files' })
  async uploadImages(@UploadedFiles() files: Express.Multer.File[]) {
    if (files.length > 5) throw new ConflictException('Max 5 files');
    const urlsImages = [];

    for (const file of files) {
      const result = await this.cloudinaryService.uploadFile(file);
      urlsImages.push(result.secure_url);
    }
    return {
      urlsImages,
      message: 'Images uploaded successfully',
    };
  }
}
