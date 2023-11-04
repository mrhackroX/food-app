import ResCard from './ResCard'
export const Body = (props) => {
    return props.mockData.map((item) => {
        return (
            <ResCard
                name={item.info.name}
                cuisine={item.info.cuisine[0].name}
                rating={item.info.rating.aggregate_rating}
                key={item.info.resId}
                imgUrl={item.info.image.url}
            />
        )
    })
}
