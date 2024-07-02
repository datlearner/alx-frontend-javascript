export default function getStudentIdsSum(students) {
    if (Array.isArray(students) === false) {
      return 0;
    }
  
    return students.reduce((sumIds, student) => sumIds + student.id, 0);
  }