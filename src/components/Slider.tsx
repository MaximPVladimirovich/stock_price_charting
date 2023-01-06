import React from 'react';
import useHeadlines from '../hooks/useHeadlines';

const Slider = () => {
    const { headlines, error, isLoading } = useHeadlines();

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return null;
    }

    return (

        <div className='slider'>
            <div>
                {
                    headlines.map((item: any, index: number) => {
                        return (
                            <span className='slider-item' key={index}>
                                <span className='slide-headline'>{item.headline} {" "}
                                    <a href={item.url}>read more</a>
                                </span>
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Slider;