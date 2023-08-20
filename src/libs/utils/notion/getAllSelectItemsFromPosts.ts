import { TPosts } from "src/types"

export function getAllSelectItemsFromPosts(
  key: "tags" | "category",
  posts: TPosts
) {
  const selectedPosts = posts.filter((post) => post?.[key])
  const items = [...selectedPosts.map((p) => p[key]).flat()]
  const itemObj: { [itemName: string]: number } = {}
  
  items.forEach((item) => {
    if (!item) return
    if (item in itemObj) {
      itemObj[item]++
    } else {
      itemObj[item] = 1
    }
  })
  //tags 일때에는 갯수를 이름 뒤에 붙이고 정렬을 갯수로 함
  const sortedEntries: Array<[string, number]> = key === "tags"
  ? Object.entries(itemObj)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([key, val]) => [`${key} (${val})`, val])
  : Object.entries(itemObj)
      .sort((a, b) => a[0].localeCompare(b[0]));

  const sortedItemObj = sortedEntries.reduce((acc, [key, val]) => {
    acc[key as string] = val
    return acc
  }, {} as { [itemName: string]: number })

  return sortedItemObj
}
