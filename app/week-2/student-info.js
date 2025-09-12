    import Link from 'next/link';

    export default function StudentInfo() {
      const studentName = "Tony Do";
      const githubRepoLink = "https://github.com/Tony12A/cprg306-assignment";

      return (
        <div>
          <p>Name: {studentName}</p>
          <p>
            GitHub Repository: {''}
            <Link href={githubRepoLink}>
            Github Link
            </Link>
          </p>
        </div>
      );
    }