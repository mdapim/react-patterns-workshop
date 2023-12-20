import { Flex } from '../../components/Flex/Flex'
import { Button } from '../../components/Button/Button'
import { Card } from '../../components/Card/Card'
import { useState } from 'react'
import { useModal } from '../../context/ModalContext'

export const ToggleModalChallenge = ({ year, onChangeYear }) => {
  const [updatedYear, setUpdatedYear] = useState(year)
  const Modal = useModal()

  return <button onClick={() => {}}> Show Filters</button>
}

// return (
//   <form
//     onSubmit={evt => {
//       evt.preventDefault()
//       onChangeYear(updatedYear)
//     }}
//   >
//     <Card>
//       <Flex>
//         <input
//           type="number"
//           onChange={evt => {
//             setUpdatedYear(evt.currentTarget.valueAsNumber)
//           }}
//           value={updatedYear}
//         />
//         <Button variant="ghost">Go</Button>
//       </Flex>
//     </Card>
//   </form>
// )
