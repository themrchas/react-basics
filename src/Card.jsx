

export default function Card() {

    const randomPic = "https://picsum.photos/200/200";

    return (

        <div className="card">
            <img className="card-image" src={randomPic} alt="missing photo"></img>
            <h2 className="card-title">Title: Lorem ipsum dolor sit amet</h2>
            <p className="card-text">consectetur adipisicing elit. Facere officia doloribus architecto aliquam cum eaque libero provident </p>
       
        </div>

    );


}
