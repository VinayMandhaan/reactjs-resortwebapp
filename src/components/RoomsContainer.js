import React from 'react'
import RoomFilter from "./RoomFilter"
import RoomList from "./RoomList"
import {withRoomConsumer} from "../context"
import Loading from "./Loading"

const RoomsContainer = ({context}) => {
        const {loading, sortedRooms, rooms} = context
        if(loading)
         {
             return <Loading/>
         }
              return (
                 <>
                   <RoomFilter rooms={rooms}/>
                   <RoomList rooms={sortedRooms}/>
                </>
              )

}

export default withRoomConsumer(RoomsContainer)












// import React from 'react'
// import RoomFilter from "./RoomFilter"
// import RoomList from "./RoomList"
// import {RoomConsumer} from "../context"
// import Loading from "./Loading"

// const RoomsContainer = () => {
    
//     return (
//         <RoomConsumer>
//             {value => {
//                 const {loading, sortedRooms, rooms} = value
//                 if(loading)
//                 {
//                     return <Loading/>
//                 }
//                 return (
//                     <div>
//                         <RoomFilter rooms={rooms}/>
//                         <RoomList room={sortedRooms}/>
//                     </div>
//                 )
//             }}
//     }
//         </RoomConsumer>
//           )
// }

// export default RoomsContainer
