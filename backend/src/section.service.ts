import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';

@Injectable()
export class SectionService {
  constructor(
    @InjectModel(Section.name) private sectionModel: Model<SectionDocument>,
  ) {}

  async createSection(idea: string): Promise<Section> {
    // Generate 3 dummy sections
    const sections = ['Hero', 'About', 'Contact'];
    const created = new this.sectionModel({ idea, sections });
    return created.save();
  }

  async getSectionById(id: string): Promise<Section | null> {
    return this.sectionModel.findById(id).exec();
  }
} 