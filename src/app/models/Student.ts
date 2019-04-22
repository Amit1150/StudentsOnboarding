import { Category } from './Category';
import { Document } from 'src/app/models/Document';

export interface Student {
    id: number;
    name: string;
    category:Category;
    documents:Document[];
    dob:string;
    fatherName:string;
    motherName:string;
    score:string;
}