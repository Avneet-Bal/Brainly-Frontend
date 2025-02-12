import { Button } from './components/ui/Button'
import { PlusIcon } from './icons/PlusIcon'

function App() {

  return (
    <>
    <Button varient='primary' size='sm' text='Share' startIcon={<PlusIcon size='lg' />}></Button>
    <Button varient='secondary' size='md' text='Add Content'></Button>
    <Button varient='secondary' size='lg' text='Add Content'></Button>
    </>
  )
}

export default App
