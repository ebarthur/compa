import clsx from "clsx"

interface Props {
  className?: string
  selectedDay?: number
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]

function DaysHeader({ className, selectedDay = 1 }: Props) {
  return (
    <div className={clsx("flex gap-2", className)}>
      {days.map((day, index) => (
        <a
          href={`?day=${index}`}
          key={index}
          className={clsx(
            "text-center font-medium flex-1 px-2 bg-zinc-200 dark:bg-neutral-800 rounded-lg text-secondary hover:bg-zinc-300 dark:hover:bg-neutral-700 transition-[background] duration-200",
            {
              "!bg-blue-600 !text-white": index === selectedDay,
            }
          )}
        >
          {day.substring(0, 3)}
        </a>
      ))}
    </div>
  )
}

export { DaysHeader }
