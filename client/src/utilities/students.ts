type StudentRow = {
  id: number;
  name: string;
  sex: string;
  placeDateOfBirth: string;
  groups: string[];
};
export function createStudentRow(
  id: number,
  name: string = '',
  sex: string = '',
  placeOfBirth: string = '',
  dateOfBirth: string = '',
  groups: any[] = []
): StudentRow {
  return {
    id,
    name,
    sex,
    placeDateOfBirth: `${placeOfBirth}, ${dateOfBirth}`,
    groups: groups.map(({ name }) => name),
  };
}

export function studentDataToRows(data: any = []): StudentRow[] {
  return data.map((student: any) =>
    createStudentRow(
      student.id,
      student.name,
      student.sex,
      student.placeOfBirth,
      student.dateOfBirth,
      student.enrollments.map(({ StudyGroup }: any) => StudyGroup)
    )
  );
}