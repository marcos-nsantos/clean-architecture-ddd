import { Entity } from "../../core/entities/entitiy";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {}
