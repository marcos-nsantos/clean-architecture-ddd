import { Entity } from "@/core/entities/entitiy";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface StudentProps {
  name: string;
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    return new Student(props, id);
  }
}
