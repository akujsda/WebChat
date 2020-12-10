import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Video } from '../graphql';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';

@Resolver('Video')
export class VideoResolvers {
  constructor(private readonly videoService: VideoService) {}

  @Query()
  async videos() {
    return this.videoService.findAll();
  }

  @Mutation('createVideo')
  async create(@Args('input') args: CreateVideoDto): Promise<Video> {
    return await this.videoService.create(args);
  }
}
