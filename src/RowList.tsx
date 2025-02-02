import GenericList from "./GenericList";

interface RowListInterface<T> {
  items: T[],
}

export default function RowList<T extends {title: string}>({items}: RowListInterface<T>) {
  return (
    <GenericList className="" items={items} renderItem={(item) => {
      return <button>
        <span>{item.title}</span>
      </button>
    }}></GenericList>
  )
}