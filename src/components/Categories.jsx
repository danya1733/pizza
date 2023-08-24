import React from "react";

function Categories() {
    const [ActiveIndex, SetActiveIndex] = React.useState(1)
    const categories = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'

    ]
    const onClickCategory = (index) => {
        SetActiveIndex(index);
    }
    return (
        <div className="categories">
            <ul>
                {
                    categories.map((value, index) => (
                        <li key={index} onClick={() => SetActiveIndex(index)}
                            className={ActiveIndex === index ? "active" : ""}>{value}</li>
                    ))

                }
            </ul>
        </div>
    )
}

export default Categories;