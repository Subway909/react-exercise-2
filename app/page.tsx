import Image from "next/image"

import Loading from "./loading"

type Game = {
  id: number
  background_image: string
  rating: number
  name: string
}

const getGames = async (): Promise<Game[]> => {
  const res = await fetch(
    `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`
  )

  if (!res.ok) {
    throw new Error("failed to fetch")
  }

  await new Promise((resolve) => setTimeout(resolve, 6000))

  const data = await res.json()

  return data.results
}

export default async function Home() {
  const games = await getGames()

  return (
    <main className="m-24 grid grid-cols-4 gap-12 rounded-md">
      {games.map((game) => (
        <div
          className="col-span-4 rounded bg-white p-8 md:col-span-2 xl:col-span-4"
          key={game.id}
        >
          <h1>{game.name}</h1>
          <p className="mb-4 text-sm font-bold">{game.rating}</p>

          <div className="relative aspect-video">
            <Image
              src={game.background_image}
              className="rounded-md object-cover"
              alt={game.name}
              fill
            />
          </div>
        </div>
      ))}
    </main>
  )
}
