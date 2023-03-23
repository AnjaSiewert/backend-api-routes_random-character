import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data, error, isLoading } = useSWR("/api/random-character", fetcher);

  if (error) return "An error has occurred.";
  if (isLoading) return "is loading";

  return (
    <section>
      <h2>{data.firstName}</h2>
      <p>{data.lastName}</p>
      <p>{data.age}</p>
      <p>{data.twittername}</p>
      <p>{data.geohash}</p>
    </section>
  );
}
