import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const square = count ** 2 // 2. useMemo

  const handleClick = async(arg: unknown) => {
    console.log(arg)
  }

  // useMemo(VDOM)

  // dependencies: count, square, callback
  return (
    <>
    {/* 3. useCallback */}
      <span>
        <button onClick={() => setCount((x) => x + 1)}>
          count is {count}
        </button>
        , square is {square}
      </span>
      <button onClick={handleClick}>whatever</button>
    </>
  )
}

// useMemoCache/useCacheMemo
// function useMemoCache(size: number) => {
//   return useState(() => new Array(size).fill(null))
// }

export default App // 1. memo


// COMPILED:

// import { jsxs as _jsxs, Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
// function App() {
//   const [count, setCount] = useState(0);
//   const square = count ** 2; // 2. useMemo

//   // useMemo(result)

//   return /*#__PURE__*/_jsx(_Fragment, {
//     children: /*#__PURE__*/_jsxs("span", {
//       children: [/*#__PURE__*/_jsxs("button", {
//         onClick: () => setCount(x => x + 1),
//         children: ["count is ", count]
//       }), ", square is ", square]
//     })
//   });
// }