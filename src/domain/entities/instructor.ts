import { Entity } from "../../core/entities/entitiy";

interface InstructorProps {
  name: string;
}

class Instructor extends Entity<InstructorProps> {}
