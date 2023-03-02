import React, { useState } from 'react'
import axios from 'axios'
import {v4 as uuid} from 'uuid'

const useFlip = () => {
    const [state, setState] = useState(true)
    const flip = () => {
        setState (state => !state)
    }
    return [state, flip]
}

const useAxios = (baseUrl, name="") => {
    const [cards, setCards] = useState([])
    const addCard = async () => {
        const res = await axios.get(`${baseUrl}${name}`)
        setCards(cards => [...cards, { ...res.data, id: uuid() }])
    }
    return [cards, addCard]
}
// export default useFlip
export { useFlip, useAxios }