export const gotParks = (parks) => ({
  type: "GOT_PARKS",
  payload: parks
})

export const searchParksByName = (renderedParks) => ({
  type: "SEARCH_PARKS_BY_NAME",
  payload: renderedParks
})

export const searchParksByState = (renderedParks) => ({
  type: "SEARCH_PARKS_BY_STATE",
  payload: renderedParks
})

export const resetParkCards = (parks) => ({
  type: "RESET_PARK_CARDS",
  payload: parks
})
