import { Model } from 'mongoose';
import { Section, SectionDocument } from './section.schema';
export declare class SectionService {
    private sectionModel;
    constructor(sectionModel: Model<SectionDocument>);
    createSection(idea: string): Promise<Section>;
    getSectionById(id: string): Promise<Section | null>;
}
