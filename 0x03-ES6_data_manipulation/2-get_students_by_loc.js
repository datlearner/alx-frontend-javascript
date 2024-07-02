export default function getStudentsByLocation(students, city) {
    if (Array.isArray(students) === false) {
      return [];
    }
  
    return students.filter((student) => (student.location === city));
  }