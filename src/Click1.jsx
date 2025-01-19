export default function Click1() {

    const generateRandomColor = () => {

        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i=0; i < 6; i++) {

            color += letters[Math.floor(Math.random() *16)];
        }

        return color;


    }

 
    const clickIt = (e) => {
       console.log("You just clicked a button that has event handler in the component definition");
        console.log("event is ",e);
        e.target.style.backgroundColor = generateRandomColor();
    }

    let click1Style = {

        
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "text"

    };

    return (
        <button style={click1Style} onClick={clickIt} type="button">Click Me</button>
    )

}