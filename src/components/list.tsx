import React from 'react'

export type ListProps = {
    title: string;
    //items: object;

}

export const List: React.FC<ListProps> = ({
    title,
    //items,

}) => (

    <div className='font-interreg text-[22px] mt-4'>
        <h1>
            {title}
        </h1>
    </div>

);