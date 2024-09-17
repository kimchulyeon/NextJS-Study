import { useRouter } from "next/router";

export default function BookId() {
  const router = useRouter();

  console.log({ router });
  return <div>book idv</div>;
}
