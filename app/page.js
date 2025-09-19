import Link from "next/link"

export default function Page() {
  const week2 = "/week-2";
  const week3 = "/week-3";

 return (
 <main>
 <h1>"CPRG 306: Web Development 2 - Assignments"</h1>
 <Link href={week2}>
    Week-2
  </Link>
  <Link href={week3}>
    Week-3
  </Link>
 </main>
 );
}