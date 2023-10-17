import { useRouter } from 'next/router';
import studentsData from './studentsData';

const StudentDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const student = studentsData.find(student => student.id === id);

  if (!student) {
    return <div>학생을 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <h1>{student.name}의 세부 정보</h1>
      <p>나이: {student.age}</p>
    </div>
  );
};

export default StudentDetails;