import Link from "next/link"

export default function Page() {
  const week2 = "/week-2";
  const week3 = "/week-3";
  const week4 = "/week-4";
  const week5 = "/week-5";
 return (
 <main>
 <h1>"CPRG 306: Web Development 2 - Assignments"</h1>
 <Link href={week2}>
    Week-2
  </Link>
  <br></br>
  <Link href={week3}>
    Week-3
  </Link>
  <br></br>
  <Link href={week4}>
    Week-4
  </Link>
  <br></br>
  <Link href={week5}>
    Week-5
  </Link>
 </main>
 );
}