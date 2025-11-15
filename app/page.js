import Link from "next/link"

export default function Page() {
  const week2 = "/week-2";
  const week3 = "/week-3";
  const week4 = "/week-4";
  const week5 = "/week-5";
  const week6 = "/week-6";
  const week7 = "/week-7";
  const week8 = "/week-8";
  const week9 = "/week-9";

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
  <br></br>
  <Link href={week6}>
    Week-6
  </Link>
  <br></br>
  <Link href={week7}>
    Week-7
  </Link>
  <br></br>
  <Link href={week8}>
    Week-8
  </Link>
  <br></br>
  <Link href={week9}>
    Week-9
  </Link>
 </main>
 );
}