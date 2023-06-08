import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="m-24 grid grid-cols-4 gap-12 rounded-md">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="col-span-4 bg-white p-8 md:col-span-2 xl:col-span-4"
          key={id}
        >
          <Skeleton className="h-6 w-1/2"></Skeleton>
          <Skeleton className="mb-4 h-6 w-1/4"></Skeleton>

          <Skeleton className="h-80 w-full rounded-md bg-gray-400"></Skeleton>
        </div>
      ))}
    </main>
  )
}
