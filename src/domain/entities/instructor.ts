import { Entity } from "@/core/entities/entitiy";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface InstructorProps {
  name: string;
}

class Instructor extends Entity<InstructorProps> {
  static create(props: InstructorProps, id?: UniqueEntityID) {
    return new Instructor(props, id);
  }
}
