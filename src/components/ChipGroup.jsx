function ChipGroup({ label, items }) {
  return (
    <div>
      <p className="text-sm font-semibold tracking-wide text-ink/50 uppercase">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-rose/20 px-4 py-1.5 text-sm font-medium text-ink"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ChipGroup
