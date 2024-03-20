import { useState, useEffect } from "react";

// useEffect for localStorage ko lagi setItem in local storage [[[everytime items is changed]]]

// get all data from localStorage
const getLocalStorageData = () => {
  //localStorage ma string ma hunxa data aba telai array leuna pary JSON.parse le leuna ta Object ma leuxa tara kei hunna array ma update hunxa
  let lists = localStorage.getItem("lists");
  if (lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
};

function ToDo() {
  const [input, setInput] = useState(""); // yo GET
  const [items, setItems] = useState(getLocalStorageData()); // Yo CREATE in array and ADD items
  const [toggle, setToggle] = useState(true);
  const [isEditId, setIsEditId] = useState(null); // updated Id ko lagi

  // CREATE
  const AddItems = () => {
    // READ
    if (!input) {
      // Get
      alert("Please fill the data");
    } else if (input && !toggle) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditId) {
            return { ...elem, name: input }; // id ani name
          }
          return elem;
        })
      );
      setToggle(true);
      setInput("");
      setIsEditId(null);
    } else {
      const inputData = { id: new Date().getTime().toString(), name: input };
      setItems([...items, inputData]); // Create
      setInput("");
    }
  };

  // UPDATE
  const UpdateItems = (index) => {
    const updateId = items.find((elem) => {
      return index === elem.id;
    });
    setToggle(false);
    setInput(updateId.name);
    setIsEditId(updateId.id);
  };

  // DELETE
  const DeleteItems = (index) => {
    const deletedItems = items.filter((elemValue) => {
      return index !== elemValue.id;
    });
    setItems(deletedItems);
  };

  //DELETE ALL
  const RemoveAll = () => {
    setItems([]);
  };

  // CREATE IN localStorage
  // for localStorage ko lagi useEffect (jaile ni localstorage ma {{{string}}} ma save hunxa tei vayera items(array) lai string ma convert gareko ho)
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div className="bg-white w-full h-auto p-28 rounded-lg">
        <div className="bg-blue-500 w-96 h-96 mx-96 p-4 rounded-sm">
          <h1 className="text-center text-white font-bold">ToDo List</h1>

          <div className="flex p-2 px-4">
            <input
              type="text"
              placeholder="Add a items"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            {toggle ? (
              <button className="bg-white text-black px-4 py-2">
                <i className="fa-solid fa-plus" onClick={AddItems}></i>
              </button>
            ) : (
              <button className="bg-white text-black p-2">
                <i className="fa-solid fa-pen" onClick={AddItems}></i>
              </button>
            )}
          </div>

          <div className="bg-white my-5">
            {items.map((elemValue) => (
              // yo khyal gara hai key={index}
              <div
                className="flex items-center justify-between my-3"
                key={elemValue.id}
              >
                <h2 className="ml-2">{elemValue.name}</h2>
                <div className="flex">
                  <button className="ml-4">
                    <i
                      className="fa-solid fa-pen"
                      onClick={() => UpdateItems(elemValue.id)}
                    ></i>
                  </button>
                  {/* id wala ma () => {} hai  */}
                  <button className="ml-4">
                    <i
                      className="fa-solid fa-trash"
                      onClick={() => DeleteItems(elemValue.id)}
                    ></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="bg-white text-black px-6 h-9"
              onClick={RemoveAll}
            >
              REMOVE ALL
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDo;
