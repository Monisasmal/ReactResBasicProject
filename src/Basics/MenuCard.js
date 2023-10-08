import React from "react";

const MenuCard = ({ menuDatas }) => {
  // console.log(menuDatas);
  return (
    <>
      <section className="main-card--cointainer">
        {menuDatas.map((curElem) => {
            const{id,name, category, Image, Description} = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">
                      {id}
                    </span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">
                      {Description}
                    </span>
                    <div className="card-read">Read</div>
                  </div>
                   <img src={Image} alt="images" className="card-media" />
                  <span className="card-tag subtle">Order Now</span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;