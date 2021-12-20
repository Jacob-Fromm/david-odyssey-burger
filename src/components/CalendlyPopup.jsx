import React from 'react'
import {InlineWidget, PopupButton, PopupText, PopupWidget} from 'react-calendly'
import {useStaticQuery, graphql } from 'gatsby'

export default function CalendlyPopup(props) {
    const data = props.readings
    const tarotData = []
    const astrologyData = []
    const comboData = []
    const separateData = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            console.log("data from function: ", arr[i])
            if (arr[i].node.category === "Tarot") {
                tarotData.push(arr[i])
            } else if (arr[i].node.category === "Astrology") {
                astrologyData.push(arr[i])
            } else if (arr[i].node.category === "Combo Packages") {
                comboData.push(arr[i])
            }
        }
    }
    const takeTarot = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            return makeTarot(arr[i].node)
        }
    }
    
    const makeTarot = (arr) => {
        return arr.map ((tarotItem) => {
            return (
                <div className='calendly-btn-and-text'>
                    {console.log("makeTarot function: ", tarotItem.node)}
                    <div className='calendly-title-and-text'>
                        <h4><strong>{tarotItem.node.title}, ${tarotItem.node.price}</strong></h4>
                        <p><em>{tarotItem.node.description}</em></p>
                    </div>
                        <PopupText
                            text="Click to Purchase"
                            url={tarotItem.node.url}
                        />
                </div>
            )
        })
    }
    const makeAstro = (arr) => {
        return arr.map ((astroItem) => {
            return (
                <div className='calendly-btn-and-text'>
                    {console.log("makeastro function: ", astroItem.node)}
                    <div className='calendly-title-and-text'>
                        <h4><strong>{astroItem.node.title}, ${astroItem.node.price}</strong></h4>
                        <p><em>{astroItem.node.description}</em></p>
                    </div>
                        <PopupText
                            text="Click to Purchase"
                            url={astroItem.node.url}
                        />
                </div>
            )
        })
    }
    const makeCombo = (arr) => {
        return arr.map ((comboItem) => {
            return (
                <div className='calendly-btn-and-text'>
                    {console.log("makecombo function: ", comboItem.node)}
                    <div className='calendly-title-and-text'>
                        <h4><strong>{comboItem.node.title}, ${comboItem.node.price}</strong></h4>
                        <p><em>{comboItem.node.description}</em></p>
                    </div>
                        <PopupText
                            text="Click to Purchase"
                            url={comboItem.node.url}
                        />
                </div>
            )
        })
    }

    separateData(data)
    return (
        <div className='calendly-container'>
            <div className="category-tarot">      
            <h2>Tarot</h2>
            {tarotData.length > 0 ?
                    <>
                        {makeTarot(tarotData)}
                    </>
                : 
                    <>
                    </>
                    }
            </div>
            <div className="category-astrology">
                <h2>Astrology</h2>
                {astrologyData.length > 0 ? 
                    <>
                    {makeAstro(astrologyData)}
                    </>
                : 
                    <>
                    </>
                }
            </div>
            <div className="category-combo">
            <h2>Packages</h2>
             {astrologyData.length > 0 ? 
                    <>
                    {makeCombo(comboData)}
                    </>
                : 
                    <>
                    </>
                }
            </div>
        </div>
    )
}