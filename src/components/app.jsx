import { useState } from "react";

function App() {

    const [buts, setbuts] = useState([
        {
          id: 1,
          name: "Sort by price",
        },
        {
          id: 2,
          name: "Sort by name",
        },
        {
          id: 3,
          name: "Sort by relevance",
        }
    ]);



    function Handler(id) {
        const but = document.querySelectorAll(".panel-button")
        for (let i = 0; i < but.length; i++) {
            if (but[i].classList.contains("open")) {
                but[i].classList.remove("open")
            }
        }
        but[id-1].classList.add("open")
    }


    return(
        <div className="content">
            <div className="panel">
            {buts.map((item) => (
                <button className="panel-button" key={item.id} onClick={() => Handler(item.id)}>{item.name}</button>
            ))}
            </div>
        </div>
    )
}

export default App