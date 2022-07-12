/* eslint-disable @typescript-eslint/no-explicit-any */
export const sortByFieldOrder = (fieldOrder: any) => {
  return (a: any, b: any) => (a[fieldOrder] > b[fieldOrder] ? 1 : -1)
}

export const sortByFieldPoints = (fieldPoints: any) => {
  const order = fieldPoints.sort((a: any, b: any) => {
    if (a.balance.points > b.balance.points) {
      return -1
    } else {
      return 0
    }
  })

  return order
}
