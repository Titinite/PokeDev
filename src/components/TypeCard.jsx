const TypeCard = ({ type }) => {
    return (
        <article key={type.id}>
            <h2>{type.name}</h2>
            <img src={type.image} alt={type.name} />
        </article>
    )
}

export default TypeCard;