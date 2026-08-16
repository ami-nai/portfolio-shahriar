import { useState } from 'react'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]
const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate())
}

export default function BookingCalendar() {
  const today = startOfDay(new Date())
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() })
  const [selected, setSelected] = useState(null)

  const firstWeekday = new Date(view.year, view.month, 1).getDay()
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate()

  const changeMonth = (delta) => {
    setView((v) => {
      const d = new Date(v.year, v.month + delta, 1)
      return { year: d.getFullYear(), month: d.getMonth() }
    })
  }

  const cells = []
  for (let i = 0; i < firstWeekday; i++) cells.push(null)
  for (let day = 1; day <= daysInMonth; day++) {
    cells.push(new Date(view.year, view.month, day))
  }

  const pick = (date) => {
    if (date < today) return
    setSelected(date)
  }

  return (
    <div className="w-full max-w-sm rounded-2xl border border-line bg-bg p-5">
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={() => changeMonth(-1)}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm transition-colors hover:border-ink hover:bg-ink hover:text-bg"
        >
          ←
        </button>
        <p className="text-sm font-bold tracking-tight">
          {MONTHS[view.month]} {view.year}
        </p>
        <button
          onClick={() => changeMonth(1)}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-line text-sm transition-colors hover:border-ink hover:bg-ink hover:text-bg"
        >
          →
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {WEEKDAYS.map((d) => (
          <span key={d} className="py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-grey">
            {d}
          </span>
        ))}
        {cells.map((date, i) => {
          if (!date) return <span key={`empty-${i}`} />
          const iso = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
          const isSelected = selected && iso === `${selected.getFullYear()}-${selected.getMonth()}-${selected.getDate()}`
          const isToday = iso === `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
          const disabled = date < today
          return (
            <button
              key={iso}
              disabled={disabled}
              onClick={() => pick(date)}
              className={`flex h-9 items-center justify-center rounded-full text-sm transition-colors ${
                isSelected
                  ? 'bg-ink font-bold text-bg'
                  : disabled
                    ? 'text-faint'
                    : isToday
                      ? 'font-bold text-ink ring-1 ring-inset ring-ink'
                      : 'text-ink hover:bg-ink/10'
              }`}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>

      <p className="mt-4 text-center text-sm text-grey">
        {selected
          ? `Selected: ${selected.toLocaleDateString(undefined, {
              weekday: 'long', month: 'short', day: 'numeric',
            })}`
          : 'Pick an open date'}
      </p>
    </div>
  )
}