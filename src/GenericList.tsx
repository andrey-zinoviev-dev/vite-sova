interface GenericList<T> {
  items: T[],
  renderItem: (item: T, index: number) => React.ReactNode,
  className: string,
}

export default function GenericList<T>({items, renderItem, className}: GenericList<T>) {
  return (
    <ul className={className}>
      {items.map((item, index) => {
        return <li key={Math.ceil(Math.random() * 100)}>
          {renderItem(item, index)}
        </li>
      })}
    </ul>
  )
}