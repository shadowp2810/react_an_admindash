import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import { render } from "react-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import UsersPage from "./pages/userspage/UsersPage";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="homepage" element={<HomePage />} />
//         <Route path="invoices" element={<UsersPage />}>
//           {/* <Route
//             index
//             element={
//               <main style={{ padding: "1rem" }}>
//                 <p>Select an invoice</p>
//               </main>
//             }
//           />
//           <Route path=":invoiceId" element={<Invoice />} /> */}
//         </Route>
//         <Route
//           path="*"
//           element={
//             <main style={{ padding: "1rem" }}>
//               <p>There's nothing here!</p>
//             </main>
//           }
//         />
//       </Route>
//     </Routes>
//   </BrowserRouter>,
//   rootElement
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
