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
  
  // itemObj를 item name으로 정렬
  const sortedItemObj = Object.entries(itemObj)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .reduce((acc, [key, val]) => {
      acc[key] = val
      return acc
    }, {} as { [itemName: string]: number })

  return sortedItemObj
}
