import React from 'react'
import { items } from './dummydata'

export default function Listandkeys() {

  return (
    <div>
            <div>
            {items.map((item)=> (
                <ul>
                    <li className='mt-5'>
                    The car {item.car} has a speed of {item.speed} and a color of {item.color}
                    </li>
                </ul>
            ))}
            </div>
    </div>
  )
}
