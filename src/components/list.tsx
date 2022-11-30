import React from 'react'
import '../css/global.css'

export type BacListProps = {
    title: string;
    //items: object;

}
export const BacList: React.FC<BacListProps> = ({
    title,
    //items,

}) => (

    <div className='font-interreg text-[22px] mt-4 flex-col'>
        <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            {title}
        </h1>
    </div>

);

export type ProListProps = {
    title: string;
    //items: object;

}
export const ProList: React.FC<ProListProps> = ({
    title,
    //items,

}) => (

    <div className='font-interreg text-[22px] mt-4 flex-col'>
        <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            {title}
        </h1>
    </div>

);

export type ComListProps = {
    title: string;
    //items: object;

}
export const ComList: React.FC<ComListProps> = ({
    title,
    //items,

}) => (

    <div className='font-interreg text-[22px] mt-4 flex-col'>
        <h1 className='mb-4 bg-gray-100 rounded-xl w-[9vw] text-center py-2'>
            {title}
        </h1>
    </div>

);