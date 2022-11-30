import React, { useCallback } from 'react'
import { useState } from 'react';
import Plus from "../assets/images/plus.png";


export const TodoInput = () => {
    return (
        <>
            <div className="flex ">
                <form
                    className='flex'>
                    <button
                        type='submit'
                        className='mr-4'>
                        <img className="h-4 mb-1 inline-block" src={Plus} />
                    </button>
                </form>

                <input
                    className="h-[5vh] text-gray-500 text-center w-[8vw] hover:bg-gray-100 rounded-xl"
                    placeholder="Add Item"
                />
            </div>
        </>
    )

}


