import { SectionService } from './section.service';
export declare class SectionController {
    private readonly sectionService;
    constructor(sectionService: SectionService);
    create(idea: string): Promise<import("./section.schema").Section>;
    findOne(id: string): Promise<import("./section.schema").Section | {
        error: string;
    }>;
}
