import React from 'react';
import Button from './Button.jsx';

function Card({ data }) {
    const {
        title,
        description,
        tags = [],
        image,
        linkLabel,
        link = "#",
        vertical = false,
        date,
    } = data;

    // Determine default label and styles
    const finalLabel = linkLabel || (vertical ? "Read" : "View Case Study");
    const buttonClasses = `rounded-full px-5 py-1 ${!linkLabel && vertical ? 'bg-white text-black' : ''
        }`;

    return (
        <div
            className={`${vertical
                    ? 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#6b4a3c] to-[#CBCBCB7A]'
                    : ' bg-radial from-[#985639] to-[#CBCBCB7A]'
                } ${vertical
                    ? 'flex gap-4 items-end w-full'
                    : 'flex flex-col md:flex-row gap-8 items-center my-8'
                } text-white p-6 rounded-3xl shadow-md`}
        >

            <div
                className={
                    vertical
                        ? 'overflow-hidden rounded-xl w-[140px] h-[140px] min-w-[140px] sm:h-40 '
                        : 'w-full md:w-1/2'
                }
            >
                <img
                    src={image}
                    alt={title}
                    className="rounded-xl  w-full h-full object-cover"
                />
            </div>

            <div
                className={
                    vertical
                        ? 'flex flex-col flex-1 px-6 sm:jstify-between sm:items-center py-6 '
                        : 'w-full md:w-1/2 flex flex-col gap-4'
                }
            >
                {date && <p className="text-sm  text-gray-300">{date}</p>}

                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="text-sm text-gray-300">{description}</p>

                {tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap my-2">
                        {tags.map((tag, index) => (
                            <Button key={index} text={tag} variant="outline" />
                        ))}
                    </div>
                )}

                {link && (
                    <div
                        className={`md:relative  lg:relative sm:relative : ${vertical ? 'mt-6  ' : 'py-25   '}`}
                    >
                        <a href={link}>
                            <Button
                                text={finalLabel}
                                className={`bg-white text-black py-2 ${vertical ? 'absolute -right-10 -top-20 sm:absolute sm:-top-5 sm:right-0 ' : ''}`}
                            />
                        </a>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Card;
