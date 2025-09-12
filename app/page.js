import Link from "next/link"

export default function Page() {
  const week2 = "/week-2";

 return (
 <main>
 <h1>"CPRG 306: Web Development 2 - Assignments"</h1>
 <Link href={week2}>
    Week-2
  </Link>
 </main>
 );
}