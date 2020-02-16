import trighbsData from '../../_data/trighbs/trighbs.data'

/**
 * @returns Array<{ trighb: string, buildings: Array<Building>}>
 */
const orderByTrighb = buildings => {

  const buildingEntries = Object.entries(buildings)
    
  // ##1 SHAPES the `building` object
  // Computes & binds `id` and `trighb` property to <Building> object
  /** `Array<{ id, trighb, ...building }>` */
  const shapedBuilding = buildingEntries.map(
    ([ id, building ]) =>
    
      ({
        id,
        trighb: id
          .split('-')[0],
        ...building
      }))

    // ##2 AGGREGATES buildings by `trighb`
    /** `{ [trighb] : Array<Building> }` */
    const trighsbBuildings = shapedBuilding.reduce(
      (acc, building) => {

        const trighb = building.trighb

        if (!acc[trighb]) {

          acc[trighb] = [ building ]
          
        } else {

          acc[trighb].push(building)
        }

        return acc
      },
      {}
    )

    // ##3 SORTS trighb buildings by trighb index

    const trighbsIndex = Object.keys(trighbsData)

    // #3.1 SHAPES buildings to Object entries
    // Keeps the trighb id,
    //  casts aggregation to Array
    //  & binds trighb id & buildings list to Object
    const trighsbBuildingsList = Object.entries(trighsbBuildings)

      .map(
        ([ trighb, buildings ]) =>
        
          ({
            trighb,
            buildings
          }))

    // #3.2 SORTS the resulting array
    /** `{ [trighb] : Array<Building> }` */
    const sortedTrighbsBuildings = trighsbBuildingsList.sort(
      (a, b) =>

        trighbsIndex[b[trighb]]
          - trighbsIndex[a[trighb]]
    )

    return sortedTrighbsBuildings
}

export default orderByTrighb