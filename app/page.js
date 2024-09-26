import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white">
      <h1>CPRG 306: Web Development2 - Assignments</h1>
      <div>
        <Link href="/week-2">
          ****************CLICK HERE TO WEEK-2*****************
        </Link>
      </div>
      <div>
        <Link href="/week-3">
          ****************CLICK HERE TO WEEK-3*****************
        </Link>
      </div>
      <div>
        <Link href="/week-4">
          ****************CLICK HERE TO WEEK-4*****************
        </Link>
      </div>
    </main>
  );
}
