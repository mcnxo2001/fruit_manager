import React from 'react'

interface DataContain {
    index: number,
    property: {
        id: number,
        reportName: string;
    }[],
    setselectSuggetion: (selectSuggetion: number) => void,
};

export default function Suggetion(props: DataContain) {

    // suggetion function click
    const fnHandleCkickSuggetion = (event: React.MouseEvent<HTMLLIElement>, data: any) => {
        let reportCode = document.getElementById('reportCode') as HTMLInputElement
        reportCode.value = event.currentTarget.textContent as string
        props.setselectSuggetion(data)
    }

    return (
        <div className='fmAutocomplete'>
            {
                props.property.map((data, index) => {
                    return (
                        <li
                            key={data.id}
                            onClick={(event: React.MouseEvent<HTMLLIElement>) => fnHandleCkickSuggetion(event, data.id)}
                            style={{
                                backgroundColor: index === props.index ? 'blue' : 'white',
                                color: index === props.index ? 'white' : 'black'
                            }}
                        >
                            {data.reportName}
                        </li>
                    )
                })
            }
        </div>
    )
}
