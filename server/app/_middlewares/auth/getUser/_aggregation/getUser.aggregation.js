module.exports = token =>

  [
    {
      '$match': {
        'token': token
      }
    }, {
      '$lookup': {
        'from': 'user_buildings', 
        'localField': '_id', 
        'foreignField': 'user', 
        'as': 'user_buildings'
      }
    }, {
      '$unwind': {
        'path': '$user_buildings'
      }
    }, {
      '$project': {
        'email': 1,
        'pseudo': 1, 
        'buildings': '$user_buildings.buildings'
      }
    }
  ]