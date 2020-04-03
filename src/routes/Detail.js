import React from "react";
import "./Detail.css";

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;
        if (location.state === undefined) {
            console.log("not receive moive data...\nredirect to Home");
            history.push("/");
        }
    }

    render() {
        const {
            state
        } = this.props.location;

        if (state){
            const {
                year,
                title,
                summary,
                poster,
                rating,
                genres
            } = state;

            return (
                <div className="detail__container">
                    <img src={poster} alt={title} title={title} />
                    <h3>{title}</h3>
                    <h4>{year} year,  {rating} rating</h4>
                    <ul>{genres.map((genre) => <li>{genre}</li>)}</ul>
                    <p>{summary}</p>
                </div>
            )
        }else {
            return null
        }

        
    }
}

export default Detail;