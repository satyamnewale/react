import { useState } from "react";
import data from "./Data";
import "./Style.css";
const Accordian = () => {
  const [select, setSelect] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [multiSelectId, setMultiSelectId] = useState(new Set());

  const onSingleClick = (idOfData) => {
    setSelect(select !== idOfData ? idOfData : null);
  };

const onMultipleClick = (id) => {
  const newSet = new Set(multiSelectId);
  newSet.has(id) ? newSet.delete(id) : newSet.add(id);
  setMultiSelectId(newSet);
};

  return (
    <>
      <div className="wrapper">
        <div onClick={() => setMultiSelect(!multiSelect)} className="multiButton">Multiple Select</div>
        {data && data.length !== 0 ? (
          <div className="title">
            {data.map((data) => {
              return (
                <div key={data.id}>
                  <div
                    className="header"
                    onClick={
                      multiSelect
                        ? () => onMultipleClick(data.id)
                        : () => onSingleClick(data.id)
                    }
                  >
                    <div>{data.question}</div>
                    <span>
                      {multiSelectId.has(data.id) ||
                      select === data.id
                        ? `-`
                        : `+`}
                    </span>
                  </div>
                  <div className="data">
                      {multiSelectId.has(data.id)||
                      select === data.id ? (
                        <div>{data.answer}</div>
                      ) : null}
                    </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>no data present</div>
        )}
      </div>
    </>
  );
};

export default Accordian;
