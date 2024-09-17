import { useRouter } from "next/router";

export default function Search() {
  const router = useRouter();

  console.log({ router });
  console.log(router.query);

  return <div>Search</div>;
}
