import Link from "next/link";

export default function Page() {
  return (
    <main className="my-24 mx-60">
      <h1 className="text-4xl font-bold">
        CPRG 306: Web Development2 - Assignments
      </h1>
      <div className="my-5 text-lg">
        <div>
          <Link href="/week-2">WEEK 2 Assignment</Link>
        </div>
        <div>
          <Link href="/week-3">WEEK 3 Assignment </Link>
        </div>
        <div>
          <Link href="/week-4">WEEK 4 Assignment </Link>
        </div>
        <div>
          <Link href="/week-5">WEEK 5 Assignment </Link>
        </div>
        <div>
          <Link href="/week-6">WEEK 6 Assignment </Link>
        </div>
        <div>
          <Link href="/week-7">WEEK 7 Assignment </Link>
        </div>
        <div>
          <Link href="/week-8">WEEK 8 Assignment </Link>
        </div>
        <div>
          <Link href="/week-9">WEEK 9 Assignment </Link>
        </div>
        <div>
          <Link href="/week-10">WEEK 10 Assignment </Link>
        </div>
      </div>
    </main>
  );
}
