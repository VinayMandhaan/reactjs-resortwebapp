import React from 'react'
import {useContext} from 'react'
import {RoomContext} from "../context"
import Title from "./Title"


const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {

    const context = useContext(RoomContext)
    const{
     handleChange,type,capacity,price,minPrice,maxPrice,minSize,MaxSize,breakfast,pets }= context
     let types= getUnique(rooms,"type")
     types = ["all", ...types]
     types = types.map((item,index)=>{
         return <option value={item} key={index} >{item}</option>
     })
    return (
        <section className="filter-container">
            <Title title="Search Rooms"/>
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">Room Type</label>
                    <select className="form-control" onChange={handleChange} name="type" id="type" value={type}>
                        {types}
                    </select>
                </div>
            </form>
        </section>
    )
}

export default RoomFilter
