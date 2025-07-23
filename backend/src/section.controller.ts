import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SectionService } from './section.service';

@Controller('sections')
export class SectionController {
  constructor(private readonly sectionService: SectionService) {}

  @Post()
  async create(@Body('idea') idea: string) {
    const section = await this.sectionService.createSection(idea);
    return section;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const section = await this.sectionService.getSectionById(id);
    if (!section) {
      return { error: 'Not found' };
    }
    return section;
  }
} 