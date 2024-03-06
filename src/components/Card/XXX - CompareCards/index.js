// import React from "react";
// import Button from "../../Button";
// import { CompareCardModal } from "./CompareCardModal.style";

// function CompareCards({ compareCards, onClose, show, toggle }) {
//   function newManaCost(item) {
//     return item.replaceAll("{", "").replaceAll("}", "");
//   }

//   return (
//     <CompareCardModal onClose={onClose}>
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className={`modalContainer ${show ? "show" : null} `}
//       >
//         <Button onClick={() => toggle()} text={"Close"} />

//         <div className="compareCardWrapper">
//           {compareCards.map((item) => {
//             return (
//               <div className="compareCardCard">
//                 <h2>{item.name}</h2>

//                 <img
//                   className="modalImage"
//                   alt={item?.name}
//                   src={item?.image}
//                 />

//                 <ul>
//                   <li>MANA VALUE: {newManaCost(item?.mana_cost)}</li>
//                   <li>TYPE: {item?.type_line}</li>
//                   <li>RARITY: {item?.rarity}</li>
//                   {item?.eur ? <li>EUR: {`€${item?.eur}`}</li> : null}
//                   {item?.power ? <li>POWER: {item?.power}</li> : null}
//                   {item?.toughness ? (
//                     <li>TOUGHNESS: {item?.toughness}</li>
//                   ) : null}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </CompareCardModal>
//   );
// }

// export default CompareCards;
